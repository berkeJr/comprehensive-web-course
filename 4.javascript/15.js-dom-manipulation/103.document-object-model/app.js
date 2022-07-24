/**Javascipt'in ilk çıkış amacı olan DOM Manipülasyonuna geçelim. Eskiden web sayfaları oluşurken sadece html dökümanı 
 * yazabiliyorduk. yani html etiketlerimizle sabit, statik sayfalar oluşturabiliyoruk. ancak js'nin çıkmasıyla birlikte biz 
 * bu sayfalara dinamiklik ve interaktiflik kazandırabiliyoruz ve de bunun adı DOM Manipülasyonu olarak geçiyor. 
 * Bu bölümümüzde DOM Manipülasyonu ile ilgili çoğu özelliğimizi görmeye çalışcağız. 

DOM: html etiketleri bir araya gelerek document obje modelini oluşturur. biz bu document üzerinde ise 
elementlerimizi javacript ile mannipüle edebiliriz. */

//Dom derslerinde hazır olarak indirdiğimiz to do list'in html dosyasını kullanacağız.

//Window Objesi

//console.log(this.document);  //bu document objesinin özelliklerini konsolda yazdırır.
// console.log(document); //bu şekilde de yazdırabiliriz

let value;

value = document.all;  //bu şekilde yaparak dökümandaki bütün html etiketlerini görebiliriz "HTMLALLCollection objesi"

value = document.all.length; //html sayfamızda toplam kaç element olduğunu görebiliriz

value = document.all[0]; //0. index'te html etiketi var o etiketi ekranda görebiliriz 

value = document.all[document.all.length - 1];  //html sayfamızdaki son elementi bize verir.

//Html All Collection objesi içindeki tüm elementleri ekrana for döngüsü ile yazdıralım
//const elements = document.all; //HTML Collection

// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
// }

/*forEach ile yazdırırsak hata alırız çünkü html all collection da forEach döngüsü kullanılmaz, kullanabilmek için ilk önce array'e 
çevrilmesi gerekir.
*/
// const collections = Array.from(document.all);  // dökümandaki elementleri array'e çevirdik

// //şimdi de forEach kullanarak bütün elementleri gezinelim
// collections.forEach(function(collection){

//     console.log(collection);

// });

//dökümanda body elementine erişmek için
value = document.body;

value = document.head;  //head etiketine erişmek için

value = document.location; //location objesine erişmek

value = document.location.hostname;

value = document.location.port;

value = document.URL;

console.log(value);