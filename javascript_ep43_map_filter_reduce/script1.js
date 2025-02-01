const months1 =['January', 'February', 'March', 'April','May'];
//for each initialization se phle use nhi krte yha pe hoisting kaam nhi krta

months.forEach((months,index)=> {
    console.log(months,index);
    return months.toUpperCase(); //return value will be undefined only
})
//foreach khuch bhi return nhi krta hai undefined ilawa chahe jo krlo
let months =['January', 'February', 'March', 'April','May'];
const arr = months.map((months,index,givenarray)=> {
    console.log(index, months,givenarray );
    return months.toUpperCase();
})
//map humare original array pe koi change nhi krta hai ..yh ek naya array create krke deta hai
//aise function ko bolte hai non-destructive method
console.log(arr); //[ 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY' ]

//map return krta hai jo ki function se return kiya jata hai 
//yha pe is function mai print kiya jaa rha hai khuch bhi return nhi kiya jaa rha hai to undefined return hoga
//yha pe ek array return hogi jo 5 undefined contain kregi
//[ undefined, undefined, undefined, undefined, undefined ]

const fitleredMonths = months.filter((months,index,givenarray)=> {
    console.log(index, months,givenarray );
    return months.toUpperCase();
})
//filter ka returned values alter nhi hoga wh whi given array return kr dega 
//filter yaa to pura array return krega ya khuch given subpart
//[ 'January', 'February', 'March', 'April', 'May' ]

//filteredMonths == months
//dekhne mai dono same hi lg rhe hai dono same jaise array hi de rhe hai
// pr dono alag alag address pe store hai to false aayega return mai..

//agr filter mai return value true rkhe yaa truthy value rkhe to sari values return krega
//aur agr false yaa falsy values rkhe to koi bhi values return nhi krega..
let months2 =['January', 'February', 'March', 'April','May'];
const fitleredMonths1 = months2.filter((months,index,givenarray)=> {
    console.log(months);
    return months.length <= 5;
})
//yha pe yh function wh elements ko return kr dega jha jha pe condition true hogi..
console.log(fitleredMonths1)
// yha pe yh output hogi [ 'March', 'April', 'May' ]

//question aapko aise months filterout krna hai months jisme m aa rha ho


let months3 =['January', 'February', 'March', 'April','May'];
const fitleredMonths2 = months3.map((months,index,givenarray)=> {
    console.log(months);
    return months.toLowerCase().includes('m');
})

console.log(fitleredMonths2)

//is pure upr wale code ka output hoga //output [ false, false, true, false, true ]
//map filtered element nhi balki result deta hai

function m(months){
    for(let i =0; i<months.length; i++){
        if(months[i]=='M'|| months[i]=='m')
        return true;
    }
    return false;
};
let months4 =['January', 'February', 'March', 'April','May'];
const fitleredMonths3 = months4.filter((months,index,givenarray)=> {
    console.log(months);
    return m(months);
})

console.log(fitleredMonths3)

//yha pe out hoga yh [ 'March', 'May' ] filter filtered element dega result nhi dega

let months5 =['January', 'February', 'March', 'April','May'];
const fitleredMonths4 = months4.filter((months,index,givenarray)=> {
    console.log(months);
    return index>3;
})

console.log(fitleredMonths4)

const students = [
    {
        name: "Ankit",
        age: 23,
    },
    
    {
        name: "Mamta",
        age: 17
    },

    {
        name: "Sujeet",
        age: 19
    },

    {
        name: "Raman",
        age: 30
    },

    {
        name: "Nidhi",
        age: 16
    },

     
]

//filter out objects jiska bhi age 18 aur 18 se above hai

const filteredElements = students.filter((stu) => {
    return stu.age>=18;
}).map((students) => {
    return students.name
}).filter((students=>{
    return students.includes('m');
}))
//itna pura ek nya array bn gya hai to ise ek array ki trah treat kiya ja skta hai to ispe ab .map krke use kr skte hai
console.log(filteredElements); //yha pe output hoga [ 'Ankit', 'Sujeet', 'Raman' ] agr sirf filtered use kiya to hr ek element jo function satisfy kr rha hai jo ki ek object hai wh aata

const filteredElementsName = filteredElements.map((student)=>{

})
//agr upr wale function mai khuch nhi likhte ho to sirf undefined undefined undefined  3 baar likh kr aa jayega kyuki 3 hi elements hai

