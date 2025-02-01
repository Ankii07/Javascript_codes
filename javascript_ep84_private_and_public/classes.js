class CreateUser {
    //bahr ek bar declare krna hi pdega
    #age
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      //to make something private use the #
      this.#age = age
    }
    //private method and variable can only be accessed in class not outside the class
    #hi = 'Hello World'
    getBirthYear() {
        console.log(this.#hi);
      return new Date().getFullYear() - this.#age
    }
    //private function can't be accessed outside the class
    #getFullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
  
  const user1 = new CreateUser('Aman', 'Mishra', 32)
  const user2 = new CreateUser('Anurag', 'Singh', 72)

  //hum directlye ek object ko define krte waqt ek private property ko define nhi kr skte..

  const a = {
    name: 'Ankit'
    //error
    // #age: 34,

    '#age': 34,
  }