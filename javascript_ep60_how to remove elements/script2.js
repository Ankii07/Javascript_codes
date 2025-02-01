const container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

const elementTobeRemoved = document.querySelector("body > div > div:nth-child(1)")

//to delete that element

elementTobeRemoved.remove()

//older way to delete
//isme parent se reference lekr uske child ko lekr use krte hai
const parentElement = elementTobeRemoved.parentElemen
parentElement.removeChild(elementTobeRemoved)

container.remove()
//container ko remove krne ke baad code to hat gya hai par 
//continer variable hold kr rhi sari div value memory mai
//to phir se append kr skte ho

//best practice hai ki bina variable bnaye remove kr nhi to memeoy mai to rhege 
//hi remove hone ke baad bhi


//puri puri body ko bhi delete kr skte hai
document.body.remove()