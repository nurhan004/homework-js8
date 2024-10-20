//Homwork

//Метод some

// const items = [
//     {name: "Ноутбук", price: "900"},
//     {name: "Мышка", price: "100"},
//     {name: "Монитор", price: "300"},
//     {name: "Клавитура", price: "45"},
//     {name: "Наушники", price: "90"},
//     {name: "Смартфон", price: "270"},
//     {name: "Телевизор", price: "570"},
// ]
// const itemNames = items.some((item) => {
//     return item.price > 100
// })
// console.log(itemNames);


//2 Метод
// let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283]


// let greaterThan = numbers.some(function(num) {
//     return num > 1000
// }) 
// console.log(greaterThan);





//Метод every
// const items = [
//     {name: "Ноутбук", price: "900"},
//     {name: "Мышка", price: "100"},
//     {name: "Монитор", price: "300"},
//     {name: "Клавитура", price: "45"},
//     {name: "Наушники", price: "90"},
//     {name: "Смартфон", price: "270"},
//     {name: "Телевизор", price: "570"},
// ]
// const itemNames = items.every((item) => {
//     return item.price < 100
// })
// console.log(itemNames);

// 2 метод
// let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283]


// let greaterThan = numbers.every(function(num) {
//     return num > 17
// }) 
// console.log(greaterThan);




//метод inculdes

// const items = [ 100 , 222 , 387 , 1000 , 5 , 78]

// const itemNames = items.includes(222);
// console.log(itemNames);


// метод filter
// const items = [
//         {name: "Ноутбук", price: "900"},
//         {name: "Мышка", price: "100"},
//         {name: "Монитор", price: "300"},
//         {name: "Клавитура", price: "45"},
//         {name: "Наушники", price: "90"},
//         {name: "Смартфон", price: "270"},
//         {name: "Телевизор", price: "570"},
//     ]
//     const itemNames = items.filter((item) => {
//         return item.price < 900
//     })
//     console.log(itemNames);



// let array = [12, 5, 8, 130, 44, 100, 1000]

// let newArray = array.filter(function (elem) {
//     return elem >1000;
    
// });
// console.log(newArray);



















// push, pop, shift, insift, concat, slice.
// splice, filter, map, reduse, filnd, sort.

//push - 
// let arr = [1,2,3,4]


// console.log(arr);
// arr.push(5)

//pop
// let arr = [1,2,3,4]
// console.log(arr);

// let last = arr.pop()

// console.log(last);
// console.log(arr);



//shift

// let arr = [1,2,3]
// console.log(arr);

// let first = arr.shift()
// console.log(shift);
// console.log(arr);


//unshift
// let arr = [1,2,3]
// console.log(arr);

// let first = arr.unshift(0)
// console.log(shift);
// console.log(arr);


//concat





//slice

// let arr = [1,2,3,4,5,6,7,8,9]

// let slice = arr.slice(0,5)
// console.log(slice);

// let arr =[1,2,3,4]

//  arr.splice(5,6,7,8)

//  console.log(arr);







//homework

//1:задания
let array = [2, 5, 8, 11, 14, 17, 20];

let filteredArray = array.filter(num => num > 10);
console.log("Числа больше 10:", filteredArray);


// let array = [2, 5, 8, 11, 14, 17, 20,];


// let divisibleByFive = array.find(num => num % 5 === 0);

// console.log("Число, которое делится без остатка:", divisibleByFive);


//2:задания
// let fruits = ["apple", "banana", "orange", "kiwi"];


// let capitalizedFruits = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1));
// console.log("Фрукты с заглавной буквы:", capitalizedFruits);


// let fruits = ["apple", "banana", "orange", "kiwi"];

// let fruitsAsObjects = fruits.map(fruit => ({ Fruit: fruit }));
// console.log("Массив объектов:", fruitsAsObjects);




//3:задания

// let numbers = [1, 2, 3, 4, 5]; 


// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Сумма всех чисел:", sum);


// let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log("При умножении всех чисел:", product);
 
 
 




