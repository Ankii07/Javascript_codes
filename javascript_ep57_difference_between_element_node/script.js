
document.body.children

//HTMLCollection(2) [h1, script]

document.body.childNodes

// NodeList(7) [text, h1, text, comment, text, script, text]

//html mai jo bhi likhoge uska node ban jata hai newline ka node bn jata hai

document.body.childNodes[3]

document.body.attributes.style
//style="font-family: cursive;

console.dir(document.body.attributes.style)

document.body.childNodes[2].nodeValue ='Namste'