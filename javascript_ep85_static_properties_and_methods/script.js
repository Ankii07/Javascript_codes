class CreateUser {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
    //static property
    static hi = 'hello'
    
    //yh static block hai bina call kiye hi run hota hai
    static{
        //yha pe this is pure class ko point kr rha hai
        console.log(this);
        console.log('jo bo sone hale sashtriya kal');
        var a =12;
        this.hi = 'hello';
        this.getFullName(){
            return this.firstName+ ' '+ this.lastName
        };
    }

    getBirthYear() {
      return new Date().getFullYear() - this.age
    }
    //static method
    static getFullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  const user2 = new CreateUser('Anurag', 'Singh', 72)
  
//static properties jo define krte hai wh seedha ka seedha class pe aa jati hai.
//iske object pe nhi aati