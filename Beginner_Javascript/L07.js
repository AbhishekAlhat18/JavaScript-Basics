//Functions
//Functions are also called first class citizens


function add(a,b){    //In this case memory will be assigned to funcion
    return a + b;
}

console.log(add);
console.log(add(7,2));

//Functions can also be assigned to variables
let sum = function(x,y){   //In this case memory is assigned to variable
    return x + y;
}

console.log(sum);
console.log(sum(17,3));


//Function can be passed to other functions as an argument

function diff(p,q){
    return p- q;
}

function operate(operateFun,a,b){
    return operateFun(a,b)
}

console.log(operate(diff,8,3));
console.log(operate(sum,9,3));

//Arrow functions

let mul = (a,b)=>a * b ;
console.log(mul(9,3));
