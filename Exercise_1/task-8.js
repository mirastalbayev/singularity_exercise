/* Напишите функцию JavaScript, чтобы получить
количество вхождений каждой буквы в указанной строке. */

function charCounts(a) {
    let obj = {};
    let spl = a.split("");

    for (const i of spl) {
        if (i === " ") {
            continue;
        }

        if (i in obj) {
            obj[i]++;
        } else {
            obj[i] = 1;
        }
    }
    
    return obj;
}

charCounts("The quick brown fox jumps over the lazy dog"); // {"t":1,"h":2,"e":3,"q":1,"u":2,"i":1,"c":1,"k":1,"b":1,"r":2,"o":4,"w":1,"n":1,"f":1,"x":1,"j":1,"m":1,"p":1,"s":1,"v":1,"t":1,"l":1,"a":1,"z":1,"y":1,"d":1,"g":1}
