const paragraph = document.querySelector('p')

//inner html pura pura ka content de dega tags ke sath bhi

console.log(paragraph.innerHTML)

//output

// <b>Frontend development</b> is the development of the
// <a href="https://en.wikipedia.org/wiki/Graphical_user_interface" target="_blank" title="Graphical user interface">graphical user interface</a>
// of a website, through the use of
// <a target="_blank" href="https://en.wikipedia.org/wiki/HTML">HTML</a>,
// <a target="_blank" href="https://en.wikipedia.org/wiki/CSS">CSS</a>, and
// <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>, so that users can view and interact with that website.

//inner html ko set bhi kiya ja skta hai
// paragraph.innerHTML = '<h4>Hiii</h4>'

console.log(paragraph.innerText)
//output

//isme jo spaces diye huae hote hai wh nhi dikhte hai

//inner text mai jo content ka part ka display property none ho wh consider nhi kiya jata hai..

//isme sirf whi dikhta hai jo sirf browser mai dikhta hai

// Frontend development is the development of the graphical user 
// interface of a website, through the use of HTML, CSS, and JavaScript,
//  so that users can view and interact with that website.

console.log(paragraph.textContent)

//
 
//isme content to dikhta hai sath hi sath  jo spaces aur new line diye huae
//hote hai wh bhi dikhte hai

// Frontend development is the development of the
// graphical user interface
// of a website, through the use of
// HTML,
// CSS, and
// JavaScript, so that users can view and interact with that website.

//yh innertext se nhi aayega
//visiblity : hidden ek css property hai..
//isme aata hai
//ya opacity :0

//text content mai har trike se aata hai..




