console.log(username) //no error output will be undefined as in memory
//creation phase username is given undefined value in code execution phase it is showing undefined

// Before the interpreter executes the whole code, it first hoists (raises, or lifts) the declared function to the top of the scope it is defined in. 
// In this case, printHello is defined in the global scope, so the function is hoisted to the top of the global scope.

var username = 'Anurag' 

//////////////////////////////////////////
console.log(username) // error will be there
//yha pe bhi username undefined assign ho gya pr kyuki yh const se assign hua to javascript ise dead temporal dead zone mai rakh diya hai
//temporal dead zone sirf let aur const ke liye hi define hua hai wha se access nhi kiya ja skta jb tk ki koi value assign na ho

//A temporal zone is the area of a block where a variable is inaccessible until it is intialized

const username = 'Anurag' 



// debugger

console.log(a)

var a = 'Anurag'

hi()


// Function Definition
// Function Declaration
function hi() {
    console.log('Hello');
}

// Function Definition



sayHi()// agr yha pe call kre to error aayega jo ki hoga sayHi is not a function
//yha pe undefine ko call krne ki kosis ki jaa rhi hai jo ki function hai hi nhi

//yha pe jo function define hua hai usko naam dene ki juroort nhi pdi hai kyuki use to ek 
//variable sayHi mai hi function daal rhe hai , naam do ya na do koi farak nhi pdta pr hi() function 
// naam daalna juroori hai kyuki use koi variable mai assign nhi kiya gya hai

// Function Expression
var sayHi = function() {    //anonymous function
    console.log('Hiii');    //yha pe memory execution phase mai jis trah pura ka pura function define ho jaa rha tha 
                            //yha pe nhi hoga yha pe say hi mai undefined value hi assign hogi jaise ki dusre variable ke liye hota hai
}

// IIFE


sayHi()