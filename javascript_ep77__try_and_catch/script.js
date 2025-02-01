//try ke andr wh code likhna hota hai jo ki run krwana hota hai

//agr bina try likhe console.log kiya hota to error aata aur baki ke niche likhe huae code run nhi hote

//pr kyuki humne try ke andr likha hai to jo error aayega wh catch ho jayega aur slow ho jayega 
//aur baki ke likhe huae code bhi run honge..

const user = {
    name: 'Anurag',
    age: 34,

}

console.log(user.address);//yha pe error nhi aayega yha pe  output aa jayegi undefined
console.log(user.address.city); //ya pe error aayegi cannot read properties of undefined 



try{
    console.log(a)
} catch(err){
    //error handle ho gya hai
    console.dir(err.message)
    //.dir krne se objet print hoga jisme ek message propery hogi aur ek stack property
    //stack property yh batata hai ki code kis line se error de rha hai..
} finally{
    console.log('Hello world')
}
//finally yh hota hai ki chahe catch run hua ho ya try finally to run hoga hi..

console.log(3+7)
console.log('hello');

//try catch jada asynchronus programming mai use hota hai..

async function makeAsyncRequest() {
    try {
      const url =
        'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }