/* Напишите функцию JavaScript,
которая возвращает свойства объекта JavaScript. */

const student = {
    id: 25,
    name: "David Rayy",
    class: 12,
};

function getProperties(obj) {
    console.log(Object.keys(obj));
}

getProperties(student); // ["id", "name", "class"]
