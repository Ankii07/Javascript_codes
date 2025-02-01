const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')

usernameInput.addEventListener('click', ()=>{
    console.log('input Clicked');
})

usernameInput.addEventListener('dblclick', ()=>{
    console.log('input double Clicked');
})

let inputValue 

//input fired hota hai jb hum input mai khuch type krte hai
usernameInput.addEventListener('input', (event)=>{
    console.log(event);
    //input ke andr value ko access krne ka trika
    // event jispe run kr rha hai uski value
    inputValue =event.target.value
    console.log(event.target.value);
    paragraph.innerText = event.target.value;
})
 //yh upr wala function behind the scene ek addEventlistener function ko call krta hia
 //aur call krte samay khuch pass krta hai jo ki hota hai ek object..jaise ki yha pe event variable pass kiya hai..

 //target wh propety hoti hai jiske upr event hua hai


//change jb trigger hoga jab hum input mai khuch change krke bahar nikalte hai
 usernameInput.addEventListener('change', (event)=>{
    console.log(event);
    //input ke andr value ko access krne ka trika
    inputValue =event.target.value
    console.log(event.target.value);
    paragraph.innerText = e.target.value;
})

usernameInput.addEventListener('focus', (event)=>{
    console.log(event);
    //input ke andr value ko access krne ka trika
    inputValue =event.target.value
    console.log(event.target.value);
    paragraph.innerText = e.target.value;
})

usernameInput.addEventListener('blur', (event)=>{
    console.log(event.type);
    //input ke andr value ko access krne ka trika
    inputValue =event.target.value
    console.log(event.target.value);
    paragraph.innerText = event.target.value;
})

//jub hum dusre page pe aate hai to memory se delete ho jata hai
form.addEventListener('submit',(e) =>{
    //prevents reload after clicking the button
    e.preventDefault()
    const myformData = new FormData(form)
   console.log(e);
   for(const p of myformData.entries){
    console.log(p);
   }
})

//current target mtlb hota hai kiske upr event lga hai
//target batata hai kon se element se event start hua hai