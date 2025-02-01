const user = {
    firstName: 'Anurag',
    lastName: 'Singh',
    age: 25,
    address: {
      city: 'Delhi'
    },
    getfullName: function(){
        return user.firstName + user.lastName
    }
}
//to avoid that error
if(user.address)
{
    console.log(user.address.city);
}
//another way to do the same thing
console.log(user.address && user.address.city);
const a ='city'
//optional chaining
//same intention as above
//optoinal chaining yh btata hai ki aage ki value nhi hai to aage nhi badhna hai
console.log(user?.address?.city)
console.log(user.address?.[a])

console.log(user.getfullName()); //kyuki yh object ke andr ka function hai to call krna padega

console.log(user.getfullName?.());