// variable khuch bhi nhi bs ek value ko naam de dete hai

// variable 3 trah se create kiye ja skte hai let var const

// userIntro--> Camelcase
// user_Intro --> snake case
// vs -code mai kisi bhi variable pe hover kroge bolo datatype dikha dega

//boolean datatype mai yh convention hai ki is se use kro variable name

// jb hum variable mai khuch bhi nahi dalte hai bs define krke chor dete hai to usme wh undefine value dal kr chor deta hai

// kbhi bhi ek variable ki value aage program mai change nhi krna chahte hai us case mai 
// use krte hai const-keyword jaise const dayhours=24 is aage change nhi krna chahte hai

//jis trah ki hum dekh rhe the ki thi let a bs define krke chor dete the aur javascript usme bs undefined value dalkr chhorr deta hai 
// pr aisa const mai nhi kr skte kyuki error dega define ke samay value dalna must hai yha pe javascript automaticaly undefined value nhi dalta hai

// let var ka use krke jb variable define krte hai to wh block ke andr hi define hota hai

// let block scope hota hai aur var functional scope hota hai

//var mai hum variable ko phle hi use kr skte hai uske decleration ke phle wh undefined value hold krega pr let mai agr variable defined hai
// to agr us variable ko uske decleration ke phle use kr rhe to error dega
let firstName = 'ankit';
let lastName= 'Kumar';
let age=21;
let isHappy= true;

let userIntro ='Hi I am ' + firstName+' '+lastName;

console.log(userIntro);