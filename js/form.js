const contactSection = document.querySelector(".contact-container")
const form = document.querySelector(".git-form")
const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const email = document.querySelector(".email")
const subject = document.querySelector(".subject")
const message = document.querySelector(".message")
const submit = document.querySelector(".submit")
const thanks = document.querySelector(".thank-you")
const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let correctFirstName = false
let correctLastName = false
let correctEmail = false
let correctSubject = false
let correctMessage = false
let zoneShrink = false

// Prevents Reload on Submit
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// Submit Function
submit.addEventListener("click", function(){
  firstNameFunction()
  lastNameFunction()
  emailFunction()
  messageFunction()
  subjectFunction()
  if(correctFirstName == true && correctLastName == true && correctEmail == true && correctSubject == true && correctMessage == true){
    form.style.animation = "form-exit 0.8s forwards"
    setTimeout(function(){
      form.style.display = "none"
      zoneShrink = true
      zoneSize()
      thanks.style.display = "flex"
      thanks.style.animation = "thank-you-enter 0.6s forwards"
    }, 800)
  }
})

// Checking for Page ReSizing
window.addEventListener("resize", function(){
  zoneSize()
})

// Resizes Zone Relative to Screen Size
function zoneSize(){
  let windowWidth = window.innerWidth
  if (zoneShrink == false){
    if (windowWidth < 401){
      contactSection.style.height = "700px"
    } else if (windowWidth < 768 && windowWidth > 400){
      contactSection.style.height = "650px"
    } else if (windowWidth > 767){
      contactSection.style.height = "400px"
    }
  } else {
    if (windowWidth < 401){
      contactSection.style.height = "500px"
    } else if (windowWidth < 768 && windowWidth > 400){
      contactSection.style.height = "460px"
    } else if (windowWidth > 767){
      contactSection.style.height = "320px"
    }
  }
}

zoneSize()

// First Name Validation
function firstNameFunction(){
  if(firstName.value === ""){
    firstName.style.border = "2px solid red"
    correctFirstName = false
  } else{
    firstName.style.border = "2px solid green"
    correctFirstName = true
  }
}

// Last Name Validation
function lastNameFunction(){
  if(lastName.value === ""){
    lastName.style.border = "2px solid red"
    correctLastName = false
  } else{
    lastName.style.border = "2px solid green"
    correctLastName = true
  }
}

// Email Function
function emailFunction(){
  if (emailValidator.test(email.value) == false){
    email.style.border = "2px solid red"
    correctEmail = false
  } else if (emailValidator.test(email.value) == true){
    email.style.border = "2px solid green"
    correctEmail = true
  }
}

// subject Validation
function subjectFunction(){
  if(subject.value === ""){
    subject.style.border = "2px solid red"
    correctSubject = false
  } else{
    subject.style.border = "2px solid green"
    correctSubject = true
  }
}

// Message Validation
function messageFunction(){
  if(message.value === ""){
    message.style.border = "2px solid red"
    correctMessage = false
  } else{
    message.style.border = "2px solid green"
    correctMessage = true
  }
}
