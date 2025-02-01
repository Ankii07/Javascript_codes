function addTwoNumbers(a, b) {
    debugger
    
        return a + b
    }
    
    //agr function mai sirf return likh de pr kuch value return na kre to undefined hi return hoga

    //return se sirf string ya number hi return nhi kr skte blki array bhi return kr skte hai object bhi return kr skte hai
    //function ke andr se function bhi return kr skte hai

    // const result = addTwoNumbers(56, 6)
    // const result = addTwoNumbers(56+4-2, 6+22-3)
    debugger
    
    const result = addTwoNumbers(addTwoNumbers(2, 8), addTwoNumbers(2, 9)) //can be passed like this also
    

    // console.log(result);