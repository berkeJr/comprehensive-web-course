// 96.Karşılaştırma Operatörler, Koşullar ve Ternary Operatör

/* 

- Programlarımız her zaman belirli koşullara göre çalışıyor. Örneğin biz veritabanına bir müşteri kaydedeceğiz. 
Ancak mesela müşteri veri tabanında kayıtlıysa bu durumda yeni bir kayıt eklenmemesini istiyoruz yani bir
koşulu kontrol etmek istiyoruz. Bu durumda koşullu ifadelerden faydalanırız.

*/


/*                      Karşılaştırma Operatörleri
 
 * ==      iki değer eşitse sonucu true olur yoksa false olur.
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 
 */


console.log(2 == 2);   // true döner
console.log("javascript" == "java");   // false döner
console.log(2 == "2");  // sadece tipler aynı mı?, true döner
console.log(2 === "2"); // false döner, tipler aynı mı / değerler aynı mı?   tipler farklı, false döner
console.log(4 > 2);   // true döner
console.log(2 != 4);  // 2 değer eşit değilse true döner, cevap true.


// Mantıksal Bağlaçlar: Birden çok durum kontrol edileceği zaman kullanılır.


// Not operatörü: Bir değer true ise false; false ise true yapar.  !
console.log(!(2 == 2));  // sonuç normalde true ama not operatörü false yapar, yani false döner
console.log(!(2 !== 2));  // true döner


// And operatörü: genel sonucun true olması için bütün koşulların true olması gerekir:   &&
console.log((2 == 2) && ("Ahmet" == "Ahmet"));  // true döner


// Or operatörü: koşullardan en az biri doğruysa genel ifade doğrudur:    ||
console.log((2 == 2) || ("Ahmet" == "Mehmet"));  // true döner



// Koşullu Durumlar:  if, else if, else 
const error = true;

if (error == true) {
    console.log("Hata Oluştu");   // Koşul sağlandığı için blok çalışır.
}

else {
    console.log("Hata yok");   // Yukarıdaki if bloğu çalışmasaydı bu blok çalışırdı.
}


// Birden fazla koşulu kontrol etmek için else if kullanılır


// If, Else If, Else:
const process = 1;

if (process === 1) {
    console.log("İşlem 1");
}

else if (process === 2) {
    console.log("İşlem 2");
}

else if (process === 3) {
    console.log("İşlem 3");
}

else if (process === 4) {
    console.log("İşlem 4");
}

else if (process === 5) {
    console.log("İşlem 5");
}

else {
    console.log("Hatalı İşlem");   //Yukarıdaki blokların hiçbirisi çalışmazsa bu blok çalışır.
}


// Sadece 1 if ve 1 else varsa daha kısa yazabiliriz


// Ternary Operator: 
const  number = 100;
console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");
// Sayı 100'e eşitse "Sayı 100" yazdır , değil ise "Sayı 100 değil" yazdır.


// Switch Case

const value = 2;

switch(value) {
    case 1:
        console.log("Value = 1");
        break;

    case 2:
        console.log("Value = 2");
        break;

    case 3:
        console.log("Value = 3");
        break;

    //Eğer yukarıdaki koşullardan hiçbirisi geçerli değilse
    default:
        console.log("Geçersiz İşlem");
        break;

}