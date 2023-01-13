/* Создайте функцию, которая возвращает только строки с уникальными символами. */

function filterUnique(arr) {
    
}

console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); // ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// console.log(filterUnique(["88", "999", "989", "9988", "9898"])); // []

// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); // ["ABCDE", "BED", "BAC"]

// бегать по ключам, использовать Set и [...]
