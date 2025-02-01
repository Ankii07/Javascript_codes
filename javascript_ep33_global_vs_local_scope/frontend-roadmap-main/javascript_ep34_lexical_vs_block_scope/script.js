'use strict'

const username = 'Anurag'
let userAge = 25
var a = 50

// function add() {
//   const username = 'Akash'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

function subtract() {
  const x = 15
  const y = 18
  const z = 28
  // console.log(x - y)
  // console.log(username)

//function ke andr bhi function ko create kiya ja skta hai

//function tabhi dikhenge scope mai jb hum use krenge..

//inner function apne outer function ke kisi bhi variable ko use kr skta hai pr outer function apne inner function ke variable ko use nhi kr skta hai..

//grandchild jo function hai uska lexical scope hoga sbse phle to uska khud ka scope phir uske parent ka scope aur phir uske parent ke prent ka scope and so on..

//jb hum inner funtion mai outer function ka koi variable use krte hai to uska variable closer bn jata hai called function mai

  function child() {
  // debugger

    const childName = 'Golu'
    // console.log(childName);
    // console.log(x,z);
    {
        var a =10;
    }
      console.log(a); // koi error nhi aayegi pr yhi  hume a ko let aur const se initialize kiya hota to error aa jati
                      //let aur const block scope hote hai
    
   //scope kisi bhi particular line pe yh batata hai ki kis kis varibale ka use line pe accessible hai

   //var jo hota hai uska block level scope nhi hota hai pr ki uska scope function level hota hai
   //jiska matlb yh hai ki var a jo humne define kr rkha hai block mai wh pure function child mai accessible hai pr function ke bahar accessible nhi hai

   //agr function ke bahar bhi accessible krwana hai to a ke aage se var bhi hta do aur sirf a=10 define kro wh  mai global mai defined ho jayega
   //is cheez ko agr rokna hai to yh 'use strict' use kr skte ho isse rules thore strictly applied hote hai

    if(true){
      let num1 = 78
      var num2 = 987
      console.log(num1);
      console.log(num2);
    }
    console.log(num2);

    function grandChild() {
      const grandChildName = 'Molu'
      // console.log(grandChildName);
    }
    grandChild()
  }
 

  //koi bhi function jb tak call naa kiya gya ho tb tak wh bas defined hi hota hai jb call kroge tabhi unke variable 
  //ko memory assign hogi agr call krne se phle hi function ke variables ke access krne ki kosis kroge to error aayegi..

  child()

}

// add()
subtract()

console.log('Program Ended')

