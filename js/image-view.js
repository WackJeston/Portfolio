const mainImage = document.querySelector(".main-img")
const overlay = document.querySelector(".overlay")
const largeImage = document.querySelector(".large-img")
const body = document.querySelector("body")

let viewSwitch = false

mainImage.addEventListener("click", function(){
  if (viewSwitch == false) {
    overlay.style.display = "flex"
    body.style.overflowY = "hidden"
    viewSwitch = true
  }
})

overlay.addEventListener("click", function(){
  if (viewSwitch == true) {
    overlay.style.display = "none"
    viewSwitch = false
  }
})
