console.log(this); //reffering to window 

const user = {
    firstName: 'Anurag',
    lastName: 'singh',
    tags: ['a','b','c'],
//     fullName(){
//     //    console.log(this); //yha pe this is object ko reffer kr rha hoga.. 
       
//     //    return `${this.firstName} ${this.lastName}`;

//     fullName(){
//         function getAge(){
//             console.log('Getting Age');
//             console.log(this) //reffering to window 
//             //ek edge case hota hai age function ke andr ek dusra function defined hota hai us case
//             //mai window point krne lagta hai this keyword.
//         }
//     } 
//     getAge()
//    }

    //  printTags(){
    //     console.log(this.tags);
    //     this.tags.forEach(element => {
    //         console.log(element);
    //         //yha pe hum bta skte hai this kisko define kre..
    //     }, this)
    //  },

  printTags1(){
    console.log(this) //yha pe user object ko point kr rha hai
  },

 printTags: () =>{
    console.log(this) //yha pe global window ko point krega kyuki  this ki binding arrow function ke sath nhi hoti..
 }


}

//normal function mai this window ko point krta hai..
//jb hum new lga kr function ko call krte hai to us function ke name labeled se ek object ko return krta hai
//aur yha pe this is object ko point krta hai.
function hii(){

    console.log(this); //pointing to window
    this.hello = 'world'
}

//addEvent listener lga hua ho aur agr this ka use kr to this yha pe us element 
//ko point kr rha hoga jispe addEvent listener laga ho..

const body = document.querySelector('body')

body.addEventListener('click', function(e){
    console.log(e.target);
    console.log(this);
})

//arrow function as a method use nhi krna hai..
//arrow function ki binding this se nhi hoti hai

class user1{
    constructor(){
        console.log(this); //yha pe this user1 ko point krta hai
    }
    getUser() {
        console.log(this);
    }
}