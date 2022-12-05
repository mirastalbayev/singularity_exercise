/* Напишите функцию JavaScript, которая будет принимать
массив сохраненных чисел и находить второе по величине
и второе по величине число соответственно. */

function minAndMax2(num2) {
    let minmax2 = num2.sort((a, b) => {
        return a - b;
    });
    
    return [minmax2[1], minmax2[minmax2.length - 2]];
}

minAndMax2([17, 5, 10, 2, 20, 12, 11, 16, 14, 9]); // [5, 17]
minAndMax2([6, 7, 16, 11, 12, 10, 9, 4, 1, 15]); // [4, 15]
