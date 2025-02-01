//yh usually humare url ko represent krta hai humare
window.location

//windows mai jitne properties hote hai unhe directly use kr skte hai
location
//ek baar pura page ek baar reload krne ke liye   
location.reload()
//har 2 second pe reload hota rhega..
// setTimeout(()=>{
//     location.reload()
// },2000)

//kyuki window ek object ki trah hi behave kr rha hai to iske value ko set bhi kr skte hai
location.href="index.html"

//HISTORY PROPERTY OF WINDOW
history
history.length //kitni baar aage piche ja chuke hai

history.back() //piche chle jao

history.forward() //aage chle jao

history.go(-5) //current page se 5 page pichhe chle jao
history.go(2) //2 page aage

innerHeight //yh window ki height batata hai

innerWidth

outerHeight

outerHeight - innerHeight 

open('test')
                             //name      //property
open('https://youtube.com/','procodder','resizable')

//har ek tab apna alag se window object hota hai

//har ek window object ke andr name hota hai
window.name

//jo hume open. method use krke open kiya hai use close method se close kr skte hai
close()
//hum usi window ko resize kr skte hai jisko hume opne krke use kr rkha hoga aur resizable property set kr rakhi hogi
resizeTop(600,500)

moveTo(0,0);

scrollBy(0,50)

//ctrl+p se print se

//humare browser se interact krne ke liye with the help of javascript usi ko web api bolte hai 

//jo humara language hai sirf browser pe run nhi hoti balki browser ke bahar bhi run hoti hai yani server pe bhi

//

