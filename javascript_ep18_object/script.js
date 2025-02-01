//total sirf 8 parameter hote hai bas 7 primitive aur 1 non primitive jo ki hota hai object

//const username={} //empty object

// const user1 = {
    //     firstName: 'Adarsh',
    //     'last-Name': 'Singh',
    //     Anurag: 'Developer'
    // }


    // const user2 = {
        //     firstName: 'Adarsh',
            //is key last-name ko bina string ke nhi likh skte hai string mai hi is key ko
            //define krenge aur isko .notaion se nhi access kr skte bracket notation hi use krna pdega acess krne ke liye
        //     'last-Name': 'Singh',
        //     Anurag: 'Developer'
        // }

//yha pe dono object ke pass sari same values hai pr dono differently treat hogi javascript ke dwara
//aur dono different addresses pe store hogi 

//yha pe user1 === user2 false hoga kyuki yha pe same objects ki values hai pr dono different address mai store hui hai
//aur complexity ko km rkhne ke liye non-primitive datatype mai === address compare krta hai jo ki different h isiliye reference variable bhi khte hai

// object ki jp keys hoti hai wh behind the scenes keys hoti hai

//object mai koi value declared nhi hai aur app use acess kroge using dot notation ya bracket notaion se to undefine aayegi








const myName = 'Anurag'

const username1 = ''
const username2 = ''

const user1 = {
    firstName: 'Akash'
}


// const user2 = {
//     firstName: 'Adarsh',
//     'last-Name': 'Singh',
//     Anurag: 'Developer'
// }

// console.log(user2.firstName); //it is called dot notation
// console.log(user2["last-Name"]); //it is called bracket notation
// console.log(user2[myName]); //yha pe output undefined hogi
// console.log(user2["first" + "Name"]); //output aadarsh   //javascript ke expression bhi likh skte hai 

//agr koi value add krni ho object mai wh bhi ki jaa skti hai jaise ki
//  console.log(user2.age) //yhe pe error aaygi initialization ke phle use nhi kr skte

const user2 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    age: 26,
    pata: {
        city: 'Bangalore',
        pinCode: 876876,
        state: 'Karnataka',
        moreDetails: {
            population: 9798897897,
            area: '787 sq km',
        }
    }
}
console.log(user2);//output:-{
                           //   lastName: 'Singh',
                           //   pata: {
                           //       firstName: 'Adarsh',
                           //     city: 'Bangalore',
                           //     pinCode: 876876,
                           //     state: 'Karnataka',
                           //     moreDetails: { population: 9798897897, area: '787 sq km' }
                           //   }
                           // }

                           
console.log(user2.pata.city); //output banglore
// user2.age = 26
//user2.is-student = true se define nhi kr skte kyuki yha pe - use hua hai use krne ke liye bracket use krna hoga
// user2["is-student"] = true