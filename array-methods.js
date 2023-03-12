const products = [
    {name:'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name:'Phone', price: 7000, brand:'Iphone', color:'golden'},
    {name:'watch', price: 3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price: 3200, brand:'G-shock', color:'black'},
    {name:'camera', price: 9000, brand:'canon', color:'gray'},
];

const  brands = products.map(product => product.brand)
// console.log(brands)

const name = products.map(n =>n.name)
// console.log(name)

// products.forEach(products => console.log(products.color))

products.forEach(products =>{

})
// filter
const cheap = products.filter(products => products.price <= 5000);
// console.log(cheap)

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName)

// find
const special = products.find(p => p.name.includes('n'));
console.log(special)