/* Создайте функцию, которая возвращает значения из массива, которые
фильтруются функцией. Не используйте Array.prototype.filter() */

filter([1, 2, 3, 4], (v) => v > 2) // [3, 4]
filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny")) // ["pony", "browny"]
filter([{age: 20}, {age: 30}, {age: 40}, {age: 50}], (v) => v === 20) // [20]
