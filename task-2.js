/* Напишите функцию JavaScript,
которая преобразует число в обратное. */

function reverse(num) {
    let transformation = String(num);
    let result = "";

    for (let i = transformation.length - 1; i >= 0; i--) {
        result += transformation[i];
    }
    
    return Number(result);
}

reverse(32234); // 43223
