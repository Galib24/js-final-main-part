const student = {
    name: 'galib',
    age: 43,
    movies: ['king khan', 'abul khan']
}
const studentJSON = JSON.stringify(student);

// console.log(student);
// console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
// console.log(studentObject) 

// for
const numbers = [23, 54, 67, 87,23,78]
// numbers.forEach(num => console.log(num));
numbers.map(num => num *2); //with operation

// for of on array like object
// for in using object

const products = [
    {name:'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name:'phone', price: 7000, brand:'Iphone', color:'golden'},
    {name:'watch', price: 3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price: 3200, brand:'G-shock', color:'black'},
    {name:'camera', price: 9000, brand:'canon', color:'gray'},
];

const newProduct = {name: 'webcam',price:700, brand: 'lal'};

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p=>p.name !== 'phone');
console.log(remaining)