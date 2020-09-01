//Q1. Program to search for a particular character in a String
let A_string = 'i love india';
console.log(A_string.indexOf('l'));


// Q2. Program to convert minutes to seconds
let minutes = 60;
let seconds = minutes * 60;
console.log(seconds);

// Q3. program to search for a element in a array of Strings
let array1 = ['Asia','Africa','America'];
let element= 'Asia';
let b=array1.indexOf(element);
console.log(b);

// Q4. program to display only elements containing 'a' in them from an array
let arr = ['apple', 'big','car','bus'];

arr.forEach(function(ele){
    if( ele.includes('a')){
        console.log(ele);
    }
    });


// Q5. print an array in reverse order
let arra = ['apple', 'big','car','bus','grapes'];
arra=arra.reverse();
console.log(arra);
// another method to do this
let arra1 = ['apple', 'big','car','bus','grapes'];
let arra2=[]
for(let i=arra1.length-1;i>=0;i--){
    arra2.push(arra1[i]);
}
console.log(arra2);
