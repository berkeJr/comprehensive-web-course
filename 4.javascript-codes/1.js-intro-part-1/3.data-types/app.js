/*değişkenler bizim programlama yaparken bir veri tutacağımız zaman kullandığımız en temel birimlerdir ve javascript'te değişkenlerimiz
var, let ve constant ile oluşturulabiliyor.bu derste var tipini göreceğiz.*/
var a = 20;
var b = 10;
var c = 40;

console.log(a,b,c);
console.log(a+b+c);

/*javascript'te bir değişken oluşturduğumuz zaman bu değişkenimiz herhangi bir veri tipinde değer tutabilir. örneğin metinsel veri tipleri
yazılarımız, string veri tipimiz */

/*Javascript'te 2 tür veri tipimiz bulunuyor.*/

/*Primitive(ilkel) Veri Tipleri: örneğin bir sayı, bir yazı, undefined, null veya boolean veri tiplerimiz olabilir. */
//Primitive/Number
var d = 10; //dinamik bir tipleme: js otomatik olarak d'nin veri tipini number olarak gösteriyor: Number Veri Tipi
console.log(d);
console.log(typeof d);

var e = 3.14;  //Number Veri Tipi

//Primitive/String: js'de yazılarımız
var name = "Mustafa";
console.log(name);
console.log(typeof name);

//Primitive/Boolean: genelde if koşullarında ya da döngülerde kullanırız . sadece true ya da false değerini alabilir
var f = true;
console.log(f);
console.log(typeof f);

//Primitive/Null
var g = null; // bu g'nin hiçbir değer taşımadığını yani boş bir değer taşıdığını söylüyor.
console.log(g);
console.log(typeof g); //karşımıza object çıkar


//undefined
var h;
console.log(h); //karşımıza undefined olarak çıkar. yani buna hiç değer verilmemiş


/*Reference Veri Tipleri : array'ler, fonksiyonlar, object'ler, date-object'ler bir referans tipidir. Referans tiplerin hepsi birer object'tir
mesela aşağıdaki örenekte numbers referans ve biz o değerlere numbers üzerinden erişebiliyoruz.*/
//Reference/Arrays
var numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);


//Referans/Objects
//Bir de mesela javascript'te kendi obje'lerimizi oluşturabiliriz.
var person = {
    name : "Mustafa",
    age : 25
}
console.log(person);
console.log(typeof person);
//javascript'te tüm object'ler referans tiplidir

//Reference/date-object
//date-object : zaman işlemleri için date-object oluştururuz.
var date = new Date();
console.log(date);
console.log(typeof date);


//Reference/Functions
//biz daha sonra javascript'te fonksiyonlarımızı tanımlayacağız.
var merhaba = function(){
    console.log("Merhaba");
}

console.log(merhaba);
console.log(typeof merhaba);

/*biz primitive ve referans veri tiplerini gördük, şimdi bunların farkını anlamaya çalışalım. primitive veri tipleri sadece o değişkenin
değeridir.ancak bizim referans veri tiplerimiz referanslar üzerinden bellekte bir yeri gösteriyor ve biz o yeri gösterdikten sonra 
değerlerimizi alabiliyoruz.*/ 
var a = 10; // burada a sadece 10 değerini taşır yani herhangi bir referans değildir