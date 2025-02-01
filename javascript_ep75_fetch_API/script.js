//fetch promise return krta hai

//jb promise resolve hogi to jo uski promise result ke andr value hogi wh .then ke andr wali argument 
//ki value mai aa jayegi.

//jb hum request bhejte hai fetch ka use krke to directly data nhi milta hai data object ki body ke property ke andr aata hai
 
//jb bhi hum fetch ka use krke request bhejte hai to first time mai data nhi milta hai
//first time mai hume ek response object milega aur uske upr hume response.json aur phir wh ek pura promise dega
fetch('https://dummyjson.com/products')
.then((response)=>{
    return response.json()
}).then((data) => {
    console.log(data);
})

//agr then ek andr koi normal value bhi pass kr denge to then use promise mai convert krke hi return krega
//to define method
//request method khcuh bhi ho skta hai bs wh humare backend ko support krna chahiye..
//jb hum post request bhejte hai to kai baar hume haeader bhi set krne padte hai
//get method by default hota hai
fetch('https://dummyjson.com/products',{
    method: 'POST'
})
.then((response)=>{
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

fetch('https://dummyjsons.com/products/add', {
  method: 'POST',
  //headers kai baar optional hote hai
  headers: { 'Content-Type': 'application/json' },
  //body se hum khuch data bhejte hai backend mai wha pe data save hoga
  body: JSON.stringify({
    title: 'BMW Pencil',
    category: 'Stationary'
    /* other product data */
  })
})
//
//web tool mai preview wh data dikhayega jo backend se aaya hai jo ki yha pe id ki value hai jis element ko humne add kiya hai
//payload wh hoga jo humne body ke andr bheja hai