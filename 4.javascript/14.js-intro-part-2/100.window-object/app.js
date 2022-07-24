/*Window objesi: bizim bu pencere(tarayıcı) üzerinde yapmak istedğimiz işlemleri ve bizim bu pencerenin özelliklerini 
taşıyan bir js objesidir. ve bir js objesi olduğu içinde bunun içinde bir çok özellik ve bir çok metod bulunuyor. */ 

console.log(this); /*biz burada this anahtar kelimesini kullanınca konsolda window objesi yazdırılır. this aslında bizim 
üzerinde bulunduğumuz obje anlamına geliyor. js de en genel objemiz window objesidir */

console.log(this.alert("Merhaba"));  //bu şekilde de kullanabiliriz

console.log(window);  //window objesini bu şekilde de görüntüleyebiliriz

alert("Hello World");  //bi pop-up açar


const cevap = confirm("Emin misiniz?");

console.log(cevap);

if(cevap == true){
    console.log("Sil Gitsin");
}

//Kullanıcıdan input almak için prompt() fonksiyonu kullanılır

const cevap2 = prompt("2 + 2 = ?");

console.log(cevap2); //kullanıcının girdiği cevabı konsolda yazar


//window objesinin özellikleri
let value;

value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;

value = window.outerHeight;  //sayfanın px olarak uzunluğunu verir.
value = window.outerWidth;  //sayfanın px olarak genişliğini verir.



console.log(value);