//higher order function

//function mai hun sirf string aur number hi pass nhi kr skte blki
//array, object yha tak ki function ke andr function bhi pass kr skte hai aur array object return bhi krwa skte hai

//jb bhi ek function mai yaa to ek function pass kiya gya ho ya ek function return kiya gya ho yaa pass aur return dono function hi kiya ho 
//to waise function ko higher order function khte hai



function a(b) {
    //console.dir() krne se kisi bhi object ko object ke form mai display krta hai console mai aur normal ko normally display kr dega
    console.dir(b);
    b()
}

a({
    userName: 'Ankit',
    age: "19"
})

//array bhi behind the scene object hi hota hai to typeof kisi bhi arry ja object hi dega

//function bhi behind the scene object hi hota hai pr iska type of function dikhata hai jo ki koi type nhi hota hai


//callback function
//pure function ko yhi define kr diya to naam dene ke jurrort nhi pdi
//yh aninymous function khlata hai

//jb bhi ek function ko call krte waqt jb us function mai as an argument ek function pass krte hai to usfunction ko
//jisko pass kiya gya hai us function ko khte hai callback function
//aur jis function mai kiya jaa rha hai use higher order function khte hai

a(function() {
    console.log('Hiiiiiiiiiiiiiiiiiii');
})

//jb bhi hum ek function create krte hai to wh wh function expect krta hai ki function hi pass ho aur khuch pass hoga jaise ki number,string to error dega..