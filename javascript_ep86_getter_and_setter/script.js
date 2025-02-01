// getter setter function ke sath sath class ke liye bhi kam krta hai


// class CreateUser {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//     }
  
//     getBirthYear() {
//       return new Date().getFullYear() - this.age
//     }
  
//     getFullName() {
//       return this.firstName + ' ' + this.lastName
//     }
//   }
  
//   const user1 = new CreateUser('Aman', 'Mishra', 32)
//   const user2 = new CreateUser('Anurag', 'Singh', 72)
  
const user = {
    firstName: 'Ankit',
    lastName: 'Kumar',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
}

console.log(user.fullName()); //output Ankit Kumar
console.log(user.fullName)
//output
// ƒ (){
//     return `${this.firstName} ${this.lastName}`
// }

const user1 = {
    firstName: 'Ankit',
    lastName: 'Kumar',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        // const splitted = value.split(' ')
        // this.firstName = splitted[0]
        // this.lastName = splitted[1]
        //can be distructed also

        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    },

}
// yh ek function hai pr call nhi krna pd rha hai kyuki yh ek getter function hai..
user.fullName 
//is trah se set nhi kr skte hai yh simply fullName ki property ko change krke function se ek simple
//property mai kr de rha hai
// user.fullName = 'Akash Kumar'

// ab user.fullName = 'Ankit Kumar' kre to setter function(set fullName(value)) call ho jayega..


//ab yh sari cheeze classes mai bhi ho skti hai..
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
 
     get fullName(){
            return this.firstName + ' '+ this.lastName
     }

     set fullName(value){
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
     }
 }

 CreateUser.fullName = 'Nana Patekr'