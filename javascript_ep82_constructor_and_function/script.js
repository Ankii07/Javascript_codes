function getBirthYear() {
       console.log(this)
    //yhe pe user variable name pe ... yh btata hai ki yh yha pe accessible nhi hai
    // return new Date().getFullYear() - user.age
    return new Date().getFullYear() - this.age

  }




function createUser(firstName, lastName, age) {
    const user = {
      firstName,
      lastName,
      age,
    //   yha pe getBirthyear point kr rha hai same hi function ko
    //to hr ek nye user ke liye ke alg se function nhi bn rha hai wh usi function ko point
    //kr rha hai..
    //user1.getBirthYear === User2.getBirthYear true dega kyuki dono ek function ko point kr rha hai memory location different nhi hai

      getBirthYear: createUser.commonMethods.getBirthYear
    }
    return user
  }

//   createUser.hello = 'Hello';

createUser.commonMethods = {
    getBirthYear(){
        return new Date().getFullYear - this.age
    },
}

//createUser function mai koi nai property bhi add kr skte hai kyuki at last create user hai to ek object hi
  const user1 = createUser('Aman', 'Mishra', 32)
  const user2 = createUser('Anurag', 'Singh', 72)
  
  const arr1 = [1,2]
  const arr2 = [3, 4]

// this ek keyword hai jo khi bhi access hota hai jo ki globaly bhi defined hota hai
//by default yh window ko point krta hai

// console.log(this)

//window object output rhega..

//this ek time pe kisi na kisi object ko point krta rhega as per the use yh samay 
//samay pe change hota rhta hai..

//jis object ke andr se call kiya jata hai this ko wh usi ko point krne lagta hai
//jaise ki

console.log(getBirthYear(1999))

// yha pe globally acess kr rhe hai getBirthYear function ko to this point kr rha hai window object ko 
//to output hai

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


console.log(user1.getBirthYear(1999))

//ab yhi pe user1 ke respect mai getBirthYear function ko call kr rhe hai to yha
//pe this point kr rha hai user1 object ko..
//output:- {firstName: 'Aman', lastName: 'Mishra', age: 32, getBirthYear: ƒ}

console.log(user2.getBirthYear(1999))
//output:- {firstName: 'Anurag', lastName: 'Singh', age: 72, getBirthYear: ƒ}

// polymorphism mtlb ek function jiska alag alag mtlb ho..

//jb ab aap new lagakr ek function ko call krte ho to wh by default wh ek object return krta 
//tum return kro ya na kro..

function sayHi(){
    return 'hello'
}

console.log(sayHi()); //hello

console.log(new sayHi()) //output sayHi{}

// jb hum new lgakr kisi function ko call krte hai to wh dusri trah se behave krta hai
// aur uski andr ke this keyword bhi dusri trah se behave krta hai

//jb hum new lagakr kisi function ko call krte hia to wh ek object create krta hai aur
//us object ko automatically  return bhi kr deta hai aur agr new lagakr call kiya gya hai to
//this keyword bhi isi object ko point krta hai

//constructor function
function CreateUser(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const user4 = new createUser('ankit', 'Kumar',32) //will return newly created object with all the properties assigned.
const user5 = new createUser('amrit','singh',34)

console.log(createUser.prototype);
console.log(user1.__proto__);
console.log(user1.__proto__.constructor);
console.log(user1.constructor);

createUser.prototype.getBirthYear = function(){
    return new Date().getFullYear -this.age
}

createUser.prototype.getFullName = function(){
    return this.firstName + ' '+ this.lastName
}

user1.getFullName()

//yha pe prototype se jo function define kiya hai iski yh khass baat hogi ki 
//yh automatically un objects ke __proto__ mai create ho jayegi jo ki is function se defined hogi
//isse inhertinace create kr liyaa hai

//ek convention hota hai ki jb bhi jum constructor function define krte hai to
//uska naam capital se start hota hai.