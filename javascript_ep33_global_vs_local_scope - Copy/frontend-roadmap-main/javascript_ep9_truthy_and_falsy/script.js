// javascript koi bhi value true ho skti hai yaa false

// agr check krna hai ki value true hai yaa false boolean(value) se check kiya jata hai

//numbers hote hai sirf 0 aur NaNfalse hota hai bake positive negative sare true hote hai

Boolean(Infinity)//true
Boolean(-Infinity) //true
Boolean(0) //false
Boolean(NaN) //false

// empty string false hota hai aur bake sare string true hote hai
// '' aur ' ' isme dono mai antar hai phle wala empty string hai pr dusra nhi hai kyuki usmi ek character 
// hai jo ki hai space to yh true hai

Boolean('') //false
Boolean(undefined) //false
Boolean(null) //false

//aur bake sari value true hongi
// javascript mai -0 wali value bhi hoti hai
Boolean(-0) //false yh 0 ki trah hi treat ho rhi hai

// !0 complement using not operator
