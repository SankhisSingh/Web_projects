console.log("20.js initialization")
let sankhiIs=document.getElementsByClassName("box")
console.log(sankhiIs)
sankhiIs[2].style.backgroundColor="red"
document.getElementById("red").style.backgroundColor="blue"
document.getElementById("red").style.fontWeight="bold"
document.querySelector(".box").style.backgroundColor="Green"
document.querySelectorAll(".box").forEach(e =>{
    console.log(e)
    e.style.fontWeight="bold"
    e.style.backgroundColor="pink"
});
e=document.getElementsByTagName("div")
document.querySelector(".container").contains(e[2])
