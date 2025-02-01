// localStorage hume yh fayda hota hai ki agr site reload ho 
// to jo data fill kiya hua ho wh delete nhi hoga wh local storage browser ke pe stored hoga..

// jo bhi properties window ke related defined hai use hum window. krke ya
// bina window lgaye huae use kr skte hai

//Esc shortcut key hai for bringing the console bar down

//locale storage ek keyword hai to acess localestorage of the browser.
//local storage ki value ko . lgakr acess kr skte hai
//jaise ki localestorage.MyName
 localStorage

const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')

const ageElement = document.querySelector('.age-tag')
const ageInput = document.querySelector('.age')

// nameElement.innerText = localStorage.myName;

// nameElement.innerText = localStorage.getItem('myName');

// localStorage.getItem('age') //null
// localStorage.age //undefined

// incognito mode mai localStorage mai store kiya values delete ho jata hai

nameInput.addEventListener('input', (e)=>{
    // localStorage.myName = e.target.value;
    localStorage.setItem('myName', e.target.value);
    nameElement.innerText = localStorage.myName;
})

ageInput.addEventListener('input', (e)=>{
    // localStorage.age = e.target.value;
    localStorage.setItem('age', e.target.value);
    ageElement.innerText = localStorage.getItem('age');
})

const myData ={
    name: '',
    age: '',

}
if(myData.name){
nameElement.innerText = myData.name

}
if(myData.age){
    ageElement.innerText = myData.age

}


nameInput.addEventListener('input', (e)=>{
    myData.name = e.target.value
    //to convert object into str
    localStorage.setItem('myData', JSON.stringify(myData))
})

ageInput.addEventListener('input', (e)=>{
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
})
//josn.parse se string se object mai krte hai
const myData1 = JSON.parse(localStorage.getItem('myData')) || {}

nameInput.addEventListener('input', (e)=>{
    myData.name = e.target.value
    //to convert object into str
    localStorage.setItem('myData', JSON.stringify(myData))
})

ageInput.addEventListener('input', (e)=>{
    myData.age = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
})

//locale storage se data ko us data pe right click krke option pe delete pe 
//click krke kr skte hai..

//pure ke pure locale storage ke key-value ko delete krne ke ke circle sa button 
//hai uspe click krna hota hai

//console way to delete the elements
localStorage.removeItem('user1')

//ek specific url ke liye hi ek specific locale storage acess hoga..
//ek specific website ka local storage dusri website acess nhi kr skte hai..