const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1
let i = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// for(let i=1; i<=1000;i++){
//     addCardBtn.click();
// // }

const setIntervalId=setInterval(()=>{
    if(count < 999){
        clearInterval(setIntervalId)
    }
    addCardBtn.click()
      
 },100)

 input.focus()

 setTimeout(()=>{
    input.focus()
 },2000)

 
 setTimeout(()=>{
    input.blur()
 },3000)

 form.submit()

 setTimeout(()=>{
    form.submit()
    console.log("Form Submittef");
 },3000)