//classes behind the scene ek constructor function hi hai..
//classes constructor function wali hi kaam krti hai bs yh thora syntactical sugar ki trah hai..

class CreateUser{
   //jo sari chheze run krawani hai wh constructor function ke andr hi likhni hogi
   //aur baki jo defined function hai wh call nhi hogi balki wh createrUser ke prototype ke object mai jakr defined ho jayegi..
   //constructor ke andr hi sari properties define kr skte hai

   //constructor method
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        // console.log(a,b,c);
    }

    //console.log('jai') //error dega directly define nhi kr skte hai

    //yh dono function automatically CreateUser function ke prototype mai chali jayegi..
    getBirthYear(){
        return new Date().getFullYear -this.age
    }

    getFullName(){
           return this.firstName + ' '+ this.lastName
    }
}

//createUser() ek error dega ki Class constructor CreateUser cannot be 
//invoked without 'new' jo ki function ki case mai nhi tha..

//jis trah constructor function mai method define kr rhe the usi trah yha pe 
//bhi ke skte hai..

// CreateUser.prototype.getBirthYear = function(){
//     return new Date().getFullYear -this.age
// }

// CreateUser.prototype.getFullName = function(){
//     return this.firstName + ' '+ this.lastName
// }

const user4 = new CreateUser('ankit', 'Kumar',32) //will return newly created object with all the properties assigned.
const user5 = new CreateUser('amrit','singh',34)

console.log(user4.getFullName);
//output
// ƒ getFullName(){
//     return this.firstName + ' '+ this.lastName
// }
console.log(user5.getFullName);

//output
// ƒ getFullName(){
//     return this.firstName + ' '+ this.lastName
// }

console.log(user5.getFullName());
console.log(user4.getFullName());
