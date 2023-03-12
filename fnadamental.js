// 1) how to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter'

// 2) condition
// 6 basic conditions >,<, ===, <=, >=
// multiple condition: && -> for ful fill satisfy || for satisfy anyone

if(fatherName === 'arnold' || season === 'rainy'){

}else if(fatherName === 'Arnold'){

}else{

}

// 3) array
//  index [0, 1, 2, 3, 4]
// array.length
// array.push
const numbers = [89, 35, 98, 12]
numbers[0] =56;

// 4) loop
for( let i = 0; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number);
}

// 5) function
 function multiPly(num1 , num2){
    const result = num1 * num2;
    return result;
 }
 const output = multiPly(2,4);
 console.log(number)

//  6) object 
//  3 ways to access property by name
const student = {
    name: 'galib',
    age: 43,
    movies: ['king khan', 'abul khan']
}
// 1) way
console.log(student.age)  // direct by property
// 2) way
console.log(student['age']) //access via string
// 3) way
const myVariable = 'age';
console.log(student[myVariable]) // by variables