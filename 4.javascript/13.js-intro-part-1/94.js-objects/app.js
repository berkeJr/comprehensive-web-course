// 94.JavaScript'te Obje Kavramı ve Obje Oluşturma


/*

- Object oriented programming(nesne yönelimli programlama) kavramı aslında program geliştirme süreci boyunca 
karşılaştığımız problemleri gerçek hayatla ilişkilendirerek çözme kapsamında ortaya çıkmıştır. 

/* 


- Burada örnek olarak bir bilgisayarı ele alalım. Gerçek hayattaki bir obje mesela bir bilgisayar olabilir, 
peki bilgisayarın ne gibi özellikleri olabilir? Bilgisayarın rengi, tuşları, ve bilgisayarın modeli olabilir. 
Aynı zamanda bilgisayarın kendi içinde bir çok fonksiyonu bulunur. Örneğin bilgisayarın kapama tuşuna bastığımızda 
bilgisayarın kapanması bir olay yani metoddur(fonksiyondur). Yani bu bilgisayar objemizin bir metodudur. 

*/

// programmer isimli bir obje oluşturalım. Süslü parantezler arasına özelliklerini veya fonksiyonlarını yazabiliriz

let value;


const programmer = {
  // properties: values

  name: "Berke Sayın",
  age: 20,
  email: "sayinberkesayin@gmail.com",
  langs: ["Python", "Java", "JavaScript", "C#"],

  // obje içinde obje oluşturma
  address: {
    city: "İstanbul",
    street: "Üsküdar",
  },

  // programmer objesinin 5 tane özelliği oldu. ayrıca programcının bir tane de metodu olsun:

  work: function () {
    console.log("Programcı Çalışıyor...");
  },
};


// Objemizi oluşturduk, peki bu objemizin özelliklerine nasıl erişeceğiz?

value = programmer; //bu şekilde yazınca console'da programmer'ın bütün özellikleri görünür.

value = programmer.email; // programcının email'i. genelde bu yöntemi kullanırız.

value = programmer["email"]; // programcının email'i, bu yöntemde kullanılabilir.

value = programmer.langs;

value = programmer.address;

value = programmer.address.city;

value = programmer.address.street;

programmer.work(); //fonksiyonu bu şekilde çağırıyoruz.


// JSON objects:

//JSON, birden çok objeyi array şeklinde içerisinde tutar

const programmers = [
  { name: "Berke Sayın", age: 20, email: "berkesayin@gmailcom" }, // obje
  { name: "Ali", age: 21, email: "ali@gmail.com" }, // obje
  { name: "Mustafa", age: 22, email: "mustafa@gmail.com" }, // obje
];


value = programmers[0];
value = programmers[1];
value = programmers[2];
value = programmers;


console.log(value);
