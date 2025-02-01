const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// Event bubbling andr se bahr ki traf hota hai
document.body.addEventListener('click',(e)=>{
    console.log("Body Box is clicked");
},true)

document.addEventListener('click',(e)=>{
    console.log("document is clicked");
},true)

window.addEventListener('click',(e)=>{
    console.log("Window is clicked");
},true)
//body ka parent hota hai document
//document ka parent hota hai window

//jb aap children pe click kroge to uska effect parent pe bhi dikhega jaise ki
//agr hum pink box ya blue box pe click kre to green box bhi clicked hoga aur console
//mai green box clicked dikhega..isi ko event bubbling khte hai.


//green pe click krenge to pink pe click nhi hoga..
green.addEventListener('click',(e)=>{
    console.log("Green Box is clicked");
},true)

//agr pink pe click kiya to
// Pink Box is clicked
// Green Box is clicked

//jispe bhi e.stopPropagation lagane ke baad pe uske parent pe event pass nhi ho pata..
pink.addEventListener('click',(e)=>{
    e.stopPropagation();//to stop event bubbling
    console.log("Pink Box is clicked");
},true)


// Blue Box is clicked
// Pink Box is clicked
// Green Box is clicked
//Body Box is clicked
// document is clicked
// Window is clicked

//addEventListener pe phla argument hota hai event 
//dusra hota hai event function 
//teesra hoga event capturing

//event capturing true krne se bubbling ulta chalega
//window se start hoke element tak phuchega event bubbling
// blue.addEventListener('click',(e)=>{
//     console.log("Blue Box is clicked");
// },true)
//another alternative for above code
//kisi bhi cheez pe ek hi baar click krke batana hai to once true kr skte hai
//bas whi element wala function run hoga..
//by default false rhta hai
blue.addEventListener('click',(e)=>{
    console.log("Blue Box is clicked");
},{capture: true, once: true})