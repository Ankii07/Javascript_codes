// //phle ek object bnaya XMLHttpRequest()
// const xhr = new XMLHttpRequest()
// //xhr2 mai jo response aayega uska type set json kiya jo ki object mai convert kr dega
// xhr.responseType = 'json'
// // ek event listener load function bnaya ki jb request load ho jaye to 
// //ek request setup kiya bhejne ke liye jiska kaam hai get krna data se specify kiya hua hai
// xhr.open('GET', 'https://dummyjson.com/users')
// //phir reqeust ko send krne ke .send se bhej diya
// xhr.send() //request ko bhejne ke send krna hota hai
// //jb tak .send nhi krenge to koi bhi request nhi jayegi
// xhr.addEventListener('load', () => {
//   console.log(xhr.response.users[0].id);
//   //dusre request ke liye phir se sbkhuch dubara krna hoga
//   //phle ek object bnaya XMLHttpRequest()
//   const xhr2 = new XMLHttpRequest()
//   //xhr2 mai jo response aayega uska type set json kiya jo ki object mai convert kr dega
//   xhr2.responseType = 'json'
// })


//dummy api website pe bhut se api mil jati hai


//agr sare upr wale cheez ko baar baar krna hai to yh bhut common hai ki ek 
//function bna lo aur sara khuch uske andr dal ka call krte rho jo ki hum niche kr rhe hai

function makeHttpRequest(method, url,callback) {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.addEventListener('load', () =>{
        callback(xhr.response)
    })
    xhr.open(method, url)
    xhr.send()
    
}

// makeHttpRequest('GET', "https://dummyjson.com/users",(data) =>{
//     console.log('data');
//     makeHttpRequest('GET','https://dummyjson.com/post/user/${data.users[0].id}',(data)=>{
//          console.log(data.posts[0].id);
//          makeHttpRequest('GET','https://dummyjson.com/comments/post/${data.posts[0].id}'),(data) =>{
//             console.log('data');
//          }
//     })
// })

//yha pe ek request ka data dusre request mai use ho rha hai isiliye ek ke andr ek krna pr rha hai
makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
        console.log(userData);
      });
    });
  });
})

//callback hell jab hoti hai jb hum request ke andr request krte jaye..\
//yh bilkul bhi readabale nhi hai 


//makeHttpRequest('GET', "https://dummyjson.com/users/1") //to get the first elment just add 1 in the rightmost side

//folder aur file wale jgh mai ek Timline krke ek cheez hai jo hume code mai kya kya change kr rkha hai uska track record rakhta hai
