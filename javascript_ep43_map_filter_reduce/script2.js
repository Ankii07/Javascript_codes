const nums = [1,1,1,1,1,1]

//reduce ka kaam hota hai array mai jitne bhi elements hote hai utne saare elements
//ko reduce krke ek mai krna .

nums.reduce((accumulator, currentElement,index)=>{
    // console.log(index,current);
    console.log(accumulator);
    return 8;
},10)
//yha pe first time accumulator ne liya 10 jo ki initial value hai phir uske baad accumulator 8 dene laga because of return kr rha hai 8

//map forEach aour filter mai saare methods mai phla jo argument hota hai 
//wh hota hai element dusra hota hai index aur tessra hota hai given array

//yha pe jo number likha hua hai usko bolte hai initial value 
//agr initial value na ho to index 1 se start hoga agr hai to initial value 0 se start hoga

nums.reduce((accumulator, currentElement,index)=>{
    // console.log(index,current);
    console.log(accumulator);
    return accumulator + currentElement;
},10)

//accumulator ki value wh hoti rhegi jo return hota rha hai