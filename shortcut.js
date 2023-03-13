//  'almas', 5, true, {}, []

// '',0,false,null,undefine

// for check truth
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}else{
    myVar=0;
}

let myMoney =50;
// check negative or falsy anything
if(!myMoney){

}

// using normal METHOD
const money = 80;
let food;
if(money>100){
    food = 'kassi'
}else{
food = 'cha biscuit'
}

// ternary
let food1 = money>100 ? 'briany' : 'cha biscuit'
console.log(food1)

let drink = (money > 100 && myVar > 100 ? 'cooke' : 'water')
console.log(drink)

// shortcut number to string
const num1 = 52;
console.log(num1);
const myStr = num1 + '';
console.log(myStr)

// string to number
const input = '1234';
const inputNum = +input;
console.log(inputNum)

// using arrow function and ternery
const isActive = true;
const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// isActive && showUser();
isActive || hideUser();


// toggle boolean
isActive = !isActive;