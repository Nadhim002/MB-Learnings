let currPageIndex = 1


  const addOnDetailsObject = {
    monthly: {
    "online-service": 1,
    "larger-storage": 2,
    "customizable-profile": 2,
  },
    yearly: {
    "online-service": 10,
    "larger-storage": 20,
    "customizable-profile": 20,
  },
  }

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
        formFieldYourinfo.addEventListener("keyup", validateInfoInput)
        return
      }
      goBackButton.style.visibility = "visible"
      break
    }
    case 2: {
      break
    }
    case 3: {
      createSummary()
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
// page 02

const periodToggle = document.querySelector("#period-toggle")

periodToggle.addEventListener("change", planPeriodChange)

function planPeriodChange(eventObj) {
  let planPeriod
  let perStrng

  const planInfoDivs = document.querySelectorAll(".plan-info")
  const planPriceDivs = document.querySelectorAll(".plans .plan-price")

  const addOnPriceDivs = document.querySelectorAll(".add-on .add-on-price")

  // console.log(addOnPriceDivs)

  if (!periodToggle.checked) {
    planPeriod = "monthly"
    perStrng = "/mo"

    planInfoDivs.forEach((ele) => {
      ele.classList.add("extra")
    })
  } else {
    planPeriod = "yearly"
    perStrng = "/yr"

    planInfoDivs.forEach((ele) => {
      ele.classList.remove("extra")
    })
  }

  planPriceDivs.forEach((planPriceDiv) => {
    const planType = planPriceDiv.closest("label").getAttribute("for")
    planPriceDiv.innerText =
      `$${planDetailsObject[planPeriod][planType]}` + perStrng
  })

  addOnPriceDivs.forEach((addOnPriceDiv) => {
    const addOn = addOnPriceDiv.parentElement.getAttribute("ID")

    addOnPriceDiv.innerText =
      `+$${addOnDetailsObject[planPeriod][addOn]}` + perStrng
  })
}

// Page 04

const planDetailsObject = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },
}


function createSummary() {
  let planPeriod
  let perStrng
  let planType
  let totalAmount = 0 
  let addOnsList = []

  const periodToggle = document.querySelector("#period-toggle")

  if (periodToggle.checked) {
    planPeriod = "yearly"
    perStrng = "/yr"
  } else {
    planPeriod = "monthly"
    perStrng = "/mo"
  }

  const plansInputs = document.querySelectorAll(".plans .plan input")
  const addOnInputs = document.querySelectorAll(".add-ons .add-on input")

  plansInputs.forEach((plansInput) => {
    if (plansInput.checked) {
      planType = plansInput.getAttribute("ID")
      totalAmount += planDetailsObject[planPeriod][planType]
    }
  })

  addOnInputs.forEach((addOnInput) => {
    if (addOnInput.checked) {
      addOnsList.push(addOnInput.value)
    }
  })

  const priceSummaryDiv = document.querySelector(".price-summary")
  const planContainer = priceSummaryDiv.querySelector(".plan-container")

  const planTypeDiv = planContainer.querySelector(".plan-type")
  const planPriceDiv = planContainer.querySelector(".price")

  planTypeDiv.innerText = `${captiliseFirstLetter(
    planType
  )} ( ${captiliseFirstLetter(planPeriod)} )`
  planPriceDiv.innerText = `$${planDetailsObject[planPeriod][planType]}${perStrng}`

  const addOnsDiv = document.querySelector(".price-summary .add-ons")

  const addOnsDivReplacer = document.createElement("DIV")
  addOnsDivReplacer.classList.add("add-ons")
  addOnsList.forEach((addOn) => {
    totalAmount += addOnDetailsObject[planPeriod][addOn]
    addOnsDivReplacer.appendChild(createAddOnDiv(addOn, planPeriod, perStrng))
  })

  addOnsDiv.replaceWith(addOnsDivReplacer)

  const totalDiv = document.querySelector(".summary form .total")
  const totalPrice = totalDiv.querySelector(".price")
  const totalPricetext = document.createTextNode(`$${totalAmount}${perStrng}`)

  totalPrice.appendChild(totalPricetext)

}

function createAddOnDiv(addOn, planPeriod, perStrng) {
  const addOnDiv = document.createElement("DIV")
  addOnDiv.classList.add("add-on")

  const addOnName = document.createElement("DIV")
  addOnName.appendChild(
    document.createTextNode(`${captiliseFirstLetter(addOn, "-")}`)
  )

  const addOnPrice = document.createElement("DIV")
  const addOnPricetext = document.createTextNode(
    `+${addOnDetailsObject[planPeriod][addOn]}${perStrng}`
  )
  addOnPrice.appendChild(addOnPricetext)

  addOnDiv.appendChild(addOnName)
  addOnDiv.appendChild(addOnPrice)

  return addOnDiv
}

function captiliseFirstLetter(string, delimeter = " ") {
  const arrayOfWords = string.split(`${delimeter}`)

  return arrayOfWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
