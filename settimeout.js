//ex:-1 setTimeout
function sayHi() {
    alert('Hello');
   }
 
 setTimeout(sayHi, 1000); 
 //ex:-2
 function greet(phrase, name) {
   alert(${phrase}, ${name});
 }
 
 setTimeout(greet, 1000, "Hello", "John"); // "Hello, John" after 1 second
 
// ex:3 
function Hi(a,b){
   alert(${a},${b});
}  
setTimeout(Hi,1000,"Hey","Mr");

//nested setTimeout
let timer = setTimeout(function tick() {
   alert('Tick');
   timer = setTimeout(tick, 2000); // Schedules the next call after 2 seconds
 }, 2000);

 //zero delay
 setTimeout(() => alert("World"));
alert("Hello");  // "Hello" appears first, then "World"


//cancelling setTimeout
let timerId = setInterval(() => alert('Tick'), 1000);
clearInterval(timerId);  // Cancels the repeated execution