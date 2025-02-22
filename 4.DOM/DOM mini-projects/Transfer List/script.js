const iconDiv = document.querySelector(".icon-div")

iconDiv.addEventListener("click", moveElements)

function moveElements(eventObj) {
  const targetElement = eventObj.target.className

  switch (targetElement) {
    case "all-right-to-left":
      allRightToLeft()
      break
    case "right-to-left":
      rightToLeft()
      break
    case "left-to-right":
      leftToRoght()
      break
    case "all-left-to-right":
      allLeftToRoght()
      break
  }
}

function allRightToLeft() {
  const rightCheckBoxHolderDiv = document.querySelector(".right")

  const lefttCheckBoxHolderDiv = document.querySelector(".left")

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    item.remove()
    lefttCheckBoxHolderDiv.appendChild(item)
  })
}

function rightToLeft() {
  const rightCheckBoxHolderDiv = document.querySelector(".right")

  const lefttCheckBoxHolderDiv = document.querySelector(".left")

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      item.remove()
      lefttCheckBoxHolderDiv.appendChild(item)
    }
  })
}

function leftToRoght() {
  const rightCheckBoxHolderDiv = document.querySelector(".right")

  const lefttCheckBoxHolderDiv = document.querySelector(".left")

  Array.from(rightCheckBoxHolderDiv.children).forEach((item) => {
    if (item.querySelector("INPUT").checked) {
      item.querySelector("INPUT").checked = false
      item.remove()
      lefttCheckBoxHolderDiv.appendChild(item)
    }
  })
}
function allLeftToRoght() {
  const rightCheckBoxHolderDiv = document.querySelector(".right")

  const lefttCheckBoxHolderDiv = document.querySelector(".left")

  Array.from(lefttCheckBoxHolderDiv.children).forEach((item) => {
    item.remove()
    rightCheckBoxHolderDiv.appendChild(item)
  })
}
