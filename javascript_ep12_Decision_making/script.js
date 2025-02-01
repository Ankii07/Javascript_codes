const userName = prompt('Enter your name') || 'procodrr' //to set default value
const userAge = +prompt('Enter your Age') || 22; //to convert string to number to jb cancel krege to null pas hoga null number mai 0 convert ho jayega 
// aur 0 aayega output mai

console.log(userName);
console.log(userAge);

if(false) 
// unreachable code detected-> yha tk javascript kbhi phuchega hi nhi
console.log(`My name is ${userName}`)

if(userAge >= 18 && userAge <= 24){
    console.log("User is a college student.");
    console.log("And he/she is learning computer science.");
}

console.log('Program Ended')

//ctrl + l pure console ko clear krne ka shortcut hai
//>= implicitly string ko number mai convert kr deta hai

+'34 k' //output NaN

+'34 df' //output NaN

parseInt('34 df')// output 34 yh thora advance converter hai yh letter ko delete kr deta hai

parseInt(null) //NaN  mai convert kregi jaha ki +null 0 mai convert kregi

// show console drawer pe click krne pe debugger jaise jaise run krga waise waise value pring hoti rhegi

//else if bs if apply krne ke baad hi apply kr skte hai

//if mai hum sirf true ya false value hi nhi truthy aur falsy value bhi de skte hai
//aur if apne aap true ya false mai convert kr lega

if(12)
console.log("I am the one and I am the only");
else if(0)
console.log('I am the best');