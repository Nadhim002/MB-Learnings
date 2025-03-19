import express, { json } from "express"
import bcrpyt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

console.log( process.env.port )

const app = express()

const posts = [
    {
        username : "nadhim",
        title : "Post 1 "
    }
]

app.use( express.json() )
app.use( express.urlencoded({extended : true }) )

app.get( "/posts" , (req , res) => {

    res.json(posts)

} )

app.get( "/login" , (req , res) => {
 

}
)

app.listen( 8000 , () => { console.log(`Server runnig on http://localhost:8000/`)} )  