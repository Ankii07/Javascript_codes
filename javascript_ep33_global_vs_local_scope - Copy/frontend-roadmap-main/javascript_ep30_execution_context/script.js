debugger
//say hi function niche defined hai phir bhi sayHi() upr hi call ho jaa rha hai wh run bhi ho jaa rha hai kyuki
//phle hota hai memory execution phase jisme sayHi() function globall mai  defined ho chuka hai aur jb code execution hota hai kyuki phle se hi defined hai to wh run ho jata hai

sayHi()

const username = 'Anurag'
const userAge = 25
//javascript ignore kr dega function ko agr wh sirf defined hai wh
//run tabhi krega jb wh function ko call kiya jayega

//let aur const script ke ander aata hai global ke andr nhi aayyega
//function global mai jata hai

 //memory creation phase mai sare variable ko memory di jaati hai unme values assign nhi hote hai aur memory phase mai sirf function bhi defined hota hai
//phir values assign hote hai variable mai code execution ke time
function sayHi() {
    //function ke liye bhi alg se local execution phase bnegi
    const a = 14
    const b = 12
    add(7, 9)
}
//jaise hi function ka local execution context ka pura run kr lega javascript uske just baad us local Execution context 
//ko delete kr dega
function add(x, y) {
    kuchhBhi()
    return x + y
}
//console.log hone pe nahi koi memory create hoti hai
function kuchhBhi() {
    console.log('Kuchh bhi');
}

console.log('Program Ended');