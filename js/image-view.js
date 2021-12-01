const desktopImage1 = document.querySelector(".desk-1")
const mobileImage1 = document.querySelector(".mobile-1")
const desktopImage2 = document.querySelector(".desk-2")
const mobileImage2 = document.querySelector(".mobile-2")
const desktopImage3 = document.querySelector(".desk-3")
const mobileImage3 = document.querySelector(".mobile-3")
const overlay = document.querySelector(".overlay")
const largeImage = document.querySelector(".large-img")
const body = document.querySelector("body")

let viewSwitch = false

desktopImage1.addEventListener("click", function(){
  imageSelector("1")
})

mobileImage1.addEventListener("click", function(){
  imageSelector("1")
})

desktopImage2.addEventListener("click", function(){
  imageSelector("2")
})

mobileImage2.addEventListener("click", function(){
  imageSelector("2")
})

desktopImage3.addEventListener("click", function(){
  imageSelector("3")
})

mobileImage3.addEventListener("click", function(){
  imageSelector("3")
})

function imageSelector(data){
  if (viewSwitch == false) {
    largeImage.src = "img/example-" + data + ".jpg"
    overlay.style.display = "flex"
    body.style.overflowY = "hidden"
    viewSwitch = true
  }
}

overlay.addEventListener("click", function(){
  if (viewSwitch == true) {
    overlay.style.display = "none"
    body.style.overflowY = "scroll"
    viewSwitch = false
  }
})
