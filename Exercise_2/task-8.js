/* Создайте функцию, которая принимает массив и возвращает массив накопленной суммы. */

function accumulatingArray(arr) {
    let newArr = [];
    let initialValue = 0;

    const accumulating = arr.reduce((accumulator, currentValue) => {
        return newArr.push(accumulator + currentValue, initialValue);
    });

    return newArr;
}

console.log(accumulatingArray([1, 2, 3, 4])); // [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulatingArray([1, 5, 7])); // [1, 6, 13]
// console.log(accumulatingArray([1, 0, 1, 0, 1])); // [1, 1, 2, 2, 3]
// console.log(accumulatingArray([])); // []

// arr[i] + newArray[i-1]
