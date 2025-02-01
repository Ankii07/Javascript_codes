// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

//first way to copy array just passing all the values to myFruits
const myFruits1 = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

//to maan lo app ki obect hai aur values declare jaise ki
const user = {
    firstName: 'Anurag',
    lastName: 'Singh',
}
//yha pe user object copy ho gya user3 mai
const user3 = user;
//to agr user3.firstName ='Ankit' kr dete ho to wh user mai bhi wh change reflect krega
//kyuki user and user3 same hi address ko refer kr rha hai do instances alag alag create nhi hua hai 

// Object.assign(myFruits, fruits)
//sbse jada copy krne ke liye spread operator use hota hia
//spread operator assign ke trah hi use  hota hai aur bhi properties 
const myFruits = [...fruits]

//jb spread operator use krke assign krte hai to ek naya array create hota hai aur wh assigned hota hai
//whi jb direct value pass krte hai to to koi nya array create nhi hota hai

// const myFruits = [].concat(fruits)
//[] isse ek naya array create ho gya hai usme fuits array concate kr rhe hai aur phir usko assign kr rhe hai myFruits mai
// const myFruits = fruits.slice()

//agr slice(2,4) 2 inclding 4 exculding ek nya substring de dega agr koi bhi position nhi specify krenge to to pura ka pura array de dega

const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  pata: {
    city: 'Delhi',
    pincode: 989888,
  },
  subject: ['Physics', 'CS', 'Maths']
}
//jb humne user1 ko spread operator use krke copy krwa rhe hai to user1 ko ek dublicate create hoke 
//assign to ho rha hai pr iske andr jo object ya array hai uski ny dublicate create nhi hua hai wh same hi value address ko point kr rhe hai

// Shallow Copy //ek hi level tk copy krega nested object mai kaam nhi krega
const user2 = { ...user1 }
// const user2 = {}
//yha pe user2 mai user1 object assign kr rhe hai..jis mai assign krna hota hai use phle likhte hai jisko assign krna hota hai usko baad mai
// Object.assign(user2, user1)
