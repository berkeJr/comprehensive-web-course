// JS Spread Operator

// Bir array oluşturalım
const langs = ["Python", "C++", "Java", "JavaScript"];

// Array'i console'da yazdırma: 
console.log(langs);

// Array'deki elemanları yanyana yazdırmak:
console.log(langs[0], langs[1], langs[2], langs[3]);  // => it outputs: Python C++ Java JavaScript

// Biz Js Spread Operator'ümüz sayesinde bu işlemi daha da kısa yoldan yapaibiliriz. 
console.log(...langs);    // => it outputs: Python C++ Java JavaScript

// Yeni bir array oluşturalım ve de ilk array'deki değerleri de ona ekleyelim. 
const langs2 = ["Php", "C#", langs[0], langs[1], langs[2], langs[3]];

console.log(langs2);


const langs3 = ["C", "React", "Vue", "Angular", ...langs];   // langs array'indeki elemanları bu dizinin sonuna atar

console.log(langs3);

// Yani spread operatorü bizim işlemlerimizi biraz daha kısaltmak için kullandığımız operatörümüz. 


// Bir fonksiyon ile spred operatörü kullanımı.

const addNumbers = (a, b, c) => console.log(a + b + c);

// bir array oluşturalım
const numbers = [100, 200, 300];

// klasik yöntemle array'in elemanlarını parametre olarak verelim.
addNumbers(numbers[0], numbers[1], numbers[2]);


// Bir de spread operatörü kullanarak array'in elemanlarını parametre olarak verelim.
addNumbers(...numbers);