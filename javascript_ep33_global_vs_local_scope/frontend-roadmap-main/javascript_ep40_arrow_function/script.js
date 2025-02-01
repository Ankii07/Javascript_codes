//there are three ways to create function
//function declaration jb khte hai function ko jb hum function likhte hai uske aage khuch likhte hai
//aur fir defined krte hai
function add(a,b){
    return a+b;
}
//function expression
//function expression mai hume function ko naam dene ki jurrort nhi padti hai us ek variable mai store kr skte hai
let add = function (a,b){
    return a+b;
}

//function declaration aur function expression dono bhut had tak same hi hote hai pr
//dono hoisting mai differently behave krte hai agr function expression ko define krne se 
//phle call krenge to error aayega undefined kh kr pr waisa function declaration ke saath nhi hoga




//arrow function Expression
//isme hum function keyword ka use nhi krte hai
let add = (a,b) {
    return a+b;
}

