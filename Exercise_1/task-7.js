/* Напишите функцию JavaScript для извлечения
уникальных символов из строки. */

function uniqueChar(text) {
    let unique = new Set(text);
    return [...unique].join("");
}

uniqueChar("thequickbrownfoxjumpsoverthelazydog"); // thequickbrownfxjmpsvlazydg
