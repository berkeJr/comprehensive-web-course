// 90.Operatörler ve Math Objesinin Metotları:

let value;

const value1 = 10;
const value2 = 4;

//Aritmetik Operatörler

value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2; // 10'un 4'e bölümünden kalan


// Math object: js'deki math objesi, içinde bir çok matematik fonksiyonu ve özelliği barındıran bir objedir.


/*   Math Object at JS, some functions:

- Math.PI;
- Math.E;
- Math.round(4.6);
- Math.ceil(3.2);
- Math.floor(3.7);
- Math.sqrt(16);
- Math.abs(-10);
- Math.pow(5, 3);
- Math.max(7, 2, 57, -15);
- Math.min(7, 2, 57, -15);
- Math.random();

*/


value = Math.PI; // pi sayısını verir
value = Math.E; // logaritma E sayısını verir.
value = Math.round(4.6); // sayıları yuavarlamaya yarar, yukarı yuvarlar
value = Math.round(4.5); // sayıları yuavarlamaya yarar, yukarı yuvarlar
value = Math.round(4.4); // sayıları yuavarlamaya yarar, aşağı yuvarlar
value = Math.ceil(3.2); // bütün ondalıklı sayıları yukarı yuvarlar
value = Math.floor(3.7); // bütün ondalıklı sayıları aşağı yuvarlar
value = Math.sqrt(16); // sayıların karekökünü almaya yarar    =>   4
value = Math.abs(-10); // sayıların mutlak değerini almaya yarar   =>   10
value = Math.pow(5, 3); // üslü sayılar  =>   5 in 3. kuvveti = 5 * 5 * 5 = 125
value = Math.max(10, -1, 100, 32); // maximum sayıyı bulur
value = Math.min(10, -1, 100, 32); // minimum sayıyı bulur
value = Math.random(); // 0 ile 1 arasında bir değer üretir.
value = Math.random() * 20; // 0 ile 20 arasında bir değer üretir.
value = Math.random() * 20 + 1; // 1 ile 21 arasında bir değer üretir.
value = Math.floor(Math.random() * 20 + 1); // 1 ile 21 arasında tamsayı bir değer üretir.

console.log(value);

