

const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
const oddNumber = [1, 3, 5]

// evenNumbers.shift() //aage se sbse phle wale ko remove krta hai
//javascript ko mehnat jada krna pdta hai shift method ko operate krne mai as compare to pop kyuki shift mai remove krne ke
//indexing bhi thik krni hoti hai

//yh orginal array ko change krta hai

// evenNumbers.unshift(0)

//concat alag alag array ko add krne mai help krta hai 
//yh original array ko effect nhi krta hai balki new one create krta hai

const addedArray1 = evenNumbers.concat(animals)
const addedArray2 = animals.concat(evenNumbers, oddNumber)

//indexof ek particular character of array ka index btata hai
//agr ek particular element present na ho aur aap uska indexof kroge to result -1 aayega.
//yh case sensitive hoti hai

//includes btata hai ki searched element persent hai ki nhi
//yh  case sensitive hota hai
//yh sirf true ya false hi deta hai

evenNumbers.reverse() //yh array ko reverse kr deta hai

evenNumbers.sort(); //yh sort kr dega array ko pr yh string ki trah se sort krta hai agar 2 digit number hua to sirf 1 phle place ke digit se hi change kr dega


const elementIndex = animals.indexOf('Cat') //output 1
const isIncluded = animals.includes('dog') // false because of the case sensitivityn 

animals.slice(5) //output ['Cow', 'Tiger'] including 5 se uske aage jitne bhi hai sare ko array mai krke display kr dega
//yh original array ko change nhi krta hai
animals.slice(2, 5) //2 se lekr 5 tk ka element jisme 2 included aur 5wa element excluded hota hai

//splice bhi same hi kaam krta hai lekin differnce hai ki nya array deta to hai pr original array ko bhi change kr deta hai