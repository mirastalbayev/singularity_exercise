/* Создайте функцию, которая возвращает только строки с уникальными символами. */

filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) // ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) // []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) // ["ABCDE", "BED", "BAC"]
