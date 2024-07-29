const menuBar = document.querySelector(".header-top>i")
const closeBtn = document.querySelector(".header-top ul i")
console.log(menuBar)
menuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.tranform = "translateX(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})
closeBtn.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.tranform = "translateX(100%)"
    document.querySelector(".header-top ul").style.opacity = "0"
})