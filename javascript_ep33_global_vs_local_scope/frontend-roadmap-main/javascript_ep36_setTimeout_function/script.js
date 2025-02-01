// agr console mai kbhi native code likh kr dikha rha ho to
//uska matlab javascript mai jo code phle se likha hua to wh hota hai

//setTimeout function ek higher order function hai

//setTimeout function aisa function hai jisme tum string pass krte ho to use
//string ki trah nhi treat krta hai balki javascript code ki trah treat krta hai,
//aur ek file create krta hai behind the  aur pura code jo string ke andr likha tha wh string remove normal code ki trah likh deta hai


setTimeout('console.log(true)') //output true

const hiii ='Hello'

setTimeout('hiii') //no error

// setTimeout('console.log('true')')  //error aayegi because the quotes
//to correct this use alternatives quotes like defined below
setTimeout('console.log("true")') ;

//setTimeout kaam yh hai ki hum bta skte hai kitne mili seconds ke baad give string ya code ko run krwana hai jisme ki 
//phla arugument code ya string hota hai aur dusra hota hai kitne milliseconds baad
//1000 milliseconds = 1 second

setTimeout('console.log("Ankit Kumar")', 2000) //yh code 2 seconds baad run hoga Vm naam ke file mai script.js file mai nhi run hoga console mai

setTimeout('console.log(true); console.log(true);', 2000) //agr semicolon na lgaye dono console ke bich mai to error aayega

//agr dono console ko multiple line mai likhenge to error dega ..agr likhna hai to 
//string literal template yani `` backtick ka use krna hoga phir multiple line mai likh paoge

//setTimeout function ki return value ek number hoti hai 
//console mai kisi function ki return value <: aise arrow ke samne aati hai aur output values :> aise arrow ke smane

//setTimeout ki jo value return hui wh timer ki id hai aur hum chahe to multiple timer laga skte hai aur har timer ki alag alag id hogi

//agr consle mai next line mai jana hota hai to simply hum enter press nhi krte baki shift+enter press krte hai

//clearTimeout se hum setTimeout function ko run hone se bich mai hi rok skte hai 
//to maan lo ki ek function hai jisme mai humne timer lga 10 second ka yani 10000 millisecond ka to 
//agr 10 second se phle console mai clearTimeout(9) to wh function ko bich mai hi terminate kr diya jayega aur 10 second ke baad function ka koi bhi output nhi aayega
//yha pe timeout function mai jo number pass kiya gya hai wh id hai us timer ki jo ki timeout function ki return value krwa dekh skte hai
 
clearTimeout(9)

const timer1 = setTimeout(`console.log("Hi-1")`, 1000);
const timer2 = setTimeout(`console.log("Hi-2")`, 2000);
const timer3 = setTimeout(`console.log("Hi-3")`, 1000);

console.log(timer1); //output koi bhi number hogi jo us timer ki id ko batayega let it be 2

clearTimeout(2);
clearInterval(2); //se bhi run nhi hoga

function a(){
    console.log(arguments[2]); //argument ek keyword hota hai //not recomeded to use
    console.log('hello world');
}
 //a ki return value hogi undefined

 const timer4 = setTimeout(a,3000,'ankk',99,37,'sdk',[23,42,4,3]) //yha pe jo do extra values pass ki gye hai wh function ke arguments mai aa jayega //not so used
 const timer5 = setTimeout(a(),3000) //setTimeout(undefined,3000) 3 seconds ke baad khuch bhi run hoga aur koi error bhi nhi aayega
 const timer6 = setTimeout(true,3000) //same as above

 const timer7 = setTimeout(`console.log("Hi-1")`, 1000);
 const timer8 = setTimeout(console.log("Hi-2"), 2000); //agr bina string mai kiya kra to yh phle run ho jayega as compaer to the first one

//timeout function mai agr time pass na kiya to as 0 treat hota hai

//interview question
//phle kon run hoga
console.log(`Hi I am here`); //phle run console wala hoga kyki yh synchronous hai yani line by line run hota hai
setTimeout(`Hi I am here`, 0);//setTimeout asynchronous hai yani line by line nhi khi hatke run hota hai yani khi memorly mai load hoga phir khuch process hogi 
                               //fir jake run krega

//setInterval bhi thora same hota hai ki agr humne timer mai 1 second de diya to wh hr ek second  us function ya piece of code ko
//run krta rhega.. 

setInterval("console.log('jai Mata di')" , 1000); //yh har ek second pe run hota rhega 
clearInterval(1); 

setInterval(a,3000); //higer order function

setInterval(function(){console.log("I am the one, I am the only");}, 3000) //direct function (anonyms function) bhi pass kr skte hai