//Klavye Eventleri:    keypress, keydown, keyup

/*ilk olarak biz bu döküman üzerinde event oluşturmak istiyoruz yani dökümanda herhangi bir yerde klavyede herhangi bir tuşa 
bastığımızda ilk başta eventleri öğrenmek için dökümana event atamak istiyoruz. */

/*dökümana event atayalım. ilk olarak keypress'i göreceğiz. keypress biz klavyede herhangi bir tuşa 
basınca oluşan event. burada sadece harfler ve sayılar kabul ediliyor.*/

document.addEventListener("keypress", run);  //run isimli bir fonksiyon oluşturalım

function run(myEvent){

    //event oluştuğunda hangi tuşa basıldığını anlamak için şu yapılabilir
    console.log(myEvent.which); //bu bize klavyede basılan tuşun - karakterin ascII tablosundaki değerini verir.""

    console.log("Naber");  // klavyede bir tuşa basılınca console'da Naber yazdırır. 

    console.log(myEvent.key); // klaveyde hangi tuşa bastıysak onu console'da yazdırır.

}

/* peki biz burada yukarı tuşuna veya normal rakama, harfe bastığımız zaman yani klavyenin üzerindeki tüm tuşlara bastığımız zaman
eventleri oluşturmak istiyorsak bu sefer keydown eventi kullanırız */ 

document.addEventListener("keydown",run); //run isimli bir fonksiyon oluşturalım

function run(myEvent) {

    console.log(myEvent.key);  // klaveyde hangi tuşa bastıysak onu console'da yazdırır.

}

/*biz bir tane tuşu bıraktığımız zaman keyup eventi direk olarak oluşuyor */ 
document.addEventListener("keyup",run) ;

function run(myEvent){
    console.log(myEvent.key);
}


/**form da input a girilen değeri konsolda yazdırma */
const header = document.querySelector(".card-header");

const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(myEvent) {

    header.textContent = myEvent.target.value;

    // console.log(myEvent.target.value);

}