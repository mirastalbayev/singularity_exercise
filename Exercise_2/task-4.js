/* Создайте функцию с помощью currying, которая добавит название модели автомобиля
в качестве свойства к объекту хранения cars, если у него его нет. Затем попросите
функцию сложить число, которое мы передаем при вызове функции curried. */

// Your code

const toyotaAdder = carsStorage.addModel("Toyota");
const fordAdder = carsStorage.addModel("Ford");

toyotaAdder(4);
toyotaAdder(3);

fordAdder(1);
fordAdder(5);

console.log(carsStorage.Toyota); // 7
console.log(carsStorage.Ford); // 6
console.log(carsStorage.Tesla); // undefined

const teslaAdder = carsStorage.addModel("Tesla");

teslaAdder(9);

console.log(carsStorage.Tesla); // 9
