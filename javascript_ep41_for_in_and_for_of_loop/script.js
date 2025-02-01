//for in or for of loop ka use krke hum generally array or object ke upr loop 
//krte hai

const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']
// for(let i =0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }
//agr use strict likh diya hota to jaisa niche fruits ke saath kr rhe hai waisa nhi kr pate error de deta 
for(fruit of fruits){
   //yha pe jo 3 dot aa rha hai wh isiliye aa rha hai kyuki fruit ko khi declared nhi kiya gya hai direct use kiya ja rha hai
    console.log(fruit);
}

//yha pe humne fruits ko kisi se declare nhi kiya hai aur directly use mai laa rhe hai
//to aise mai yhh global scope mai defined ho jayega aur jb javascript ka control loop se bahar aa jayega tb bhi fruits 
//memory mai assigned hi rhega delete nhi hoga
//aisa hi same hota agr hum agr fruits var se declared krte..
//agr let ya const se declare kiye hote to aisa nhi hota aur fruits variable delete ho gya hota..

const user = "Ankit kumar"

for(const letter of user){
    console.log(letter);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
}

for(const key in person){
    console.log(key,":",person[key]) //yh hai bracket notation aur wh hota hai dot notation
}

//normal object jo hota hai wh iteratable nhi hota hai
//object normal loop aur for of se loop nhi kr skte hai ,,isko for in se hi loop kiya ja skta hai

const personKeys = object.key(person)
//isse se hume ek array mil jayega jismaie person object ke sari keys hai
const personvalues = object.values(person)
//isse se hume values ki array mil jayega
const personEnteries = object.entries(person);
//isse se hume values + keys dono mil jayega.
for(const key in personKeys){
    console.log(person[key]);
}

'firstName' in person
//yh btata hai firstName key person object mai hai ki nhi yh true yaa false deta hai