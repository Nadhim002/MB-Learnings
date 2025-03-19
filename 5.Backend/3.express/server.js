const express = require("express")
const path = require("path")
const posts = require("./routes/post.js")
const logger = require("./middleware/logger.js")
const errHandler = require("./middleware/error.js")
const notFound = require("./middleware/notFound.js")

const port  = process.env.PORT || 8000

// Get the directory Name


const app = express()
app.use(  express.static( path.join(__dirname , "public") )  )

// Body parser Middleware
// It is used to get data from post request 
app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )

// Logger middleware 
app.use( logger  )

app.use("/api/posts" , posts)

app.use( notFound )

// Error handler middleware , but use it after routing code line 
app.use( errHandler )


app.listen( port , () => {  console.log(`Server is running in http://localhost:${port}`) } )