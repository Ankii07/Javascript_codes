const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('dblclick', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('mousedown', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('mouseup', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//jb humara mouse us particular element ke andr enter krta hai to wh event fire
//ho jata hai yha pe click krne ki jurrort nhi padti..
card.addEventListener('mouseenter', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//jb app selected element ghus ke jaise hi bahr niklenge waise hi event fire ho jayega..
card.addEventListener('mouseleave', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//jb aap selected element ke andr aa jaoge aur jitni baar move kroge utni barr 
//event fire hoga
card.addEventListener('mousemove', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//mouse leave ki tarah hi hai
card.addEventListener('mouseout', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//
card.addEventListener('mouseover', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// The mouseover and mouseenter events in JavaScript are both used to detect when a mouse pointer moves over an element. 
// However, they have key differences in their behavior and use cases.

// mouseover Event
// Triggers: The mouseover event triggers when the mouse pointer enters the element or any of its child elements.
// Event Bubbling: It bubbles up through the DOM, meaning it will propagate to the parent elements unless stopped.
// Use Case: It's useful when you want to detect when the mouse moves over an element and any of its children.
// mouseenter Event
// Triggers: The mouseenter event triggers only when the mouse pointer enters the element itself, not its child elements.
// Event Bubbling: It does not bubble, so it does not propagate to parent elements.
// Use Case: It's useful when you want to detect when the mouse moves over a specific element without being affected by its children.


//jb aap selected element pe scroll kroge to event fire hota hai
card.addEventListener('wheel', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

//yh mouse event nhi hai
// The scroll event in JavaScript is an event that is triggered when an element's scrollbar is being scrolled.
//  It applies to any scrollable element, including the window object. 
//  This event is useful for creating interactive features that respond to the user's scrolling actions, such as infinite scrolling, lazy loading images, or sticky headers.
card.addEventListener('scroll', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

//mobile event hai yh
card.addEventListener('touchstart', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('touchend', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('touchmove', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('drag', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})
//yhh mobile aur desktop dono mai kaam krta hai
//pointer wale events hote hai wh mouse wale bhi kam krta hai aur touch wala bhi
card.addEventListener('pointermove', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

card.addEventListener('pointerleave', (e) => {
    console.log(e);
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})