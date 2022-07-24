// Bu bölümümüzde EcmaScript6 ile ve daha sonra diğer standartla gelen JavaScript'in yeni standartlarını öğreneceğiz. 

/* Arrow Functions; EcmaScript6 standartları ile gelen, b,,zm fonksiyonları yazmamızı kısaltan ve kolaylaştıran aslında güzel bir
söz dizimi özelliği. Askında arka planda işlerimiz yine aynı. */

// Js'de fonksiyon oluşturma yöntemi. (merhaba() isminde bir fonksiyon)
const merhaba = function() {
    console.log("Merhaba!");
}

merhaba();  // fonksiyonu çağıralım. 

// Arrow function ile fonksiyon oluşturma
const selam = () => {
    console.log("Selam!");
}

selam();

// Aslında pek fark gözükmese de tek satırda yazmak için oldukça kolaylık sağlar. 

// Paramatre(firstName, lastName) alan arrow function
const gunaydin = (firstName, lastName) => {

    console.log("Günaydın", firstName, lastName);

}
gunaydin("Berke", "Sayın");


// Tek parametre alan fonksiyon
const gorusuruz = (name) => {

    console.log("Görüşürüz", name);

}
gorusuruz("Berke");


// Eğer fonksiyon tek parametre alacaksa şu şekilde de yazabiliriz.
const iyiAksamlar = name => {

    console.log("İyi Akşamlar", name);

}
iyiAksamlar("Berke Sayın");


// Sadece tek bir işlem yapacak olan fonksiyon için süslü paranteze de ihtiyaç yok ve de tek satırda yazabiliriz.
const iyiGeceler = name => console.log("İyi Geceler", name);

iyiGeceler("Sayın Berke Sayın");


const iyiGeceler2 = name => {console.log("İyi Geceler", name);}

iyiGeceler2("Sayın Berke Sayın");


// İki parametre ile sadece tek bir işlem yapacak olan fonksiyon için süslü paranteze de ihtiyaç yok ve de tek satırda yazabiliriz.
const iyiSabahlar = (firstName, lastName) => console.log("İyi Sabahlar", firstName, lastName);

iyiSabahlar("Berke", "Sayın");


// Girilen sayının küpünü alan fonksiyonu yazalım
const cube = function(x){

    return x * x * x;

}
console.log(cube(5));

// Girilen sayının küpünü alan fonksiyonu arrow function ile yazalım
const cube2 = x => { return x * x * x; }
console.log(cube2(6));


// Girilen sayının küpünü alan fonksiyonu arrow function ile yazalım (Kısa yol ile)
const cube3 = x =>  x * x * x; 
console.log(cube3(10));
/**Burada fonksiyon tek bir işlem yaptığı için return yazmamıza ve süslü parantez kullanmamıza gerek yok. */