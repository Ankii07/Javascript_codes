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