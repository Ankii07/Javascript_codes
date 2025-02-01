const fruits1 = ['banana','apple','Peach','mango','grapes'];

// for(const fruit of fruits){
//     console.log(fruit);
// }

//forEach ek method hai
//jitna array ka length hai utna hi array krega
fruits.forEach(function(element){
    console.log(element);
})

//yha pe forEach function ek higher order function hai
fruits.forEach((element) => {
    console.log(element);
})

//named function bhi pass kr skte hai

function abc(e){
    console.log(e);
}

fruits.forEach(abc);

//for each  ki return value humesa undefined hi hogi chahe khuch aur bhhi return kiya gya ho..

fruits.forEach(function abc(e){
    console.log(e);
    return e.toUpperCase()
});


//forEach humne defined thori kiya hai ki jisse ki hum usme se return value change kr ske
//forEach predefined hai jisme koi return value nhi hoga predefined isiliye humesa yha undefined hi aayega

const fruits = ['banana','apple','Peach','mango','grapes'];

const arr = fruits.map(function abc(e){
    console.log(e);
    return e.toUpperCase()
});

console.log(arr); //output [ 'BANANA', 'APPLE', 'PEACH', 'MANGO', 'GRAPES' ]

//yha pe ek array return hoga jo humari return value ko contain kregi