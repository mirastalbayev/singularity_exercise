// Создать казахский калькулятор

function calc(text) {
    let spl = text.split(" ");
    console.log("gde probel: " + spl);
    let res = 0;

    if (spl.length < 3) {
        return "qate";
    } else if (isNaN(Number(spl[0])) === true || isNaN(Number(spl[2])) === true) {
        return "qate";
    } else if (spl[1] === "alu") {
        res += Number(spl[0]) - Number(spl[2]);
    } else if (spl[1] === "qosu") {
        res += Number(spl[0]) + Number(spl[2]);
    } else if (spl[1] === "kobeitu") {
        res += Number(spl[0]) * Number(spl[2]);
    } else if (spl[1] === "bolu" && spl[2] !== "0") {
        res += Number(spl[0]) / Number(spl[2]);
    } else if (spl[1] === "bolu" && spl[2] === "0") {
        return "0-ge boluge bolmaidy";
    } else {
        return "qate";
    }

    return res;
}

console.log(calc("2 kobeitu 3"));

// Не проходит тест на "2 kobeitu ".