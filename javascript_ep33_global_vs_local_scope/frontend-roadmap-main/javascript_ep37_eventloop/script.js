console.log("Hi-1");

function hello(){
    console.log('Hello world')
}

//Synchronous Programming
for(let i=0;i<=4; i++){
    console.log(i)
}

debugger    //callback function
//Asynchoronus programing
setTimeout(function(){
    console.log("Hi-3");
},0)

hello();

console.log('Hi-2');

//is pure code upr walle ka output hoga
// Hi-1
// 0
// 1
// 2
// 3
// 4  //as per the norm 4 ke baad settimeout function chalna chahiye tha pr nhi chla 
      //wh functio call aur console.log ke baad chala kyuki setTimeout function asynchronous programming hai
// Hello world
// Hi-2       
// Hi-3  

//event loupe pe aap event loop ko visualize kr skte ho

//jaise hi javascript bhaiya ne setTimeout function encounter kiya to javascript bhaiya ko pata
//chal gya ki hayi susura waqt lagayega kaam krne mai hai sasura ko web Api section mai bhej dega aur bolega jb tumhara kaam
//ho jayega jitne seconds baad bhi to call back queue aa jana tb tak javascript engine rukega nhi hau sasura ke liye wh apna normal kaam krte rhega
//jab sasura yani set time out function ka time aa jayega wh call back queue mai aayega wha pe event loop bodyguard khra rhega aur dekhega agr call stack khali hai 
//tabhi tum call stack mai jaa skte ho aur run ho skte ho agr nhi hai khali to hau sasura ko call back queue mai hi khra krwa ke rkhega

//call back queue mai bhle hi time pura ho gya ho pr call stack mai tabhi jayenge jb call stack khali hoga
//asie pure code ko asynchronous code bolte hai javascript

//jaise ke setTimeout function webapi wale section mai gya hai usi trah aur bhi elements jate hai 
//jaise ki promises fetch request event listener , network request..

//jo code directly call stack mai chla jata hai aur run ho jata hai wh synchronous code hota hai
//jo code directly call stack mai nhi balki phle webApi section mai jata hai phir call back queue mai aata hai aur line mai lgta hai
//aur event loop bodyguard check krta hai ki call stack khaali hai tabhi use code ko call stack mai daalega phir run krega bhle hi us function ka run time kyu 
//na aa gya ho use call stack mai tabhi jayega jb call stack pura khali ho jayega..

//setTimeout function mai bhale hi 0 timer laga ho phir bhi webapi mai hi dala jayega..

