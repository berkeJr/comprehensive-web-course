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



