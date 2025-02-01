const username = 'Anurag Singh'

const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates',{},{name: 'Anurag', as: {age: 23}}]

//for accesing grapes frutsCollection[2] //because of the  0 index

//humlog array ki value ko update bhi kr skte hai jaise ki grpes ki jgh pe mango krne ke liye fruitsCollection[2] = 'Mango' yh actual value mai change kr dega

//yha pe ek doubt aa skti hai ki fruitsCollection ko to humne const se declare kiya hua hai phir iske andr ki values kaise change ho rhi hai
//to yha pe fruitCollection ka address nhi pr iske andr ki jo index : value jo assign hai wh change ho rhi hai 
//yhi pe agr fruitsCollection mai New Array se assign kre to error aayegi

//array mai object bhi rkh skte hai

//agr array mai length se jada  index ko array krna chahoge to undefine aayega 
// jaise yha pe length hai fruitsaCollection 6 age fruitsCollection[7] krna chahoge to error aayega

//array mai to assign uske length se kitni bhi jada index pe kr skte hai total length aur index ki bich ki sari empty initialize ho jayegi


//javascript jha bhi value khojne gya aur use nhi mila to undefine bag mai bhar krke de dega

//agr koi value aapko array ke end mai jorna hai to aap arrayName.push() method ka use kr skte hai yh add kr dega last mai

//agr koi valeu ko hatana ho array ke end se to aap fruitsCollection.pop() method use kr skte ho
//agr koi element nhi hai pop krne ko aap phir bhi gadhe ki trah pop kr rhe ho to aapko javascript bag mai bharkr pop de deta hai

//aap direct key value pair array mai nhi de skte ho..
//agr aap array ko const newArray =[firstName: "ankit"] se initialize kr rhe ho wh error de dega
//unecpected column error dega

//agr aisa krna ho to aap is trah se kr skte ho
//newArray.firstName = 'ankit'


const newObject = {}
const newArray = []

//Arrays behind the scene arrays hi hota hai to sare object ki properties chli gi arrays mai bhi

//Arrays mai index 0 se start hota hai

// typeof ['Apple', 'Banana', 'Grapes', 'Dates'] //output object hoga

// typeof {} //object

//typeof [] //object

//function koi bhi datatype nhi hai