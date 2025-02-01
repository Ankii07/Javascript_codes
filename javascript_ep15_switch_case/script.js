
// go live jb krte hai jo 500 hota hai wh port number hota hai


//agr const mai vriable declare kiye ho pr uska use phle hi kr rhe code mai to error 
// pr agr variable var declare hua ho to error nhi dega

//agr switch case mai break statement naah laga ho to jaha se switch case 
//match kiya wha ke baad sare messages run ho jayenge

// cases ka order(matter nhi krta) ho jurrorri nhi aage piche bhi ho skta hai run tbhi krega jb match krega

//switch mai condition dete waqt braces lgao na lagao tumahari marzi hai pr juroori nhi hai

//switch case mai multicases true hai aur agr break lga hua ho to jo sbse phla case hai whi
//run hoga aur break ko read krne ke baad wh switch se bahar aa jayega

//false === null will give false

//switch case mai case ko run krne ke liye strictly match hona chahiye tbhi run kregi

// const username = 'Anurag'
// const userAge = 24

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// const dayNumber = 14

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//   default:
//     console.log('Please Enter a Valid Day Number')
// }

// debugger

// switch(true) {
//     case userAge >= 0 && userAge <= 4: //to use braces is optional not error
//         console.log(`${username} is a kid.`)
//         break
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${username} is a school student.`)
//         break
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${username} is a college student.`)
//         break
//     case true:
//         console.log(`${username} is a working professional.`)
//         break
//     case (userAge > 45 && userAge < 121):
//         console.log(`${username} is retired.`)
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

const grade = 'A'

debugger
switch (grade.toLocaleLowerCase()) {
  case 'a':
    console.log('Your score is between 85% to 100%.')
    break
  case 1:
    console.log('Your score is between 75% to 85%')
    break
  case 'c':
    console.log('Your score is between 60% to 75%')
    break
  case false:
    console.log('Your score is between 50% to 60%')
    break
  case 'e':
    console.log('Your score is between 30% to 50%')
    break
  default:
    console.log('Sorry, you failed.')
}

console.log('Program Ended!')