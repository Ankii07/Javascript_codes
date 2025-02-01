//fetch api nya usse phle XMLHttpRequest() use hota tha
//bina new keyword ke use nhi kr skte
//yh ek normal object hai
const image = document.querySelector('img')
const button = document.querySelector('button')
 

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()


console.log(xhr) ;

// function sayHi(){
//     console.log('hii');
// }
// sayHi() //output will be undefined 
// new sayHi(); //output will be object name sayHi{}

//agar aap chahte ho ki resppmse oject ke type mai hi aaye to aap use kr skte ho
xhr.responseType = 'json';

// xhr.addEventListener('load', () => {
//     image.src=  xhr.response.message
//     console.log(JSON.parse(xhr))
    
// })

//same alternative for above function
  
  xhr.onload = () => {
    image.src = xhr.response.message
    console.log(xhr)
  }

 
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')  
    xhr.send() 
  
})

  //kisi bhi response ko object ki form mai krne ke liye JSON.parse(xhr.response) ka use kr skte hai
  //event sirf ek element pe nhi balki ek particular object pe bhi fire ho skta hai
  