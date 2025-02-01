// koi bhi ek false statement hai to result false aa jayegi && ke condition mai

const userAge =25;

// alt + uparrow se puri line upr ho jayegi

// || or mai koi bhi ek true hai result true ho jayegi

// 1 && 2 output 2
// 0 && 2 output 0

// actual mai && and true aur false value nhi deta hai truthy aur falsy value deta hai

// javascript mai bs 5 hi values falsy hoti hai ('',undefined, NaN, 0,NULL) aur baki sari truthy hoti hai

// 0 && 2 yha pe javascript truthy aur falsy check kr rha hai aur kyuki 0 falsy value hai aur
// && operator aur 0 falsy value hai to aaage wh check mhi kr rha aur falsy value return kr de rha hai

// && and Or mai true aur false value return nhi krta hai wh truthy aur falsy value return krta hai jo us 
// us operator ke left ya right mai hota hai

// 0 || 2 output 2 yha pe truthy value return ho jayega jo ki hai hai 2

// boolean(0 && 2) false boolean(0) 

const andResult2 = '' && 'Hello' //output ''
const orResult2 = '' || 'Hello' //output hello

const andResult3 = 'Hello' && null //output null
const orResult3  = 'Hello' || null //output hello

const andResult4 = 'Hello' && 4+8 //12 && case mai javascript aage bdhega falsy ki talash mai
const orResult4 = 'Hello' || 4+8  // 'Hello' || case mai javascript aage bdhega hi nhi kyuki use to phle hi truthy value mil gyi aur aage khuch bhi kya hi farak padta hai

const andResult5 = 'Hello' && -4+4 //0 kyuki -4 + 4 =0 jo ki falsy value hai

// kitni bhi bri aur complex equation de doge wh lekr aa yega uski value aur phir compare krega

const orResult6=  undefined || 4+8 //12 ayega kyuki aage bdhega
const orResult7=  undefined || 4+8*4 //36

console.log('hello') //iske return(result) value undefined hoga

const andResult8 = 'Hello' && console.log('hello') //output undefined kyki console ka result hai undefined joo ki hai falsy value

// bitwise and  or bhi hota hai use pre to mdn pe pdh lena

//! operator complement kr deta hai 