const numbers = [89, 35, 98, 12];
const student = {
    name: 'galib',
    age: 43,
    movies: ['king khan', 'abul khan']
}

// template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// arrow function
const getFiftyFive = () => 55;

const addSixtyFive = num => num + 65; // if paremeter use one then no need use ()
const isEven = x => x % 2 == 0;

// using multiple perameter
const addThree = (x, y, z) => x+y+z;
// multLine 
const doMath = (num1, num2)=>{
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];

numbers.push(99);
numbers.push(100);
numbers.push(200);
numbers.push(300);
numbers.push(400);



// create a new array from an older array and add an element
const currentNumbers =[...numbers, 800];
console.log(numbers)
console.log(newNumbers);
console.log(currentNumbers);