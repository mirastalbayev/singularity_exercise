/* Напишите функцию JavaScript, которая вызывается
3 раза с числами, кратными 2 наименьшим */

function multiply2Min(a) {
    return function(b) {
        return function(c) {
            if (a % 2 === 0) {
                return a;
            } else if (b % 2 === 0) {
                return b;
            } else if (c % 2 === 0) {
                return c;
            }
        }
    }
}

multiply2Min(1)(2)(3); // 2
multiply2Min(4)(4)(1); // 4
multiply2Min(3)(0)(5); // 0
// поменял название функции multiply2Max на multiply2Min!
