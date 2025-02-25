let currPageIndex = 1

const nextStepButton = document.querySelector(".next-step-button")
const goBackButton = document.querySelector(".go-back-button")
const formFieldYourinfo = document.querySelector(".your-info .form-field")

goBackButton.addEventListener("click", goBackToPreviousPage)
nextStepButton.addEventListener("click", moveToNextPage)

function moveToNextPage(eventObj) {
  const pageContents = document.querySelector(".content").children

  switch (currPageIndex) {
    case 1: {
      if (!validatePersonalInfo()) {
        // Add err event Listerner Here
        formFieldYourinfo.addEventListener("keydown", validateInfoInput)
        return
      }
      goBackButton.style.visibility = "visible"
      break
    }
    case 2: {
      break
    }
    case 3: {
      break
    }
    case 4: {
      return 0
    }
  }

  pageContents[currPageIndex - 1].style.display = "none"
  pageContents[currPageIndex].style.display = "block"

  currPageIndex++
}

function goBackToPreviousPage(eventObj) {
  const pageContents = document.querySelector(".content").children

  switch (currPageIndex) {
    case 1: {
      return 0
    }
    case 2: {
      goBackButton.style.visibility = "hidden"
      break
    }
    case 3: {
      break
    }
    case 4: {
      break
    }
  }

  pageContents[currPageIndex - 1].style.display = "none"
  pageContents[currPageIndex - 2].style.display = "block"

  currPageIndex--
}

// First Page

function validatePersonalInfo() {
  let isDataValid = true

  const nameInput = document.getElementById("name-input")
  const mailInput = document.getElementById("mail-input")
  const phoneNumberInput = document.getElementById("phone-number-input")

  if (nameInput.value === "") {
    isDataValid = false
    setError(nameInput, "Name cannot be empty")
  }

  if (mailInput.value === "") {
    isDataValid = false
    setError(mailInput, "Mail cannot be empty")
  }

  if (phoneNumberInput.value === "") {
    isDataValid = false
    setError(phoneNumberInput, "Phone Number cannot be empty")
  }

  return isDataValid
}

function validateInfoInput() {
  const nameInput = document.getElementById("name-input")
  const mailInput = document.getElementById("mail-input")
  const phoneNumberInput = document.getElementById("phone-number-input")

  if (nameInput.value === "") {
    isDataValid = false
    setError(nameInput, "Name cannot be empty")
  } else {
    removeErr(nameInput)
  }

  if (mailInput.value === "") {
    isDataValid = false
    setError(mailInput, "Mail cannot be empty")
  } else {
    removeErr(mailInput)
  }

  if (phoneNumberInput.value === "") {
    isDataValid = false
    setError(phoneNumberInput, "Phone Number cannot be empty")
  } else {
    removeErr(phoneNumberInput)
  }

}

formFieldYourinfo.addEventListener("click", makeInputBorder)

function makeInputBorder(eventObj) {
  if (eventObj.target.tagName == "INPUT") {
    eventObj.target.style.borderColor = "purple"
  }
}

document.addEventListener("click", removeInputBorder)

function removeInputBorder(eventObj) {
  if (eventObj.target.tagName !== "INPUT") {
    const inputs = formFieldYourinfo.querySelectorAll("input")
    inputs.forEach((input) => {
      input.style.borderColor = ""
    })
  }
}

function setError(inputElement, message) {
  const inputDiv = inputElement.parentElement
  const errElement = inputDiv.querySelector(".error")

  errElement.innerText = message
  errElement.style.visibility = "visible"
}

function removeErr(inputElement) {
  const inputDiv = inputElement.parentElement
  const errElement = inputDiv.querySelector(".error")

  errElement.innerText = ""
}
