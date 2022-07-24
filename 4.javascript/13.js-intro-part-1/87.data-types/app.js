// 87.Variables and Data Types for JavaScript

/*

Değişkenler bizim programlama yaparken bir veri tutacağımız zaman kullandığımız en temel birimlerdir ve javascript'te 
değişkenlerimiz var, let ve const ile oluşturulabiliyor. Bu derste var veri tipi ve değişkenler üzerinde çalışalım.

*/

// Değişken Oluşturma: a, b ve c isimlerinde değişkenler oluşturalım
var a = 20;
var b = 10;
var c = 40;

console.log(a, b, c);
console.log(a + b + c);

/*

- JavaScript'te bir değişken oluşturduğumuz zaman bu değişkenimiz herhangi bir veri tipinde değer tutabilir. 
Örneğin metinsel veri tipleri: Yazılarımız, 'string' veri tipimiz. */

// Javascript'te 2 tür veri tipimiz bulunuyor. Primitive ve Reference Veri Tipleri:

/* Primitive(ilkel) Veri Tipleri:  

- Number
- String
- Boolean
- Null 
- Undefined

*/

// Primitive: Number ()
var d = 10; // dinamik bir tipleme: Js otomatik olarak d'nin veri tipini number olarak gösteriyor: Number Veri Tipi
console.log(d);
console.log(typeof d); // number

var pi = 3.14; //Number Veri Tipi

// Primitive: String (yazılar, metinsel ifadeler)
var name = "Berke";
console.log(name);
console.log(typeof name); // string

// Primitive: Boolean (genelde if koşullarında ya da döngülerde kullanılır, sadece true ya da false değerini alabilir)
var f = true;
console.log(f);
console.log(typeof f); // boolean

//Primitive: Null
var g = null; // bu g isimli değişkenin hiçbir değer taşımadığını yani boş bir değer taşıdığını söylüyor.
console.log(g);
console.log(typeof g); //karşımıza object çıkar

// Primitive: Undefined
var h;
console.log(h); //  karşımıza undefined olarak çıkar. yani buna hiç değer verilmemiş
// Bir değişken oluşturduğumuzda eğer o sırada veya sonrasında değer ataması yapmazsak bize undefined döner.

/* Reference Veri Tipleri : 

- Array'ler  
- Fonksiyonlar 
- Object'ler  (Örneğin date-object'ler) 

- Referans tiplerin hepsi birer object'tir

*/

// Reference: Arrays
var numbers = [1, 2, 3, 4, 5];

console.log(numbers); // console'da numbers array'ini yazdırır.
console.log(typeof numbers); // object

console.log(numbers[0]); // prints: 1 (0.index'teki değer)
console.log(numbers[1]); // prints: 2 (1.index'teki değer)
console.log(numbers[2]); // prints: 3 (2.index'teki değer)

// Referans: Objects  (Javascript'te tüm object'ler referans tiplidir)

// JS'de hazır js objelerine ek olarak kendimiz de kendi obje'lerimizi oluşturabiliriz.

// person isimli bir obje oluşturalım:
var person = {
  name: "Berke",
  age: 20,
};

console.log(person); // person objesini yazdırır.
console.log(person.name); // person objesinin name'ini yazdırır. (Berke)
console.log(person.age); // person objesinin age'ini yazdırır. (20)
console.log(typeof person); // object

// Reference: date-object (zaman işlemleri için date-object oluştururuz)
var date = new Date(); // date isimli bir date-object oluşturuyoruz.
console.log(date);
console.log(typeof date); // object

// Reference: Functions

// merhaba isimli bir function:
var merhaba = function () {
  console.log("Merhaba");
};

merhaba(); // oluşturduğumuz fonksiyonu bu şekilde çalıştırabiliriz.

console.log(merhaba); // merhaba fonksiyonunu console'da yazdırır.
console.log(typeof merhaba); // function

/* 

- Şimdiye kadar Primitive ve Referans Veri Tiplerini gördük, şimdi bunların farkını anlamaya çalışalım. 

- Primitive veri tipleri sadece o değişkenin değeridir. Ancak bizim Referans Veri Tiplerimiz referanslar üzerinden bellekte 
bir yeri gösteriyor ve biz o yeri gösterdikten sonra o değerlerimizi alabiliyoruz, ulaşabiliyoruz.

*/

var a = 10; // burada a sadece 10 değerini taşır yani herhangi bir referans değildir

var b = a; // b'ye 10 değerini atar.

console.log(a, b); // 10 10
