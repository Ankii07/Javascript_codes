const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-label')
let count = 0;

let length = inputFields.length;

const allquotes = [
   'Raise the bar by completing your goals!',
   'Well begun is half done!',
   'Just a step away, keep going!',
   'Whoa! You just completed all the goals, time for chill :D',
   'Whoa! You just completed all the goals, fourty four :D',

   
]
// console.log(checkBoxList);
// console.log("hii");
// const allGoalContainer = document.querySelector('.goal-container');
// console.log(allGoalContainer)

// function add1(){
//     console.log('clicked');
//     // 
//     allGoalContainer.forEach(container => {
//         container.classList.add('completed');
//     });
// }

// // The issue is that you are calling the add1 function immediately when setting up the event listener. 
// // In JavaScript, when you use addEventListener, you should pass a reference to the function, 
// // not call the function directly.

// checkBoxList.addEventListener('click',add1)

// const allGoals = {
//    first: {
//       name: 'Learns JS',
//       completed: false,
//    },

//    second: {
//       name: 'Learns JS',
//       completed: false,
//    },

//    third: {
//       name: 'Learns JS',
//       completed: false,
//    }
// }

// In JavaScript, JSON.parse() is used to convert a JSON string into a JavaScript object
const allGoals =JSON.parse(localStorage.getItem('allGoals')) || {
   first: {
      name:'',
      completed: false,
   },

   second: {
      name:'',
      completed: false,
   },

   third: {
      name:'',
      completed: false,
   },

   fourth: {
      name:'',
      completed: false,
   },
}

//object.values se hum object ko array mai convert krte hai..

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressValue.style.width =`${(completedGoalsCount /length) *100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${length} Completed `

//shortcut key for formatting shift+ alt+ F

checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        //yha pe .toggle .add se alg hai kyuki .add krne pe remove nhi kr skte pe 
        //pr jb .toggle krenge to dubara click krne pe remove ho jayega..

        //inputFields nodelist de rhi hai to ise array mai krenge tbhi jakr every method use 
        //kr skte hai isillye ... use krke inputFields ko array mai convert kr rhe hai..
        
        const allGoalsAdded = [...inputFields].every((input)=> {
                return input.value;
        })

        if(allGoalsAdded){
            checkbox.parentElement.classList.toggle('completed')
            // progressValue.style.width = '33.33%'

            const inputID = checkbox.nextElementSibling.id
            console.log(inputID)
            allGoals[inputID].completed = !allGoals[inputID].completed;
            let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
            progressValue.style.width =`${(completedGoalsCount /length) *100}%`
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${length} Completed `
            // localStorage.setItem('completedGoalsCount',completedGoalsCount)
            // if(localStorage.completedGoalsCount == 0){
            //    // localStorage.setItem('FirstGoal','Well begun is halfway done')
            //    document.querySelector('.progress-label').innerText ='Raise the bar'
            // }
            // else if(localStorage.completedGoalsCount == 1){
            //    // localStorage.setItem('FirstGoal','Well begun is halfway done')
            //    document.querySelector('.progress-label').innerText ='Well begun is halfway done'
            // }
            // else if(localStorage.completedGoalsCount==2){
            //    // localStorage.setItem('SecondGoal','Just a step away, Keep going!')
            //    document.querySelector('.progress-label').innerText ='Just a step away, Keep going!'

            // }
            // else if(localStorage.completedGoalsCount==3){
            //    localStorage.setItem('ThirdGoal','Whoa! You just completed all the goals, time for chill:')
            //    const text =localStorage.getItem('ThirdGoal')
            //    document.querySelector('.progress-label').innerText = text;

            // }

            progressLabel.innerText = allquotes[completedGoalsCount];
            localStorage.setItem('allGoals',JSON.stringify(allGoals))

            // count++;
            // if(count==1){
            //    progressValue.innerText ='1/3 completed';
            //    progressValue.style.backgroundColor =' #48A300'
            //    progressValue.style.width  = '33.3%';
            // }
             
            // if(count==2){
            //     progressValue.innerText ='2/3 completed';
            //     progressValue.style.width  = '66%';
            //  }

            //  if(count==3){
            //     progressValue.innerText ='3/3 completed';
            //     progressValue.style.width  = '100%';
            //  }
            //  if(count==4){
            //     progressValue.innerText ='2/3 completed';
            //     progressValue.style.width  = '66%';
            //  }
            //  if(count==5){
            //     progressValue.innerText ='1/3 completed';
            //     progressValue.style.width  = '33%';
            //  }
            //  if(count==6){
            //     progressValue.innerText ='';
            //     progressValue.style.width  = '0px';
            //  }
        }
        else{
            progressBar.classList.add('show-error');
        }
    })
})

            inputFields.forEach((input)=>{
               console.log(input);
               count++;
               console.log(count);

               if(allGoals[input.id].completed){
                input.parentElement.classList.toggle('completed')

               }

               console.log(count+'sd');
               
               // console.log(allGoals[input.id]);
               input.value = allGoals[input.id].name;
               input.addEventListener('focus',(e)=>{
                progressBar.classList.remove('show-error');
               });

               input.addEventListener('input', (e)=>{
                  //input ke jgh e.target.id bhi likh skte ho
                  //bracket method to set key value pair in object
                  if(allGoals[input.id].completed){
                     input.value= allGoals[input.id].name;
                      return;
                    }
 
                  allGoals[input.id] ={
                     name: input.value,
                     completed: false,
                  }
                  localStorage.setItem('allGoals',JSON.stringify(allGoals))
                 
              })

               // The shortcut for this action is:
               // In Visual Studio Code (VS Code), you can quickly duplicate a line of code and place the duplicate on the next line using a keyboard shortcut. 

               // Mac: Shift + Option + Down Arrow
               // Windows/Linux: Shift + Alt + Down Arrow
               
               // This will copy the current line and insert the copy directly below it. If you want to duplicate the line above instead, you can use:
               // Mac: Shift + Option + Up Arrow
               // Windows/Linux: Shift + Alt + Up Arrow
               
               // These shortcuts make it easy to duplicate lines of code without having to manually copy and paste.
               })
        