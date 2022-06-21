// function process(e){
//     let search = document.getElementById("search").value;
//     localStorage.setItem("textvalues",search);
//     return false;
//     e.preventDefault();
//     alert(search);
// }
// let footer=document.querySelector("ftr");
// // footer.style.color="green";

// let m = document.getElementById("")
// TO EXAMINE DOCUMENT
// console.dir(document);
// console.log(document.domain);
// console.log(document.title)
// console.log(document.body)
// console.log(document.head)
// console.log(document.forms[0])
// console.log(document.images)

// GET ELEMENT BY ID
// var headertitle = document.getElementById("h1")
// console.log(headertitle)
// headertitle.innerHTML = "<h1>PARADISE</h1>"
// headertitle.textContent = "PARADISE"

// GET ELEMENT BY CLASS NAME
var items = document.getElementsByClassName("navbar-item")
console.log(items);
console.log(items[1]);
items.textContent = "HELLO 2"
// a fucntion that iterates through all the indexez
for( var i=0;i<items.length;i++){
    items[i].style.backgroungColor = "#f4f4f4"

}
//QUERYSELECTOR

// var header = document.querySelector("#h1");
// header.style.borderButton = "solid 4px #f4f4f4";

// var input = document.querySelector("search");
// input.nodeValue = "hi";

// var item = document.querySelector(".navbar-item");
// item.style.color = "red"

// var lastitem = document.querySelector(".navbar-item:nth-child(2)");

// lastitem.style.color = "coral"

// var odd = document.querySelectorAll(".navbar-item-:nth-child(odd)");
// for (var i =0; i<odd.length;i++){
//     odd[i].style.color = "orange"
// }

// var ite = document.querySelector("navbar nav")
// console.log(ite.children);

// var div = documeent.getElementsByClassName("collapse navbar-collapse")
// var text = "HELLO WORLD"
// div.textContent = text
// console.log(div.textContent)

var clickMe = document.getElementById("myBtn").onclick =  changeColor;
function changeColor(){
    document.querySelector("body").style.backgroungColor = "red"
}

