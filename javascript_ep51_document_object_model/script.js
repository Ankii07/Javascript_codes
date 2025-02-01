//html by default hi responsive hota hai

//document ka datatype object hota hai

//jb hum live server pe load krte hai to live server khuch code inject kr deta hai jaise ki
//script file html tag ke niche mai..

//html parser hai jo document model ko define krta hai

//document object model ek bhut bda object hai jiske andr children aur uske parent ke 
//andr relationship defined hoti hai..

//jo bhi hum html ke andr dete hai wh sari properties ka object model bnta hai javascript mai
//wh property ke roop mai bn jayega yaa to ek pura ka pura object bn jayega....

//phr jo html properties jinka record rakha gya hai javascript mai unko use krke modify kr skte hai..

//console.log aur console.dir ki return type undefined hoti hai..

console.log(document.children) //output  HTMLCollection [html]
//yh html collection deta hai ise array ke index ki trah use to kr skte hai pr yh array nhi hota hai..

console.log(document.children[0])
//for accessing first value..

document.children[0].children

document.children[0].children[1]
//same for above query

document.body

typeof(document.body.children[0]) //object
 
console.dir(document.body.children[0]); //to see in object format

document.body.children[0].innerHTML 

document.body.children[0].innerHTML ='<i>Ankit</i>' //innerHtml yh italic property apply krwa dega
                                                    //access krene to yh pura ka pura html dega tag ke sath <i>Ankit</i>


document.body.children[0].innerText ='<i>Ankit</i>' //innerText yh property apply nhi krega balki lekin as a text dikh dega browser pe
                                                    //access krene to yh pura ka pura html nhi dega tag ke sath <i>Ankit</i> balki sirf innertext dega jo ki hai Ankit

document.body.children[0].textContent ='<i>Ankit</i>'

document.body.children[4].src = './img'

//yh sare ko queries ko variable ke and store kr skte ho..

const myParagraph = document.body.children[6]

myParagraph.innerHTML= 'Ankit'

document.querySelector('a');


