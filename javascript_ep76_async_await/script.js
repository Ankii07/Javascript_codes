//async await apne aap se ek promise return krega

//ek function ko async bnane ke liye us function ke aage ek async keyword likhna hota hai


//  async function makeRequest(){
//     throw new Error("error in program");
//     return 'hello'
//  }

//async function ke khuch return krte hai to promise result property mai wh value aa jati hai to 
//agar humne yha pe return hello kiya hai to promise result ki value hello set ho jayegi..

//agar hume reject krna hai to throw error krna hoga

//dev tool ko ek new tab mai khol skte hai

function hi(){
    console.log('Hello');
    // throw 'error in program'
    throw new Error('error in program')
    //unreachable code yh code kabhi run hi nhi hoga
    console.log('hii');
}

async function makeRequest(){
    const url = 'https://dummyjson.com/products'
    //fetch ek promise return krta hai
    const responsePromise = fetch(url)
    responsePromise.then((response)=>{
       return response.json()
    }).then((data)=>{
        console.log(data.products[0].title);
    })
 }

//yhi upar wali cheez async await ka use krke kr skte ho

//await function yh krta hai ki promise ke result ko return krta hai 
//await keyword wait krta hai ke promise ka response kab aayega aur jb response aata hai tab uski promise result ko return kr deta hai

//jab fetch krte hai to promise aata hai aur age await laga dete hai to promise ka result aata hai
//await ke karan jbtak response aata nhi code aage nhi badhta hai 

//await asynchrounous hai pr yh synchronously behave krta hai 
//await apna kaam krne ke liye web api mai jata hai to pr javascript ka main engine uske liye wait krta rhta hai aage nhi badhta hai
//jb await function ka kaam ho jata hai wh call stack mai whi se run hota hai jha se chhorr kr gya tha.
async function makeasyncRequest(){
    const url = 'https://dummyjson.com/products'
    //fetch ek promise return krta hai
    const responsePromise1 =  fetch(url)
    console.log(responsePromise1);
    //ouput for the above value
    
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// Response
    
    const responsePromise2 =  await fetch(url)
    console.log(responsePromise2);
    console.log('hii');
    //output 
    // Response {type: 'cors', url: 'https://dummyjson.com/products', redirected: false, status: 200, ok: true, …}
}

//await krke asynchrounous bnate ho to wait ka kaam javascript ka main engine nhi balki web api krta hai 
//pr iska matlab yh nhi hai ki javascript aage bdhge aage kaam krne lgega aur wh ruka rhega aur free mind se us request ke intezaar
//whi baithe baithe ager javascript engine ko kaaam bologe jaise ki babu humar ego function call kr de to wh krdega ya console.log to kar dega
//aur jb request pura ho jayega to aage badh jayega

//aur jb xhr ka use krke async bante hai to wait krwane ka kaam bhi javascript engine ko hi krna hota hai aur
//kyuki javascript engine wait krwane ka kaam kr rha rha hai to aur khuch nhi krega jasie ki function call aur something

 makeasyncRequest();

 function makesyncRequest(){
    const xhr = new XMLHttpRequest()
    // xhr.responseType = 'json'
  
    xhr.addEventListener('load', () => {
      // image.src = JSON.parse(xhr.response).message
      console.log(xhr);
    })

  
    xhr.open('GET', 'https://dummyjson.com/users')
    xhr.send()
    console.log('asyn')
}

makesyncRequest();
//await keyword async function ke bahar use nhi kr skte hai..
async function makeasyncRequest(){
    const url= 'https://dummyjson.com/users';
    //ek await se response aaya aur durse await se response ka data
    const data = await((await fetch(url))).json()
    console.log(data)
}
//then automatically console.log mai data pass kr dega aur console.log display krwa dega console mai
makesyncRequest().then(console.log)

makesyncRequest().then((data)=>{
    console.log(data);
})