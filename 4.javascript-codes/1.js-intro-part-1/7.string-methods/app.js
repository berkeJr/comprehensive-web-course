let value;

const firstName = "Louis";
const lastName = "Armstrong";
const languages = "Java,Python,C++";


value = firstName + lastName;
value = firstName + " " + lastName;

value = "Mustafa Murat ";
value = value + "Coşkun";

value = firstName.length; //firstName değişkeninin tuttuğu string içerisinde kaç tane karakter olduğunu bulma.

value = firstName.concat(" ", lastName, " Caz");  // firstName'e string eklemek için concat() fonksiyonunu kullanırız.

value = firstName.toLowerCase();  //string içerisindeki bütün harfleri küçült

value = firstName.toUpperCase();  //string içerisindeki bütün harfleri büyüt.

value = firstName[0];  //0. index'te hangi karakter varsa onu getir
value = firstName[2];  //2. index'te hangi karakter varsa onu getir
value = firstName[3];  //3. index'te hangi karakter varsa onu getir
value = firstName[firstName.length - 1];  //son index'te hangi karakter varsa onu getir

value=firstName.indexOf("L");  //L karakteri kaçıncı index'te

value=firstName.charAt(0); //0.indexte hangi karakter var
value=firstName.charAt(firstName.length - 1); //son indexte hangi karakter var


//Split
value = languages.split(",");  // languages değişkeninin tuttuğu bütün elemanları virgül ile ayırıp bir array içerisinde bize göster

//Replace
value = languages.replace("Python","C#");  // Python elemanını C# elemanı ile değiştir

//Includes
value = languages.includes("Java"); // eğer Java elamanı languages'ta varsa bize true dönecek yoksa false dönecek


console.log(value);