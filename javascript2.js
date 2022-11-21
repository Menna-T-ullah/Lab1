alert("it’s the first release of a calculator that only has a summation feature.");
var x=Number(prompt("Enter the First Number:"));
var y=Number(prompt("Enter the Second Number"));
console.log(x,y)
function sum(x,y){
   return x+y;
}
var result=sum(x,y);
console.log(result);
alert(x+" + "+y+" = "+result);