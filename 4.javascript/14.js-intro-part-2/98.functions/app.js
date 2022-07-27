// 98.Fonksiyonlar, IIFE ve Anonim Fonksiyonlar


/* 

- JavaScript dili kendi içerisinde birçok hazır fonksiyon bulunduruyor ve biz program yazma süreci içerisinde ihtiyaç 
duyduğumuz an istediğimizi kullanabiliyoruz.

- Buna ek olarak biz de çalışmasını istediğimiz kodları, işlemleri kendi fonksiyonlarımızı oluşturarak istediğimiz zaman
kullanabiliriz.

*/

/**örneğin bizim bir tane programımız var ve diyelim ki biz programda 4 farklı yerde faktöriyel hesaplama kodunu yazmak istiyoruz, bu durumda
4 ayrı sefer aynı kodu uzun uzun yazmamız gerekecek ya da copy-paste kullanacağız bu da spagetti denen karmaşık koda sebep oluyor.
işte bu durumda bir sefer faktöriyel hesaplama fonksiyonunu yazıyoruz ve daha sonra ise program boyunca her nerede ihtiyaç duyarsak sadece 
fonksiyonu adı ile birlikte tek satır olarak çağırıyoruz ve aynı işlem yapılmış oluyor ayrıca kod çok düzenli oluyor.*/

//belli işlem yapacak olan kodu fonksiyon çatısı altına alıyoruz. 

//Fonksiyon Tanımlama: fonk.tanımlamak için function anahtar kelimesini kullanırız daha sonra fonksiyonumuzun ismini yazarız
//peki biz bu fonksiyonun içine belli bir bilgi gönderemez miyiz? evet parametre olarak gönderebiliriz
function merhaba(name, age){
    if(typeof name === "undefined")   name = "Bilgi Yok!";
    if(typeof age === "undefined")   age = "Bilgi Yok!";

    console.log(`İsim: ${name} Yaş: ${age}`);
}
//Şu an herhangi bir çıktı vermeyecek biz burada fonksiyonu tanımladık fakat onu kullanmak için çağırmak gerekir.

merhaba("Berke",21); //Fonksiyon çağrısı (function call)
merhaba("Mehdi",22); //Fonksiyon çağrısı (function call)
merhaba("Hamza",22); //Fonksiyon çağrısı (function call)
merhaba("Ali",21); //Fonksiyon çağrısı (function call)

merhaba(); //Fonksiyon çağrısı (function call)
/**parametreli olarak tanımlanmış bir fonksiyonuda çağırırken parametreyi kendimiz veririz eğer vermez isek değeri olmaz undefined olur, bu
 * durumu kontrol etmek için yani eğer undefined ise kendi istediğimiz varsayılan değeri atamak istiyorsak yukarıda bir if bloğu ile durumu
 * kontrol edebiliriz.
 */

/*Fonksiyonlarda return: 
return'lü fonksiyonlar değer döner, 
return'süz fonksiyonlar değer dönmez eğer değer dönemezsek sadece console a bir şey yazarız ancak daha sonra kullanamayız.*/
function square(x){
    return x*x;
}

function cube(x){
    return x*x*x;
}


let a = square(12);

a = cube(a);

console.log(a);

//let a = cube(square(12)); //yukarıdaki 3 satır kod ile aynı işlemi yapan kod.

//return'ün bir diğer anlamı var. return bir fonksiyonu sonlandıran ifadedir.yani fonksiyonda return'ün altına yazılan hiçbir şey çalışmaz.

//Function expression: bir değişkeni bir fonksiyona eşitleyebiliriz.
const merhaba2 = function(){
    console.log("Merhaba");
}

merhaba2();  //yukarıdaki fonksiyonu kullanmak için.


//Immediately Invoked Function Expression(IIFE): tanımlandığı yerde çalışan fonksiyon
//tanımlandığı yerde direk çalıştığı için fonksiyona isim verilmez.
(function(name){
    console.log("Merhaba: " + name);
})("Sayın Berke"); 


//database isimli bir obje oluşturalım
const database = {
    host: "localhost",
    
    add: function(){
        console.log("Eklendi");
    },
    
    get: function(){
        console.log("Elde Edildi");
    },

    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },

    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}
//bir database objesi 1 tane özelliği ve 4 tane fonksiyonumuz var

console.log(database.host);

database.add();

database.get();

database.update(10);

database.delete(15);