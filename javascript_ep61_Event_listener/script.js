//event listener  ko aap console mai dekh skte ho event listener wale tag mai

// const h1 = document.querySelector('hi')
// const card = document.querySelector('.card')

// function sayHi(){
//     console.log('hii');
// }

// console.log(h1.onclick); //iska output null aayega kyuki khuch bhi set nhi kiya hai

// //YHA pe call krne ki jurrort nhi hai
// h1.onclick = sayHi;

// //jb direct hmtl mai event listerner function laga rhe the us element ki property ko set kr de rha tha..

// //add eventlistener onlclick property pe set nhi krta hai function ko 
// //bakiyo ki trah
// //yha pe bhi function ko call nhi krna prega

// function secondSayHi(){
//     console.log("hii")
// }

// h1.onclick = sayHi;
// h1.onclick = secondSayHi;
// //yha pe sayHi override ho gya aur secondsayHi run hoga
// //pr yhi addEventlisetener se kre to dono function simultaneously run krega

// h1.addEventListener('click',sayHi)

// h1.addEventListener('click', )

// card.addEventListener('click', function(){
//     console.log('say Hi Buddy')
// })

const newCard = document.querySelector('.new-card')
//yha pe phla card hi select hoga baki nhi hoga kyiki query selector sirf phle 
//card hi select krta hai
const container = document.querySelector('.container')


let i=1;

newCard.addEventListener('click', function CardAdder(){
    // let i=1;
     const div = document.createElement('div')
     div.classList.add('new-card')
     const newCard1 = newCard.cloneNode()
     newCard1.classList.remove('add-card')
     div.innerText =i
     container.append(div)
     i = i+1;
})

// The value of i is not incrementing because each time the event listener is triggered, a new instance of the variable i is created and initialized to 1. 
// The increment happens after setting the innerText, but it does not persist across multiple function calls because the 
// variable i is declared inside the function. Therefore, on each click, i is reset to 1.