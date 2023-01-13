/* Создайте функцию, которая возвращает значения из массива, которые
фильтруются функцией. Не используйте Array.prototype.filter() */

function filter(arr, func) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// console.log(filter([1, 2, 3, 4], (v) => v > 2)); // [3, 4]
// console.log(filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny"))); // ["pony", "browny"]
console.log(filter([{age: 20}, {age: 30}, {age: 40}, {age: 50}], ({age}) => age === 20)); // [20]
