// Function Definition
                      //Parameters
                    //yha pe default parameters bhi de skte hai ho simply ek string daal do yha
function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');                   //default value:- 'Procodrr'
    console.log(`My name is ${username || 'Procodrr'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}

// //                  Function Call
const returnValue = introduceMe()
console.log(returnValue) //output undefined

//agr function mai khuch return naa krwa rhe ho use kr rhe ho to print kr rhe to undefined print hoaga

//jis type ka argument bhejenge parameter bhi whi type ka ho jayega
            //arguments
// introduceMe('Anurag', 'Software Engineer', 25)
// introduceMe('Akash', 'Mechanical Engineer', 27)