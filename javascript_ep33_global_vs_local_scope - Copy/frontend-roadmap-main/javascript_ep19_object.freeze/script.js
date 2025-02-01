let username = 'Anurag'

const user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// agr user ko change krna chahe let say user ko empty object initialize krna chahe to error dega kyuki yh const
//se initialize hai abhi agr let se initialize hota to koi error nhi aata..
// user ={} //error Assignment to constant variable.
// Object.seal(user) //isko ek machine ki trah smajh skte ho ki object ko ek bakse mai dalkr seal kr diya hai
                    // nahi koi value add hogi nahi koi delete hogi ,object seal hai 
                    //lekin jo existing value hai usko change kr skte hai


Object.freeze(user) //yh existing value ko bhi change nhi krne dega

console.log('isGraduate' in user);

//javascript automatically jis bhi value ko use nhi kiya jata hai any more usko address nhi deta hai yani 
//uska address free kr deta hai 

//jo address hota hai wh actually value nhi hota hai variable ka blki address hota hai value ka aur is address ko variable ko de dete hai

//variable ka change krne ka mtlb yhi hota hai ki usme assign  address ki value ko change kr de rhe hai

delete user.firstName; //yh 99% case mai true hi value deta hai yh user se firstName key delete ho jayega