//kisi bhi function ke aage newkeyword lagate  hai to wha se ek object return hoke aata hai
//promise ko new lagakr hi call kr skte hai
//promise ek call back function pass krna must hai
const resolveBtn = document.querySelector('#resolve-btn')
const rejectBtn = document.querySelector('#reject-btn')


const p1 = new Promise(()=>{});

//ek promise ki 3 state ho skti hai
//ya to pending rhegi, 
//ya to resolved rhegi, 
//ya rejected

//resolve krne ek liye 2 arguments pass krna hota hai

const p2 = new Promise((resolve, reject)=>{
   resolve({name:'Ankit'});
});

//jo resolve mai pass krenge whi promise ka result ho jayega..

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    reject('promise Rejected');},4000)});
 

resolveBtn.addEventListener

const p4 = new Promise((resolve, reject)=>{
    resolveBtn.addEventListener('click',()=>{
        resolve({name:'Ankit'});
    })

    rejectBtn.addEventListener('click',()=>{
        reject('Promise Rejected');
    })
 })
//jaise hi promise resolve hota hai then function call hota hai
//then mai data mai wh value aayegi jo resolve hone pe promise ne return kiya hai
//aur catch mai wh error aayegi jo value ke reject hone pe return hogi

//chahe resolve ho ya reject finally call hoga hi h
 p4.then((data) =>{
     console.log('data');
 }).catch((error)=>{
    console.log('error')
 }).finally((data)=>{
    console.log("finally")
 })

 //jb bhi promise ko resolve krenge to .then ke andr ka code run hoga
 //aur jb bhi hum promise ko resolve krenge to .catch ka use krenge

 //ek promise ko ek hi baar reject kr skte hai yaa resolve kr skte hai
 //uske baad resolve yaa reject nhi kr skte hai

//jb reject krte hai promise ko to error aati hai aur phir us error ko catch krte hai

//promise ek special object hai jiske andr hume do method milte hai then aur catch agr promise resolve ho jati hai to then used hoata hai aur resolved data then ke pass hoti hai
//aur agr promise reject ho jaye to catch run hoga aur rejected error catch mai pass hogi

//promise ek native code hai yani browser code yani humne nhi likha hia

//promise ki tracking asynchronously hoti rhti  hai

//jb promise reject ya resolve hota hai callback function micro-task queue mai aata hai 

//jitne bhi callback hote hai wh call backqueue mai hi aate hai

//micro-task queue mai wh functions jayenge jo ki .then mai tha
//age call back queue aur micrtask dono mai same time pe aa gya hai microtask ke  code phle jayenge call stack mai as compared to call back queue

//.then aur catch bhi ek promise return krta hai

p4.then((data) =>{
     console.log('data');
 }).then((data) => {
    console.log("hello")
 }).then((data)=>{
    console.log('error')
 }).then((data) =>{
    console.log("resolved")
 }).catch((error)=>{
    console/log('error')
 })

