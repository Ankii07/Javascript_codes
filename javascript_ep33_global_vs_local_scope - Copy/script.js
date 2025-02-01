const username = 'Anurag'
let userAge = 25
var a = 50

function add() {
  debugger
  const username = 'Akash'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username) //yha pe username akash hai due to local scope
}

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username) //yha pe username anurag hai due to script scope
}

add()
subtract()

console.log('Program Ended')

//agr kisi obeject ke andr koi waise property naa ho jo hum acess krne ki
//kosis kr rhe hai to waise case mai undefine aati hai

//global scope do category mai defined hota hai ek window object aur ek script object

//jb hum var ka use krke variable declare krte hai to wh variable window object mai jaat hai
//aur jb hum let aur const ka use krke declare krte hai to wh script scope mai jaata hai

//agr koi variable jo script scope mai defined hai ho wh aap use window.propertyName use krke nhi skte hai wh aapko undefine dega.

//const aur let se jo variable defined hote hai unhe memory creation phase ke baad usem undefined assign ho jata hai pr use access nhi kr skte 
//intialization ke phle kyuki un variable ko temporal dead zone mai daal diya jata hai jha se unhe access nhi kiya ja skta aise var ke saath nhi hota hai use access kiya ja skta hai

//window object mai jo jata hai use window.property name krke hi access kr skte hai pr script scope mai usse directly name se hi use kr skte hai

//variable humesa closet wale context ko leta hai to agr maan lo ko username phle script scope mai defined hai kisi aur naam se jaise ke anurag aur local scope mai aakash to wh aakash ko 
//apne context mai lega