// Destructing

/* Destructing aslında bizim array'lerimizin ya da object'lerimizin içinden değerlerimizi almak  için kullandığımız kısa bir yol 
 * ve bunu kullanarak bazı işlemlerimizi daha da kısaltabiliriz. */

// 4 adet değişken tanımlayalım. Değerlerini daha sonra verebiliriz.
let number1, number2, number3, number4; 

// 1 tane de array oluşturalım.
let arr = [100, 200, 300, 400];

// Array'in 0.indexdeki değerini number1'e, 1.index'teki değerini de number2'ye atayalım. 
// Klasik yöntem. (Şimdiye kadar kullandığımız yöntem)
number1 = arr[0];
number2 = arr[1];

console.log(number1, number2);   // =>  output: 100 200

// Biz burada daha kısa yöntem olarak destructing yapısını da kullanabiliriz. 
[number3, number4] = arr;  // = [100, 200, 300, 400]   
// Biz bu şekilde bir notasyon kullandığımız zaman number3 ilk olarak 0.index'e eşitleniyor. (100)
// Ve de number4'te 1.index'e eşitleniyor. (200)

console.log(number3, number4);   // =>  output: 100 200

// destructing ile bir diğer yöntem
// number5 ve number6'yı ilk defa tanımlayarak destructing ile kullanalım
const [number5, number6] = arr;  // = [100, 200, 300, 400]   
// Bu şekilde de kullanabiliriz.

console.log(number5, number6);   // =>  output: 100 200

// Yani biz eğer ki değişkenlerimizi array'lerden oluşturacaksak destructing yapısı ile daha kısa bir şekilde oluşturabiliriz. 

// numbers isimli bir obje oluşturalım

const numbers = {
    a: 10,
    b: 20,
    c: 30, 
    d: 40,
    e: 50
}; 

