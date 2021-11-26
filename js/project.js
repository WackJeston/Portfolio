const projectSection = document.querySelector(".project-container")
const description = document.querySelector(".description")

let zoneExpand = false

// Checking for Page ReSizing
window.addEventListener("resize", function(){
  projectSize()
  console.log("0")
})

projectSection.addEventListener("mouseenter", function(){
  let zoneExpand = true
  description.style.display = "flex"
  projectSize()
  console.log("3")
})

projectSection.addEventListener("mouseleave", function(){
  let zoneExpand = false
  description.style.display = "none"
  projectSize()
  console.log("4")
})

// Resizes Projects Relative to Screen Size and Hover
function projectSize(){
  let windowWidth = window.innerWidth
  if (zoneExpand == false){
    if (windowWidth < 769 && windowWidth > 575){
      projectSection.style.height = "600px"
      console.log("1.1")
    } else if (windowWidth < 993 && windowWidth > 768){
      projectSection.style.height = "400px"
      console.log("1.2")
    } else if (windowWidth < 1201 && windowWidth > 992){
      projectSection.style.height = "500px"
      console.log("1.3")
    } else if (windowWidth > 1200){
      projectSection.style.height = "450px"
      console.log("1.4")
    }
  } else {
    if (windowWidth < 769 && windowWidth > 575){
      projectSection.style.height = "650px"
      console.log("2.1")
    } else if (windowWidth < 993 && windowWidth > 768){
      projectSection.style.height = "450px"
      console.log("2.2")
    } else if (windowWidth < 1201 && windowWidth > 992){
      projectSection.style.height = "550px"
      console.log("2.4")
    } else if (windowWidth > 1200){
      projectSection.style.height = "500px"
      console.log("2.5")
    }
  }
}

projectSize()
console.log("5")
