/* Напишите класс с именем Name и создайте следующие атрибуты
с указанием имени и фамилии (как fname и lname).: 
    a. Атрибут с именем fullname, который возвращает имя и фамилию.
    b. Атрибут, называемый initials, который возвращает первые буквы имени и фамилии.

Не забудьте также разрешить доступ к атрибутам fname и lname по отдельности. */

a1 = new Name("john", "SMITH")
a1.firstName // ➞ "John"
a1.lastName // ➞ "Smith"
a1.fullName // ➞ "John Smith"
a1.initials // ➞ "J.S."

ch = new Name("cHaRlIe", "chaplIN")
ch.firstName // ➞ "Charlie"
ch.lastName // ➞ "Charlie"
ch.fullName // ➞ "Charlie Charlie"
ch.initials // ➞ "C.C."
