// `const a = 4;
// const b = 6;`

function outer(){
 return function parent(){
    const a = 4;
    const b = 6;
    function add(){
        console.log(a+b);
    }

    return add
}
}

//function ka naam diye bina bhi return kr skte hai -anonyms function

//jn bhi hum parent function ko call krenge to hume pura ka pura add function mil jayega

// console.dir(add); //yha pe error aayega kyuki add globaly declared nhi hai

const add1 = parent();

console.log(add1) //yha pe error nhi aayega jo ki pura ka pura function dislay kregaa

//closure jb banta hai jb hum inner function mai outer function ka variable use kr rhe ho
//aur jo variable use kr rhe ho inner  function mai sirf usi ka closure bnega
//to yha upr humne jo add1 call kiya aur print krwa rhe hai to isme sirf function add1 hi nhi dikhayega
//balki const a  aur const b bhi dikhayega kyuki unka colsure bn gya hai add ke sath kyuki funciton mai use ho rhe hai

