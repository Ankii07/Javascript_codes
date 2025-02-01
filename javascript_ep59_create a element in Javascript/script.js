const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
console.log(container);
const firstImage = document.querySelector("img")


// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// for (let i = 2; i <=100; i++) {
//     const newImg = firstImage.cloneNode()
//     newImg.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }

// document.createElement('Ankit')
// //ek ankit ke naam ke element create kr de dega 
// //aap jo bhi likhoge createElement ke andr uske tag ke saath element create krke de dega
// const p1 = document.createElement('DIV') //capital mai bhi daal skte hai wh automatically small mai convert kr dega
// const paragraph = document.createElement('p')//phle create kiya

// document.body.appendChild(paragraph)//
// container.append(paragraph)//create krne ke baad append kiya
// paragraph.innerText='hello' //append krne ke baad uske andr ka text update kr do

// paragraph.classList.add('my-para')
// paragraph.id ='hii'

for(let i=1; i<=100; i++){
    const div = document.createElement('div')
div.classList.add('image-card')

//shortcut way to do the same things very useful

const myHTML =`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
                <p>${i}</p> `

div.innerHTML = myHTML

// const image_card = document.querySelector('.image-card')
// console.log(image_card)
// console.log(div)
// const newImg = document.createElement('img')
// newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// const paragraph = document.createElement('p')
// paragraph.innerText =i;
// div.append(newImg)
// div.append(paragraph)
//dono cheezo ko ek hi baar mai append kr skte hai
// div.append(newImg, paragraph)
container.append(div)
 }

// const div = document.createElement('div')
// div.classList.add('image-card')
// const image_card = document.querySelector('.image-card')
// console.log(image_card)
// console.log(div)
// const newImg = document.createElement('img')
// newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
// const paragraph = document.createElement('p')
// paragraph.innerText =1;
// div.append(newImg)
// div.append(paragraph)
// container.append(div)