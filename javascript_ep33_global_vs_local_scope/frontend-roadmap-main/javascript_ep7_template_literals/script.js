// string indexed hota hai jo ki 0 se start hota hai

const message = 'hello'
const faltuMessage = " Hi, I am Ankit "
const lastFourDigit ='7856';
const maskedAccountNumber= lastFourDigit.padStart('16','*')
lastFourDigit.padEnd('16','*')

// trim method string ke aage piche se hta dega
faltuMessage.trim()
// chaining bhi kiya ja skta hai
const finalMessage= faltuMessage.trim().toLowerCase().toUpperCase;
//in console message[3] will give output 
// yh bus aage wale space ko trin krega
faltuMessage.trimStart()
// yh bus Piche wale space ko trin krega
// yh underscore ko remove nhi krega sirf space ko trim krega
// method ke braces mai jo value dalte hai use arguments khte hai
faltuMessage.trimEnd()
// methods in string
// to find length message.length

// specific word jo present as argumets mai include method ke wh persent hai
// ki nhi wh btayega include function
// include method case sensitive hota hai
faltuMessage.includes('ankit') //false , because of case senesitvity

faltuMessage[14]
// yh index dega of the first occurence of I
faltuMessage.indexOf('I') //yh bhi case sensitive hai
// agr aise element jo pesent hi na ho string mai to result nau -1 dega

console.log(message.length)
// console mai kisi ki bhi aage . lgake khuch bhi aur f dikahai de to 
// smajh jao method hai
// lenght ek property hai isme ( ) nhi lgate pr methods mai lagate hai

message.toUpperCase();

message.toLowerCase();

//jitna bhi string method  hai original string ko modify nhi krta nya result deta hai bus

// yh replace ke liye use hota hai\
// orginal chane nhi hoaga
// aise element ko replace krna chohoge jo persent hi nhi hai to kch nhi krega jo persent hi nhi uska kya hi ikrega
// yh sirf sbse phle mila hoga usi ko replace krta hai
// sbhi ko replace krne ke liye replaceall use krna hoga
faltuMessage.replace('HI','Hello');

faltuMessage.replaceall('a','A');

// concate do string ko jorne ke liye use hota hai
// yh to simple + seme bhi achieve ho skta hai
message.concat(faltuMessage);

message.concat(', a, ', faltuMessage,'zs')

//aage kitne start dene hai wh padstart method ka use krke kr skte hai

lastFourDigit.padStart(16,"*")

// charAt
'My name is Ankit'.charAt(3);

// charcodeAt
// ascii code deta hai
'My name is Ankit'.charcodeAt(3);

//split
//split ek string ko space ke base pe alag alag array ke element pr tod dete hai
'My name is Ankit'.split(' ');

//string template literals

// const templateString = `last four digit of my account number is` + lastFourDigit;

// const templateString = `last four digit of my account number is` .concat(' ',lastFourDigit);

const templateString = `last four digit of my account number is ${lastFourDigit.padStart(16,'*')}.` 
const bankBalance = 987;

const templateStringg = `I have $${bankBalance} in my account`