function gravedad(){
var g=6.67*Math.exp(-11)
var r= parseInt( document.getElementById("r").value);
var d=Math.pow(r,2)
var m1= parseInt( document.getElementById("m1").value);
var m2= parseInt( document.getElementById("m2").value);
var f=g*m1*m2/d
document.getElementById('GRAVE').innerHTML=f
}