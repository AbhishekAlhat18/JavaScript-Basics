//Execition Context

//There are two phases in Execution Environment
//1.Memory phase: variable environment(Memmory is allocated)
//2.code phase:thread of execution


//Hoisting:

/*Variables declared with var are hoisted to the top of their function or global scope and initialized with undefined. This means you can use the variable before it's declared in the code.

Variables declared with let are also hoisted, but they are not initialized. Accessing them before the declaration results in a ReferenceError.*/

console.log(a);
createTitle("Cloud Engineer");

function createTitle(title) {
    console.log("Title:",title);
    
}

createTitle("Jr.Software Engineer");
createTitle("QA engineer");
createTitle("Devops Engineer");

var a = "John Doe";
console.log(a);


//this and window are same thing



console.log(b);

var b = 18

console.log(b);

console.log(this.b);
console.log(window.b);
console.log(window);
console.log(this === window);