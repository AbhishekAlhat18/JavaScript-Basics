//****const,let and var


// g = 9.8;
// g = 19.6  //This will throw error as variables declared as const cant be changed


// const a = 19.2;//a and b will be in some other space but will not be accessible
// let b = 22.18;

// var c = 79.6; //This will be undefined in global 


//****Block Scoped
// {
//     let a = 16;
//     const b = 13;
//     var c =9;
// }

// console.log(c);

//****Local Scope
// function callMe(){

//     let x = 18;
//     console.log(x);
// }

// callMe();
// let x = 100;
// console.log(x);

//****Lexical Context

// function callMe(){
    
//     console.log(a);
// }

// let a = 8;
// callMe();


function callMe() {
    console.log(x);    
}

let x = 18.8;
callMe();
