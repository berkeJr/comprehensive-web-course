// 89.Veri Tiplerini Birbirine Dönüştürme:

/*

- Biz programlama, uygulama geliştirme sürecinde bazı yerlerde bazı veri tiplerini birbirine dönüştürmek isteyebiliriz. 
Örneğin bir sayıyı stringe ya da bir stringi sayıya dönüştürmek istiyor olabiliriz. 
Şimdi de farklı veri tiplerini birbirine dönüştürmeye bakalım.

*/ 


// let keyword'ü ile 4 farklı değşken tanımlayalım:
let value, value2, value3, value4;


// Eğer bir sayıyı string'e çevirmek istersek, o durumda String() foksiyonunu kullanabiliriz.   
value = 123;
console.log(value);  // 123
console.log(typeof value);  // number


// value değişkeni number bir değişkendi, şimdi onu stirng'e çevirelim:
value = String(123); 
console.log(value);  // 123
console.log(typeof value);  // string


// Bir boolean değeri de bir string ifadeye dönüştürebiliriz.
value2 = String(true);
console.log(value2);  // true
console.log(typeof value2);   // string


// Bir fonksiyonu da bir stringe çevirebiliriz.
value3 = String(function() 
    {
        console.log()
    }
);
console.log(value3);
console.log(typeof value3);  // string


// Bir array'i de bir stringe çevirebiliriz.
value4 = String([1,2,3,4,5]);
console.log(value4);
console.log(typeof value4);  // string

// Yani String() fonksiyonu ile her şeyi stringe çevirebiliriz.


//biz bir sayıyı stringe toString() fonksiyonu ile de çevirebiliriz.
let value5;

value5 = (10).toString();
console.log(value5);  // 10
console.log(typeof value5);  // string


// Farklı Veri Tiplerini sayılara çevirme: bunun için Number() fonksiyonunu kullanırız.

/* 

- Veri Tiplerini sayılara çevirme aslında biraz kısıtlı. Örneğin bir veri tipi sayılara çevrilemiyorsa burada hata 
alırız daha doğrusu 

Bu durumda 'not a number' şeklinde bir sonuç görürüz. 

*/

 let value6, value7, value8, value9;
 
 value6 = Number("123");  
 console.log(value6);   // 123
 console.log(typeof value6);  // number


value7 = Number(null); // null (değeri var ama boş)
console.log(value7);   
console.log(typeof value7);   // number


value8 = Number(undefined);  // çevrilmez 
console.log(value8);   // NaN = Not a Number! 
console.log(typeof value8);   


value9 = Number("Hello World");  // çeviremez
console.log(value9);   // NaN = Not a Number!   
console.log(typeof value9);

// bir fonksiyonu da, arrayi de biz sayıya çeviremeyiz, NaN = Not a Number! hatasını alırız.








