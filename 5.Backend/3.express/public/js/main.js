const getButton = document.querySelector("#get-posts-btn")
const displayDiv = document.querySelector("#output")

getButton.addEventListener("click" , showPosts )

// Get and show pots
async function showPosts() {

  try {
    const res = await fetch("http://localhost:8000/api/posts")

    if (!res.ok) {
      throw new Error("Failed to fetch post")
    }

    const posts = await res.json()

    displayDiv.innerHTML = ``

    posts.forEach((post) => {
      const postDiv = document.createElement("div")
      postDiv.innerText = post.title

      displayDiv.append(postDiv)
    })
  } catch (err) {
    console.log("Error fetching Data")
  }

}
