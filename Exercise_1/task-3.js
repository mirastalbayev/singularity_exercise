/* Написать функцию JavaScript, которая проверяет,
является ли переданная строка палиндромом или нет? */

function isPalindrome(str) {
    let lower = str.toLowerCase();
    
    for (let i = 0, j = lower.length - 1; i < j; i++, j--) {
        if (lower[i] !== lower[j]) {
            return false;
        }
    }
    return true;
}

isPalindrome("loki"); // false
isPalindrome("aba"); // true
isPalindrome("abab"); // false
isPalindrome("Qazaq"); // true
