//jb hum tab mai url search krte hai to ek http request jati hai server ko

//json place holder naam ki ek website hai jo fake json jaise file dega

//jb hum request krte hai to response jadatar case mai object format mai hi atta hai 
//jisme key " " mai hota hai aur string value bhi.

//alt + shift se alter kr skte hai   

//json ek valid obect hota hai 

//http request hum sirf json aur image pe hi nhi bhej skte hai blki videos html css javascript  pe bhi bhej skte hai

//yh fetch request hai
let userData
const image = document.querySelector('img')

const button = document.querySelector('button')

button.addEventListener('click',() => {fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then((json) => {
        console.log('Got the data')
        image.src=json.message;
        // userData=json
        // console.log(userData)
      })} )
 
// console.log(userData) 

//jb request jati hai to usme bhut khuch hota hai 

//request method 2 trah ke hote hai
//get
//post  
//status 

//postman ek software hota hai iske andar request bhej skte hai

//post request mai convention hota hai jb request post mai bheja jayega to khuch data jayega aur usse backend mai 
//khuch create hoga..

//maan lo user ne apna account create kiya hai to uska pura detail backend pe post ke help se hi bhejenge

//fetch bhi asynchrnous hai

//api dusre website se help krne mai madad krti hai


