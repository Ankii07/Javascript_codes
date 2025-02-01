//synchrnous code
//matlab javascript ka engine ke under ek hi mind hai matlb ek time pe ek hi kaam krega
//isiliye khte hai ki javascript single threaded hai

//javascript ek time pe ek hi kaam kr skta hai isiliye javascript ko single threaded khte hai
//c and java multi threaded language hai matlab alag alag thread pe simultaneously kaam krwa skte hai

//browser single threaded nhi balki multi threaded hota hai

//javascript engine jb asynchrounous program ko browser ko de deta hai aur kyuki browser multi threaded hai 
//wh apne ek thread pe us program ko run krta rhta hai

//sybchronus code ka matlab jo program line by line run ho
//asynchronous code ke matlab jo program line by line run na ho

//agar hum chahe to main thread ko block kr skte hai
//sbsse easy method hai blok krne ka using alert pop prompt jo sare bhi synchronous hote hai  
//while loop ka use krke bhi main thread ko bhi block kr skte hai
 

// const blockingBtn = document.querySelector('.blocking-btn')

// blockingBtn.addEventListener('click', () => {
//   const startTime = Date.now()
//   let currentTime = startTime

//   while (startTime + 4000 > currentTime) {
//     currentTime = Date.now()
//   }
// }) 

//jo data fetching hota hai wh main thread ko block nhi krta hai


const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  console.log(xhr);

  // xhr.responseType = 'json'
  

  xhr.addEventListener('load', () => {
                //json.parse se jo response aa rhi hai usko object mai convert krne ke liye likha hai
    // image.src = JSON.parse(xhr.response).message  
    console.log(xhr);
  })
                                                                                       //agr yha pe false krte hai iska matlb yh kh rha hai ki asynchrounours jo by defalyt hai use false kr do to ab data fetching bhi s
                                                                                       //synchronously hi hoga
     xhr.open('GET', 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000')
     xhr.send()
})

//jo data fetching upr ho rhi hai wh bhi asynchronously ho rha hai
//jb hum request bhej rhe hai fetch krne ke liye to javascript apna yh wala kam web api yani browser ko de rkha hai
//wh apna dusra kaam jr rha hai jb web api se data fetch ho gya wh phir call stack mai de diya tb jakr load event triggered hua aur xhr.response triggered hua

//ajax ka matlb hota hai synchronous javascript and XML 

//ajax na koi programing language hai nahi koi program hai yh ek tarika hai jisse ki hum asynchrounous programme likh skte hai

//ajax ka yh fayda hai ki bina page ko reload kiye data ko la skte hai aur use kr skte hau

// setTimeout(() => {
//   console.log('hiii');
// }, 4000)


