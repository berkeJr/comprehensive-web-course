// 91.String Metodları


/*  JS, Some String Methods;

- length
- concat()
- toLowerCase()
- toUpperCase()
- indexOf()
- split()
- replace()
- includes()

*/


let value;

const firstName = "Louis";
const lastName = "Armstrong";
const languages = "Java, Python, C++";

value = firstName + lastName;  // LouisArmstrong
value = firstName + " " + lastName;  // Louis Armstrong

value = "Berke ";
value = value + "Sayın";

// length
value = firstName.length; // firstName değişkeninin tuttuğu string içerisinde kaç tane karakter olduğunu bulmak için kullanırız

// concat()
value = firstName.concat(" ", lastName, " Caz"); // firstName'e string eklemek için concat() fonksiyonunu kullanırız
// Louis Armstrong Caz

// toLowerCase()
value = firstName.toLowerCase(); // string içerisindeki bütün harfleri küçültmek için kullanırız

// toUpperCase()
value = firstName.toUpperCase(); //string içerisindeki bütün harfleri büyütmek için kullanırız

value = firstName[0]; // 0. index'te hangi karakter varsa onu getir
value = firstName[2]; // 2. index'te hangi karakter varsa onu getir
value = firstName[3]; // 3. index'te hangi karakter varsa onu getir
value = firstName[firstName.length - 1]; // son index'te hangi karakter varsa onu getir

// indexOf
value = firstName.indexOf("L"); // L karakteri kaçıncı index'te

// charAt()
value = firstName.charAt(0); // 0.indexte hangi karakter var
value = firstName.charAt(firstName.length - 1); // son indexte hangi karakter var

// Split
value = languages.split(","); // languages değişkeninin tuttuğu bütün elemanları virgül ile ayırıp bir array içerisinde bize göster

// Replace
value = languages.replace("Python", "C#"); // Python elemanını C# elemanı ile değiştir

// Includes
value = languages.includes("Java"); // eğer Java elamanı languages'ta varsa bize true dönecek yoksa false dönecek

console.log(value);
