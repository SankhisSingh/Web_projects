let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
if(random > 0.1) {
   //console.log(`the result is &{a} &{c} &{b}`)
   //alert(`the result is &{eval(`&{a} &{c} &{b}`)}`)
   let result = eval(`${a} ${c} ${b}`);
    alert(`The result is: ${result}`);
}
else{
    c=obj[c]
     let result = eval(`${a} ${c} ${b}`);
    alert(`The result is: ${result}`);
}
     //alert(`the result is &{eval(`&{a} &{c} &{b}`)}`)
