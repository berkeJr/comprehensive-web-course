/*biz programlarmızda veya yazılımlarımızda gerçek hayatta bilgiasyarlara uyarlayarak gerçek hayat problemlerini bilgisayarlar sayesinde 
 çözmeye çalışırız ve zaten programlama dilleri de bu sayede ortaya çıkmıştır ve gün geçtikçe ihtiyaçlar doğrultusunda programlama
 dillerinin özellikleri de değişiyor ve gelişiyor ve gereçek hayata daha çok uyarlamaya çalışıyoruz. Aslında object oriented programlama(nesne
yönelimli programlama) felsefesinin çıkması da bundan kaynaklanıyor. */

/*Nesne yönelimli programlamada biz aslında geçek hayattaki objelerimizi örneğin bir bilgisayarı biz programalama dünyasında da oluşturmak
 istiyoruz ve bu sayede gerçek hayat problemlerini çözmek istiyoruz. Biz kurs boyunca nesnelerimizi oluşturarak bu konsept üzerinden 
 progrramlamaya devam edeceğiz. Bu dersimizde şimdilik sadece bir obje oluşturmaya çalışacağız.*/

/*Gerçek hayattaki bir obje mesela bir bilgisayar olabilir, bilgisayarın ne gibi özellikleri olabilir. Bilgisayarın rengi, tuşları, ve 
bilgisayarın modeli olabilir.Aynı zamanda bilgisayarın kendi içinde bir çok fonksiyonu bulunuyor. Örneğin bilgisayarın kapama tuşuna 
bastığımızda bilgisayarın kapanması bir olay yani metoddur(fonksiyondur).Yani bu bilgisayar objemizin bir metodudur. */

//bir programmer objesi oluşturalım. Süslü parantezler arasına özelliklerini veya fonksiyonlarını yazabiliriz

let value;

const programmer = {
    name: "Mustafa Murat Coşkun",
    age: 25,
    email: "coskun.m.murat@gmail.com" ,
    langs: ["Python", "Java", "Javascript"],

    //obje içinde obje oluşturma
    address : {
        city: "Ankara",
        street: "Bahçelievler"
    },
    //programcının 5 tane özelliği oldu. ayrıca programcının bir tane de metodu olsun

    work: function(){
        console.log("Programcı Çalışıyor...")
    }
}
//Objemizi oluşturduk, peki bu objemizin özelliklerine nasıl erişeceğiz?

value = programmer;  //bu şekilde yazınca console'da programmer'ın bütün özellikleri görünür.

value = programmer.email;  //programcının email'i. genelde bu yöntemi kullanırız.

value = programmer["email"]; //programcının email'i, bu yöntemde kullanılabilir.

value = programmer.langs;

value = programmer.address;

value = programmer.address.city;

value = programmer.address.street;

programmer.work(); //fonksiyonu bu şekilde çağırıyoruz.


//JSON objeleri
//JSON, objeleri array şeklinde tutar(birden çok objeyi)
const programmers = [
    {name: "Mustafa Murat", age:25}, //obje
    {name: "Oğuz", age:25} //obje
];

value = programmers[0];
value = programmers[1];
value = programmers;


console.log(value);