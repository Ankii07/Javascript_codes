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
})
//itna pura ek nya array bn gya hai to ise ek array ki trah treat kiya ja skta hai to ispe ab .map krke use kr skte hai
console.log(filteredElements);