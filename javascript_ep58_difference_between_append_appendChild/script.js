
const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

//kai bar kya hota hai ki hum html mai javascript file phle load krne lgte hai
//aur html file load nhi hui hoti hai hai to jb hum khuch element access krna chahte hai 
//jo html mai defined to hai pr kyuki load nhi hui hai to error deta hai to iss cheez se bachne ke liye 
//yaa to aap script ko load krte waqt defer tag ka use kr skte ho jo ki yh krta hai ki script file lo load krne ka request dal kr
//aage pure html file ko parse krta hai aur pura html file ko parse krne ke baad script file ko run krta hai jisse ki wh error hat jata hai
//aisa hi khuch kaam aap script file ko body ke last line mai define krke bhi kr skte hai isme bhi phle pura html file load hoga phle phir jake script file 
//run hogi pr thori yh dikkat aati hai ki request phle nhi diya hota hai script file ko load krne ke liye jb pura html file load ho jati hai tb jakke request jati hai script file
//ke liye aur phir request aati hai aur jb jake run hota hai script file jisse ki thora time aur lag jata hai..

//aisa hi defer ki trah ek async tag bhi hota hai pr yh bakwas hai jada use nhi krna chahiyee..
//defer mai kya hota hai script file ke request chali to jayegi par run tbhi hi hoga jb pura ka pura html file load ho jaye pr
//async kya hota hai ki agr script file puri load ho gyi html file ke load hone se phle to wh bich mai hi run ho jayegi..

//append ka matlb hota hai sbse end mai rakhna.

//maan lo ki aapko conatiner naam mai khuch rakhna hai to appendChild ka use krte hai
//cut  paste ki trah use hota hai append child..

//appendChild se jo element jaha pe wha se hata ke dusre container mai rakh skte ho aap..cut and paste ki trah..
// container.appendChild(h1)

// //copy paste krne ke liye CloneNode tag use kr skte hai.
// //cloneNode ek function hai jo us selected element ka ek clone return krta hai..
// h1.cloneNode()
// //h1 ke andr ke text ko maintain krne ke liye deeo clone ko true krna pdega..
// h1.cloneNode(true) 

// //copy paste
// // container.appendChild(h1.cloneNode(true) )

// for(let i=2; i<= 10; i++){
//     //const newCard = card.cloneNode(true)
//     card.innerText =i;
//     container.appendChild(card.cloneNode(true))
// }

for(let i=2; i<= 10; i++){
    const newCard = card.cloneNode(true)
    newCard.innerText =i;
    container.appendChild(newCard)
}

