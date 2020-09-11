let Array=[
    student1={
       name:'Ram',
       age:31,
       country:'India',
       hobbies:['singing','reading books']
    },
    student2={
       name:'John',
       age:22,
       country:'canada',
       hobbies:['playing basketball','photography']
    },
    student3={
       name:'Maria',
       age:32,
       country:'Germany',
       hobbies:['singing', 'travelling']
    },
    student3={
       name:'Sarita',
       age:25,
       country:'India',
       hobbies:['singing', 'dancing']
    }
]
Array.forEach(element => {
    console.log(element);
});


// solution for question 4
Array.forEach(function(ele){
   
   if (ele.age<30){
      console.log(ele);
   }
})
Array.forEach(function(ele){
   
   if (ele.country=='India'){
      console.log(ele);
   }
})