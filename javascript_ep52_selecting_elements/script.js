function sayHi() {
    document.body.children[4].src =
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
   }

const allImages = document.getElementsByTagName('img') //give a html collection

document.getElementsByTagName('p')

document.getElementsByTagName('img')[1]

document.images //yh document ki property hai jo sare images ka record rakhti hai 

document.getElementsByTagName('p').innertext

document.getElementsByClassName('Css-Image')[0]
//id wale  element mai s nhi lgta hai
//koi ek particular element ko select krna hai to usko id de skte ho use kr skte ho
//agr id match nhi krega to null dega
document.getElementById('id')
//query selector ko css selector ki trah use krte hai
//css selector aur attribute selector bhi ke sare hi use ho skte hai queryselector
//yh jo phle element jo match krega wh de dega sirf whi query sare element jo match krega wh de dega..
document.querySelector('#id')

document.querySelectorAll('id') //query selector all hume node list deta hai

document.querySelector('ul li:nth child')

const allImagess = [...document.querySelectorAll('img')] //converted to array using spread operator
//yh ul ke repsect mai search krke dega document ke respect mai nhi...
const imageInsideUl = ul.querySelector('.css-image')

ul.getElementById('odmg')//yh error dega kyuki yh sirf document object mai hi defined hota hai

ul.getElementsByTagName('img') //yh error nhi dega yh ul ke respect mai hi search krta hai


const imagesUrl = [
   'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
   'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
   'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
 ]
 
 // allImages[0].src = imagesUrl[0]
 // allImages[1].src = imagesUrl[1]
 // allImages[2].src = imagesUrl[2]
 
 for (let i = 0; i < allImages.length; i++) {
   allImages[i].src = imagesUrl[i]
 }
 
 allImages.forEach((image, i) => {
   image.src = imagesUrl[i]
 })

 //devtool bhi js path ka option deta hai by right clicking on the element
 