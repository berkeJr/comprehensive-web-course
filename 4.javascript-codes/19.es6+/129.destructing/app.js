// Destructing

/* Destructing aslında bizim array'lerimizin ya da object'lerimizin veya fonksiyonlarımızın içinden değerlerimizi almak  için 
kullandığımız kısa bir yol ve bunu kullanarak bazı işlemlerimizi daha da kısaltabiliriz. */

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

// Şimdi mesela biz bu obje içerisindeki a, b, c değerlerinin başka objelere atanmasını istiyoruz. 

// Şimdi 3 tane değişken oluşturalım fakat obje içerisinden aldığımız için süslü parantez kullanmamız gerekir. 

// obje'den değişken üreteceğimiz için değişken isimlerini obje içerisinde'ki key'lerden vermek gerekir. 
const {a: number7, c: number8, e: number9} = numbers; 

console.log(number7, number8, number9); 


// Function Destructing
const getLangs = () => ["Python", "Java", "C++"];   // Tek bir return yapacağı için return yazmaya gerek yok. 
// Burada Fonksiyon sadece bir tane array dönüyor. 

// Dönen array içerisindeki Python, Java, C++'ı 3 tane değişkene atayalım. 

const [lang1, lang2, lang3] = getLangs(); 
// lang1 = Python, lang2 = Java, lang3 = C++ şeklinde atama yapıldı. 

console.log(lang1, lang2, lang3);


// Yeni bir obje oluşturalım.

const person = {
    name: "Berke Sayın", 
    year: 1999,
    salary: 3000,
    showInfos: () => console.log("Bilgiler Gösteriliyor!")
}

// Burada person objesine 3 tane özellik ve 1 tane fonksiyon verdik. 

// Şimdi name, year, salary ve showInfos'u 4 tane değişkene atayalım. 

// Obje kullandığımız için burada süslü paranteze ihtiyacımız var. 

const {name: isim, year: yil, salary: maas, showInfos: bilgileriGoster} = person;

console.log(isim, yil, maas);

bilgileriGoster();