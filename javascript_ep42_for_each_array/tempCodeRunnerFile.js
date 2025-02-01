const fruits = ['banana','apple','Peach','mango','grapes'];

const arr = fruits.map(function abc(e){
    console.log(e);
    return e.toUpperCase()
});

console.log(arr);