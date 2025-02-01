// for exponential 2 ** 6=64 2 the power 6

//properties mai () nhi lgta aur methods mai () lgta hai

Math.floor(2.4)  //pure decimal part hta dega number line ka left wala par

//2.9999999999999999999999999 javascript mai automatially 3 mai convert ho jata hai
console.log(Math.floor(2.9999999999999999999999)); //iska output 3 aayega kyuki of the above reason

Math.ceil(2.2) //3
Math.ceil(-2.2) //right side on the number line -2
Math.round(2.5) //agr .5 se jada ya brabar right sidi na to left side on the number line

// bhut jada useful concept in javascript Math.object ka Math.random()
// Math.random() ek value deta hai 0 aur 1 ke bich mai 0 de skta hai pr 1 khi nhi dega

Math.random()

Math.random() * 20 // yha pe values 0 aur 20 ke bich hogi hogi kbhi bhi 20 ko execed nhi kr skti [0..0.99990] * 20

Math.floor(Math.random() * 21)

//Infinity ek keyword hai javascript mai aur iska type of hota hai number 
// aur jbb aata hai jb hum  divide krte hai 0 se . -infinity bhi aa skti hai jo hum negative number
// ko divide kre -infinity se

// jb 0 ko divide kr doge 0 se to aayega not a number(NaN)

const breadth=+prompt('please Enter a Rectange width');//+ lgakr aate hue string ko number mai convert kr rhe hai
const length =+prompt("please enter the length of Rectangle");

// prompt number accept to kregi pr return kregi string mai pr hum string ko multiply 
// krenge using * to javascript kr degi kyuki operator ka sign dekh kr khud b khud convert kr degi string ko number mai
// pr yh achhi practice nhi hai

// +width * +lenght + sign number mai convert kr hi hai

console.log(width * height);
document.write(`Rectange Area: ${width * height}`);
// = oprerator ko assignment operator khte hai