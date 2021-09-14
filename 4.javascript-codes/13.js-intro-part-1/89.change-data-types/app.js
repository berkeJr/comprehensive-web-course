/*biz programlama dünyasında bazı yerlerde bazı veri tiplerini birbirine dönüştürmek isityor olabiliriz. Örneğin bir tane sayıyı stringe ya da
bir tane stringi sayıya dönüştürmek istiyor olabiliriz. bu dersimizde bu işlemlerimizi öğrenmeye çalışacağız.*/ 


//Farklı veri tiplerini, fonksiyonları, array'leri stringe çevirme işlemleri//
let value, value2, value3, value4;

/*biz bir sayıyı string'e çevirmek istersek eğer o durumda String() foksiyonunu kullanabiliriz.*/ 
value = String(123);
console.log(value);
console.log(typeof value);


//bir boolean değeri de bir string ifadeye dönüştürebiliriz.
value2 = String(true);
console.log(value2);
console.log(typeof value2);

//biz istersek bir fonksiyonuda bir stringe çevirebiliriz.
value3 = String(function() {console.log()});
console.log(value3);
console.log(typeof value3);

//biz istersek bir array'i de bir stringe çevirebiliriz.
value4 = String([1,2,3,4,5]);
console.log(value4);
console.log(typeof value4);
//yani biz kısaca her şeyi stringe çevirebiliriz.


//biz bir sayıyı stringe toString() fonksiyonu ile de çevirebiliriz.
let value5;

value5 = (10).toString();
console.log(value5);
console.log(typeof value5);
//////////////////////////////////////////////////////////////////////////////////////


//Veritiplerini sayılara çevirme: bunun için Number() fonksiyonunu kullanırız.
/**veri tiplerini sayılara çevirme aslında biraz kısıtlı.örneğin bir veri tipi sayılara çevrilemiyorsa burada hata alırız daha doğrusu 
 not a number şeklinde bir sonuç göreceğiz. */

 let value6, value7, value8, value9;
 
 value6 = Number("123");  //çevrilir.
 console.log(value6);
 console.log(typeof value6);

value7 = Number(null); //0 gibi bir şey
console.log(value7);
console.log(typeof value7);

value8 = Number(undefined);  //çevrilmez
console.log(value8);
console.log(typeof value8);

value9 = Number("Hello World");  //çeviremez
console.log(value9);
console.log(typeof value9);

//bir fonksiyonu da, arrayi de biz sayıya çeviremeyiz








