//a=10


/*function f(){
    alert(2)
}
*/
window.onload=function(){
document.getElementById("abc").innerHTML="altceva"
var v=document.getElementsByClassName("pgf");
console.log(v.length)

var buton =document.getElementsByTagName("button")[0]
buton.onclick=function(){
    document.getElementById("abc").style.backgroundColor="red"
}
}