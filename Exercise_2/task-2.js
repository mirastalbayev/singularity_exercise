/* Напишите функцию, которая принимает строку, разбивает ее на части
и возвращает сначала гласные, а затем согласные. Для любого символа,
который не является гласным (например, специальные символы или пробелы),
относитесь к ним как к согласным. Гласные - это a, e, i, o, u. */

function split(str) {
    let vowels = "aeiouy";
    let newVowels = "";
    let consonants = "";
    let flag = false;
    // newVowels += consonants;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                newVowels += str[i];
                flag = true;
                break;
            } else {
                flag = false;
            }
        }

        if (flag === false) {
            consonants += str[i];
        }
    }

    let newStr = newVowels + consonants;

    return newStr;
}

// console.log(split("abcde")); // "aebcd"
// console.log(split("Hello!")); // "eoHll!"
console.log(split("What's the time?")); // "aeieWht's th tm?"
