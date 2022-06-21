// when we click the button, the background should change color:
// function changeColor(){
//    var colors =  document.querySelector("body")
//    colors.style.backgroundColor = "blue"
//     }
// function remove(){
//         var remove = document.querySelector("input")
//         remove.textContent.slice(-1)
//     }

// function mOut(e){
//     var e = document.getElementById("mouse").innerHTML="You're out"
//   }
// function mOver(e){
//    e.innerHTML = "You're in"

// }

var myP = document.getElementById("myP")
var myP2 = document.getElementById("myP2")
var Div = document.getElementById("myDive")
var Div2 = document.getElementById("myDive2")
.addEventListener("click",function(){Div.style.backgroundColor="green"})

// myP.addEventListener("click",changeColor())
myP.addEventListener("click",function(){Div.style.backgroundColor="red"})

myP.onclick = function(){
    Div.style.backgroundColor = "red"
};

var para  = document.createElement("p");
var node = document.createTextNode("up above the world")
para.appendChild(node)