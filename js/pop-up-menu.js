const popUpMenu = document.querySelector(".mobile-pop-up-menu")
const menuList = document.querySelector(".link-list-mobile")
const menuSocials = document.querySelector(".socials")
const menuButton = document.querySelector(".mobile-burger")
const page = document.querySelector(".page-container")
let buttonSwitch = false

window.addEventListener("resize", function(){
  let windowWidth = window.innerWidth
  if (buttonSwitch == true){
    if (windowWidth >= 992){
      popUpMenu.style.animation = "pop-down-menu 0.15s forwards"
      setTimeout(function(){
        popUpMenu.style.display = "none"
      }, 150)
      buttonSwitch = false
    }
  }
})

menuButton.addEventListener("click", function(){
  if (buttonSwitch == false){
    popUpMenu.style.display = "flex"
    popUpMenu.style.animation = "pop-up-menu 0.3s forwards"
    setTimeout(function(){
      buttonSwitch = true
    }, 300)
  } else {
    popUpMenu.style.animation = "pop-down-menu 0.3s forwards"
    setTimeout(function(){
      popUpMenu.style.display = "none"
    }, 300)
    buttonSwitch = false
  }
})

page.addEventListener("click", function(){
  if (buttonSwitch == true){
    popUpMenu.style.animation = "pop-down-menu 0.3s forwards"
    setTimeout(function(){
      popUpMenu.style.display = "none"
      buttonSwitch = false
    }, 300)
  }
})
