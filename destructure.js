// array destructure 
const numbers = [43, 74, 90];

// const x = numbers[0];
// const y = numbers[1];
// const z = numbers[2];

// const [x, y,  z] = [43, 74, 90];

const [x, y, z] = numbers;
// console.log(x,y,z)

// boxify system 

function boxify(num1, num2){
    const num = [num1, num2];
    return num;
}
// const [first, second] =  [90,34];
const [first, second] =  boxify(90, 34);
// console.log(boxify(90, 34))

const student = {
    name: 'galib',
    age: 43,
    movies: ['king khan', 'abul khan']
}
const [firstMovie, SecondMovie] = products.movies;



const student2 = {
    name: 'galib',
    age: 43,
    movies: ['king khan', 'abul khan'],
    machine: 'AI',
    language: 'python',
    source: 'google',
    limitation: {
        bug: 'problem'
    }
}
const {language, machine} = student2.limitation;