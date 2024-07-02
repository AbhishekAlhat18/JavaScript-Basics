//Returning functions

// let a = 10
// function outer(){
//     a = 101  //Lexical Scope
//     function inner(){
        
//         console.log(a)
//     }
//     return inner;
// }


// let returnedVarFun = outer(); //reference to variable 'a' is stored in returnedVarFun 
// a=102;//Therefore returnedVarFun also has access to outer() lexical scope that is variable 'a'
// console.log(returnedVarFun);
// returnedVarFun();


//Function + Lexical Scope = Closure
console.log("Closure Example");

function outerFunction() {
    let outerFunCouter = 0;

    function innerFunction(){
        outerFunCouter++;
        console.log(outerFunCouter);;
    }
    return innerFunction;
}

let returnedOuterFun = outerFunction();  //It will be present inside 'Script' and NOT in Global because it is 'let'
console.log(returnedOuterFun);
returnedOuterFun();
returnedOuterFun();
returnedOuterFun();
