const http = require("http")
const { "v4" : uuidv4 } = require("uuid")
const data = require("./data.js")

const PORT = 5000

const firstServer = http.createServer( ( req , res ) => {

    console.log( req.url  )

    if( req.method == "GET" && req.url == "/html" ){

        res.setHeader("Content-type" , "text/html")
        res.end( data.htmlData )
    }

    if( req.method == "GET" && req.url == "/json" ){

        res.setHeader("Content-type" , "text/json")
        res.end( JSON.stringify(data.jsonData) )
    }

    if( req.method == "GET" && req.url == "/uuid" ){

        res.setHeader("Content-type" , "text/plain")
        res.end( uuidv4() )

    }

    // res.write("Hello Wolrd")
    res.end()



}  )


firstServer.listen( PORT , () => { console.log( "Server Started ") } )




// Why Use UUID in HTTP?
// In the context of HTTP and the Node.js HTTP module, UUIDs are often used to:

// Generate unique request IDs for logging and debugging.
// Assign unique session IDs or user identifiers.
// Create unique resource identifiers in REST APIs.