//Reference Types

//Arrays
//Arrays as well Function reference types are objects

let designations = ["Cloud Engineer","Software Develper","QA Qnginner",true,0]

console.log(designations);
console.log(designations[3]);
console.log(designations[4]);
console.log("type of designation:",typeof(designations));

//Functions

function createDesignation(designation) {

    console.log("Deisgnation: ", designation);
}

createDesignation("Data Analyst");
createDesignation("Software Engineer");
console.log(typeof(createDesignation)); //Function are valo objects but it will print type as "function" to main clearity