//hr ek  function method nhi hota hai pr he ek method function hota hai

//jb ek function ko object ke andr rakh dete hai to usko method bolte hai

//method jo ki defined as a function under object with key value pair to us function ko call hum 
//. operator ka use krke kr skte hai

const maths={
   e : 2.718,
   
   //method
   add:function add(a,b){
    return a + b;
     },
    square: function square(a){
        return a*a;
        //agr yha pe hum console.log(a*a)
        //aur return na kre to koi value return nhi hogi undefined return hoga
        //aur agar tab hum kre maths.square(4) + 1 to output 17 nhi balki NaN number aayega kyuki undefined+ 1= NaN
    },
    //is trah bhi ho skta hai yha pe key use krne ki jurrort nhi padti hai
    subtract(a,b){
        return a-b;
    },
    cube(a){
        // return a*a*a;
        return a**3;
    }

}
//function
// function add(a,b){
//     return a + b;
// }

console.log(maths.add) // pura ka pura function show krega
// ƒ add(a,b){
//     return a + b;
//      }

console.log(maths.cube(3));

//jo hum push pop jaise function jo use kr rhe the wh ek trah ke method hi hai

//Arrow function Expression 

// const square = (num) => {
//     return num*num;
// }

const square = (num) => {}//return num*num;  //yha pe return likhne ki jurrort bhi nhi hai agr 
//function ek line ki hai to sare function ko ek line mai likh skte hai value automatically return ho jayegi
//yha pe implicit return hota hai

const add= (a , b) => a+b; 

setTimeout(()=>{
console.log('Hii')},2000);

const random = () => Math.floor(Math.random() * 10) + 1; //no need of parenthesis