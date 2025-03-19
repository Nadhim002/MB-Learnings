

let posts = [
    { id: 1, title: "post 01" },
    { id: 2, title: "post 02" },
    { id: 3, title: "post 03" },
    { id: 4, title: "post 04" },
    { id: 5, title: "post 05" },
  ]


const getPosts =  (req, res) => {

  const limit = req.query?.limit

  if (!isNaN(limit) && limit > 0) {

    res.status(200)
    return res.json(posts.slice(0, limit))

  }

  res.status(200).json(posts)

}

// Get Single Post

const getPost =  (req, res , next ) => {
  const id = parseInt(req.params?.id)

  const post = posts.find((post) => post.id == id)

  if (!post) {
    const error = new Error(`Post with ${id} is not found`)
    error.status = 404 
    return next(error)
  } 

    res.status(200).json(post)
  
}

// Creat new Post

const createPost =  (req, res ,  next ) => {

  const postObject = { id: posts.length + 1, title: req.body.title }

  console.log( req.body )

  if (!req.body.title) {

    const error = new Error(`Please Include a title`)
    error.status = 400 
    return next(error)
  }

  posts.push(postObject)

  res.status(200).json(posts)

}


// Update post 

const updatePost =  (req,res , next ) => {

    const idToEdit =  parseInt( req.params.id )
    const postToEdit = posts.find( post => post.id == idToEdit )
    
    if ( ! postToEdit ){
        const error = new Error(`Enter ${idToEdit} is not found in database`)
        error.status = 404 
        return next(error)
    }

    const title = req.body?.title 

    if ( !title ){  

        const error = new Error(`No Input Entered`)
        error.status = 404 
        return next(error)

    }

    postToEdit.title = title    

    res.status(200).json(posts)

}  

// Delete


const deletePost = (req,res , next ) => {

    const idToEdit =  parseInt( req.params.id )
    const postToDelete = posts.find( post => post.id == idToEdit )
    
    if ( ! postToDelete ){

        const error = new Error(`id ${id} is not found in database`)
        error.status = 404 
        return next(error)
    }

    posts = posts.filter( post => post != postToDelete  )

    res.status(200).json(posts)

}  


module.exports = {  
    
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost

}
