/* Создайте функцию, которая принимает массив объектов, таких как
{name: "John", notes: [3, 5, 4]} и возвращает массив объектов,
таких как {name: "John", topNote: 5}. Если у студента нет заметок
(пустой массив), то давайте предположим topNote: 0. */


function getStudentsWithNamesAndTopNotes(arr) {
	
}

getStudentsWithNamesAndTopNotes([
	{ "name": "John", "notes": [3, 5, 4] },
	{ "name": "Max", "notes": [1, 4, 6] },
	{ "name": "Zygmund", "notes": [1, 2, 3] }
]);
/* [
	{ "name": "John", "topNote": 5 },
	{ "name": "Max", "topNote": 6 },
	{ "name": "Zygmund", "topNote": 3 }
] */
