// const pawn1 = {
//     piece: "pawn",
//     color: "white",
//     x: 2,
//     y: 1,
//     remove: function () {},
// };

// const pawn2 = {
//     piece: "pawn",
//     color: "black",
//     x: 3,
//     y: 2,
//     remove: function () {
//         if (this.color !== pawn1.color) {
//             if (this.y === pawn1.y + 1) {
//                 if (this.x === pawn1.x + 1 || this.x === pawn1.x - 1) {
//                     this.x = pawn1.x;
//                     this.y = pawn1.y;
//                     pawn1.x = null;
//                     pawn1.y = null;
//                 }
//             }
//         }
//     },
// };

// pawn2.remove();

// console.log("pawn1: ", pawn1);
// console.log("pawn2: ", pawn2);


// function calcArea() {
//     console.log(this);
//     return this.length * this.length;
// }

// function calcPerimeter() {
//     console.log(this);
//     return 4 * this.length;
// }

// function newSquare(sideLength) {
//     return {
//     length: sideLength,
//     area: calcArea,
//     perimeter: calcPerimeter,
//     };
// }

// const square = newSquare(4);
// console.log(square.area());
// console.log(square.perimeter());

// function redundant() {
//     return 
// }

// const f1 = redundant("apple")
// console.log(f1());

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// function makePlusFunction(var1) {
//     return function (var2) {
//         return var1 + var2;
//     };
// }

// const plusFive = makePlusFunction(5);
// console.log(plusFive(2)); // 7
// console.log(plusFive(-8)); // -3

// const plusTen = makePlusFunction(10);
// console.log(plusTen(0)); // 10
// console.log(plusTen(188)); // 198
// console.log(plusFive(plusTen(0))); // 15\

// // 1, 1, 2, 3, 5, 8,
// function genFibonaci(a) {
//     return function() {

//     };
// }

// const fib = genFibonaci();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8

// function genFibonaci() {
//     let a = 0;
//     let b = 1;
//     return function () {
//         [a, b] = [b, a + b];
//         return b;
//     };
// }

// const fib = genFibonaci();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8

// function print() {
//     console.log(this.value);
//     return this;
// }

// function add(num) {
//     this.value.push(num);
//     return this;
// }

// function remove(ind) {
//     this.value.splice(ind, 1);
//     return this;
// }

// function update(ind, num) {
//     this.value[ind] = num;
//     return this;
// }

// function numbers(arr) {
//     return {
//         value: arr,
//         print,
//         add,
//         remove,
//         update,
// };
// }

// numbers([1, 2, 3])
//     .print() // [1, 2, 3]
//     .add(9)
//     .print() // [1, 2, 3, 9]
//     .remove(2)
//     .print() // [1, 2, 9]
//     .update(1, 3)
//     .print(); // [1, 3, 9]


// function Car(speed, brand) {
//     this.speed = speed;
//     this.brand = brand;
    
//     this.accelerate = function (a) {
//         let test = this.speed;
//         return a + test;
//     }

//     this.brake = function () {
//         return this.speed - 1;
//     }
    
//     this.status = function () {
//         return this.brand + " running at " + this.speed + " km/h";
//     };
// }

// let car = new Car(0, "Lada");

// car.accelerate(20);
// console.log(car.status());

// function fetchPokemon(name) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
// }

// async function getPokemon() {
//     try {
//         const promisePickachu = fetchPokemon("pikachu");
//         const promiseCharmander = fetchPokemon("charmander");
        
//         const resPickachu = await promisePickachu;
//         const resCharmander = await promiseCharmander;
    
//         // const [resPickachu, resCharmander] = await Promise.all([
//         //     fetchPokemon("pikachu"),
//         //     fetchPokemon("charmander")
//         // ]);
    
//         // const jsonPickachu = await resPickachu.json();
//         // const jsonCharmander = await resCharmander.json();
    
//         // console.log("jsonPickachu", jsonPickachu);
//         // console.log("jsonChermander", jsonCharmander);
//     } catch (e) {
//         console.error("err", e);
//     }
// }

// getPokemon();

// promise
//     .then((mes) => {
//         console.log("mes", mes);
//         return mes - 1;
//     })
//     .then((mes2) => {
//         console.log("mes2", mes2);
//         return mes2 - 1;
//     })
//     .finally(() => {
//         console.log("Finally!");
//     })
//     .catch((err) => {
//         console.log("err1", err);
//         return Promise.reject(new Error("from catch1"));
//     })
//     .catch((err2) => {
//         console.log("err2", err2);
//         return 0;
//     })
//     .then((mes3) => {
//         console.log("mes3", mes3);
//     });

// async function callAsync() {

// }

// callAsync()

function invert(obj) {
    const result = {};
    
    Object.entries(obj).forEach(([key, value]) => {
        result[value] = key;
    });

    return result;
}

console.log(invert({ a: 1, b: 2 }));