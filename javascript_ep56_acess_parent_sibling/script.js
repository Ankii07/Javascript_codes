//har ek element node hota hai.

const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")

firstLink.parentElement //<p>.....</p>

firstLink.parentElement.parentElement //<body>....</body>

firstLink.parentElement.parentElement.parentElement.parentElement //Null..

firstLink.parentElement.parentElement.parentNode

firstLink.childNodes //#Nodelist[text]

firstLink.children

//to get the next sibling
firstLink.nextElementSibling

firstLink.nextElementSibling.nextElementSibling

//to get the previous sibling
firstLink.previousElementSibling

firstLink.previousElementSibling.previousElementSibling

//nextElementSibling aur nextSibling mai difference hota hai 
//nextSibling text node deta hai aur nextElementSibling element dega..
//nextSibling type object hota hai..

console.dir(firstLink.nextSibling)