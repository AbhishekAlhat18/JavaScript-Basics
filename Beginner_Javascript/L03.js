//Value types Vs Reference Types

//Value type -holds directly the value

let x = "John";
let y = x;  //Copy by Value

console.log(y); //y will hold value John

x = "Meera"; //Now x will hold value Meera(value changed)

console.log(x); //This will print Meera
console.log(y);  //This will print John(Value of y remains unchanged)

//Reference type

let o = {designation:"Software Engineer"};
let p = o; //copy by refernece

o.designation = "Data Analyst"

console.log(o.designation); //this will print Data Analyst
console.log(p.designation); //this will also print Data Analyst


