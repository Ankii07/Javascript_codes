// yh attribute jo object mai persent rhte hai usko acess krne mai help krta hai
document.querySelector('[procodrr]').attributes.procodrr
//iska value pane ke liye

document.querySelector('[procodrr]').attributes.procodrr.value

//itna jo upr kiya hai uske sort krke kr skte hai getattribute ka use krke

document.querySelector('[procodrr]').getAttribute('hello')


console.log(document.querySelector('h1'))
console.log(document.querySelector('h1').innerHTML)  //<i>Frondend   Development</i> with tags
console.log(document.querySelector('h1').innerText)  //Frondend Development without tags but spaces between ignored
console.log(document.querySelector('h1').textContent)//Frondend   Development //without tags as well but spaces are there

//h1 tag mai jitne bhi classes hai string ke format mai mil jata hai
document.querySelector('h1').getAttribute('class') 

//attribute ko set krne ke liye 
document.querySelector('h1').setAttribute('hii', 'Hello World')

//get attribute hii ke baad hello world de doge to error nhi dega dusre 
//vale value ko ignore kr dega aur us attribute ki value jo bhi set hogi uske wh de dega..

//direct values pane ke liye bhi kai trike hote hai
console.log(document.querySelector('h1').id)

//. krke unki properties hi set kr skte hai jo property object mai hai

