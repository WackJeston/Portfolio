
const popUpMenu = document.querySelector(".mobile-pop-up-menu")
const menuList = document.querySelector(".link-list-mobile")
const menuSocials = document.querySelector(".socials")
const menuButton = document.querySelector(".mobile-burger")
const page = document.querySelector(".page-container")
let buttonSwitch = false


// On menu button click this function uses an if statement to decide whether to open or close the menu.
menuButton.addEventListener("click", function(){
  if (buttonSwitch == false){
    popUpMenu.style.display = "flex"
    popUpMenu.style.animation = "pop-up-menu 0.3s forwards"
    // I used the setTimeout function to wait for my keyframes to complete before continuing.
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

// While the menu is open, if anything other than the menu is clicked this function will close the menu.
page.addEventListener("click", function(){
  if (buttonSwitch == true){
    popUpMenu.style.animation = "pop-down-menu 0.3s forwards"
    setTimeout(function(){
      popUpMenu.style.display = "none"
    }, 300)
  }
})

// Monitors screen size and closes the menu if the page becomes too wide.
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
