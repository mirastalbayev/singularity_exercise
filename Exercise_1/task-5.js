/* Напишите функцию JavaScript, которая будет принимать
массив сохраненных чисел и находить наименьшее и
наибольшее числа соответственно. */

function minAndMax(msv) {
    let minNum = msv[0];
    let maxNum = msv[0];

    for (let i = 1; i < msv.length; i++) {
        if (minNum > msv[i]) {
            minNum = msv[i];
        }

        if (maxNum < msv[i]) {
            maxNum = msv[i];
        }
    }

    return [minNum, maxNum];
}

minAndMax([17, 5, 10, 2, 20, 12, 11, 16, 14, 9]); // [2, 20]
minAndMax([6, 7, 16, 11, 12, 10, 9, 4, 1, 15]); // [1, 16]
