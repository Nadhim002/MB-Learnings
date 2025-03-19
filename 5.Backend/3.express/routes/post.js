const express = require("express")

const router = express.Router()
const {  
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost 
            } = require("../controller/postController.js") 
             

// Get All posts
router.get( "/" , getPosts )

// Get Single Post
router.get("/:id", getPost )

// Creat new Post
router.post("/", createPost )


// Update post 
router.put("/:id" , updatePost  )

// Delete
router.delete("/:id" , deletePost )


module.exports = router
