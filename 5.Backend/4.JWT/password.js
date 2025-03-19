import express, { json } from "express"
import bcrpyt from "bcrypt"

const app = express()

const users = []

app.use( express.json() )
app.use( express.urlencoded({extended : true }) )

app.get( "/users" , (req , res) => {

    res.json(users)

} )

app.post("/users" , async (req , res) => {

    console.log("Hi")

    console.log( req.body )

    try{

        const salt = await bcrpyt.genSalt()
        const hashedPassword = await bcrpyt.hash( req.body.pass , salt   )

        console.log("salt" , salt )
        console.log("hashedPassword" , hashedPassword )
        
        const user = { name : req.body.name , password : hashedPassword }

        users.push( user )

        res.status(200).send()

    }
    catch(err){
        res.status(500).json(err.message)
    }

})


app.post("/users/login" , async ( req , res ) => 


    {

        const givenUser = users.find( user => user.name = req.body.name )

        if( ! givenUser){
            res.status(401).json("No user found")
            return
        }


        console.log( req.body )

        const isCorrect = await bcrpyt.compare(   req.body.pass    , givenUser.password )

        console.log( isCorrect )

        if( isCorrect ){

            res.status(200).json("Sucessfuly login")
            return

        }

        res.status(401).json("Wrong password")




    }
)

app.listen( 8000 , () => { console.log(`Server runnig on http://localhost:8000/`)} )  