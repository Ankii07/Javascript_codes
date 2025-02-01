class Person{
    live(){
        console.log('person is living');
    }
}
class User {
    constructor(firstName, lastName, age) {
        super()
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  
    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
     work(){
        console.log('Working');
     }
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    set fullName(value) {
      const [firstName, lastName] = value.split(' ')
      this.firstName = firstName
      this.lastName = lastName
    }
  }

//   class Student {
//     constructor(firstName, lastName, age,standard) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.standard = standard
//     }
  
//     getBirthYear() {
//       return new Date().getFullYear() - this.age
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`
//     }
  
//     set fullName(value) {
//       const [firstName, lastName] = value.split(' ')
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }

//   class Employee {
//     constructor(firstName, lastName, age,company) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.company = company
//     }
  
//     getBirthYear() {
//       return new Date().getFullYear() - this.age
//     }
  
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`
//     }
  
//     set fullName(value) {
//       const [firstName, lastName] = value.split(' ')
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }
  
  
  const user1 = new User('Aman', 'Mishra', 32)

// console.log(user1.fullName);

//   const user2 = new Student('Anurag', 'Singh', 72,10)
//   const user3 = new Employee('harsh','Singh',53, 'google')

  //upr bhut sari classes mai bhut si properties aur method repeat ho rhe hai unhe inherit kr skte hai

  class Student extends User{
    //property set krne ke liye phle jo parent element ke constructor hai unko values pass krni hogi
    //jo ki super keyword use krke hi kr skte hai
    //aur nyi properties set krne ke liye normaly this keyword use krke kr skte hai.
    constructor(firstName, lastName, age, standard){
        super(firstName,lastName, age)
        this.standard = standard
    }
      study(){
        console.log('studying');
      }
  }

  const user2 = new Student('Anurag', 'Singh', 21,'BCA')
//   console.log(user2.fullName);

  class Employee extends User{
    constructor(firstName, lastName, age, company){
        super(firstName, lastName, age)
        this.company = company
    }
  }

  const user3 = new Employee('harsh','Singh',53, 'google')
   