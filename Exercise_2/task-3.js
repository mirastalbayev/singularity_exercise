/* Создайте функцию, которая принимает параметр n и возвращает такую функцию,
чтобы при вызове n раз она возвращала строку "edabit". */

function lambdaDepth(n) {
    return function() {
        
    }
}

lambdaDepth(0) // "edabit"

lambdaDepth(1)() // "edabit"

lambdaDepth(2)()() // "edabit"

typeof lambdaDepth(2)() // "function"
