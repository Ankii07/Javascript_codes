const addCardBtn = document.querySelector('.add-card')
const container = document.querySelector('.container')

let count = 1



addCardBtn.addEventListener('click', () => {
   const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    // newCard.addEventListener('click',()=>{
    //     newCard.remove();
    // })
    
    container.append(newCard)
})
container.addEventListener('click',(e)=>{
    if(e.target !== container)
    e.target.remove();
})
// newCard.addEventListener('click', function(event) {
//     let element = event.target;
    // let path = getElementPath(element);
//     console.log(path);
//     let selectedELement = document.querySelector(path)
//     console.log(selectedELement)
//     selectedELement.remove();
//     // console.log(path);// Display the path in an alert box
//     event.stopPropagation();
// });


// function getElementPath(element) {
//     let path = [];
//     while (element) {
//         let tag = element.tagName.toLowerCase();
//         let id = element.id ? `#${element.id}` : '';
//         let classNames = element.className ? `.${element.className.split(' ').join('.')}` : '';
//         path.unshift(`${tag}${id}${classNames}`);
//         element = element.parentElement;
//     }
//     return path.join(' > ');
// }

//event deligation use khte hai ki jb multiple children pe eventlistener na lga ke 
//apne parent ke upr laga kr whi same kaam krwa le to use khte hai event deligation.

