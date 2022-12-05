/* Напишите функцию JavaScript, которая принимает строку
в качестве параметра и преобразует первую букву каждого
слова строки в верхний регистр. */

function uppercaseEachWord(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0 && str[i] !== ' ' || str[i] !== ' ' && str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

uppercaseEachWord("the quick brown fox"); // The Quick Brown Fox
