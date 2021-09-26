//Event Listeners and Event Object
/**biz bu formu submit ettiğimizde, bir tane butona tıkladığımızda veya bir input alanına tıklayıp odaklanma yaptığımızda js'de belli
eventler oluşuyor. örenğin forma tıklayınca sumbit eventi oluşuyor, veya butona basınca click eventi oluşuyor veya inputa odaklanınca
focus eventi oluşuyor. biz bu eventleri js ile yakalayıp buna göre işlemler gerçekleştirebiliriz. 

Event Objesi: bize bir event hakkında birden çok bilgi veren bir obje. */

//todoları aramak için oluşturulmuş filter input alanına erişim sağlayalım
const filterInput = document.getElementById("filter");
//biz bu evente tıklayınca bir focus eventi oluşuyor. 

//console.log(filterInput);



// inputa tıklayınca odaklanma (focus) eventi 1.yöntem  => onfocus = property (özellik)
filterInput.onfocus = function(){  // onfocus özelliği çalıştığında bir fonksiyonun çalışıp belli bir işlemi yapmasını istiyoruz
    console.log("Naber");
}

//inputa tıklayınca odaklanma (focus) eventi 2.yöntem
filterInput.addEventListener("focus", function(myEvent){  //ilk olarak hangi özelliğimizn çalışacağını yazarız.

    console.log(myEvent);  //oluşan event objesini görüntüleyip hakkında bilgi sahibi olalım
    //event objesi içinde event ile ilgili bir çok bilgi, özellik var

    console.log(myEvent.type); // eventin türü => focus eventi

    console.log(myEvent.target); //eventin oluştuğu elementin bilgilerini console'da yazdırır.

    console.log(myEvent.target.placeholder);  //eventin oluştuğu elementin placeholder'ı

    console.log(myEvent.target.className); // eventin oluştuğu elementin classı

    console.log(myEvent.target.id);  // eventin oluştuğu elementin id'si

    console.log("Merhaba");

});

//forma tıklayınca submit butonu eventi (submit butonuna basılınca olmasını istediğimiz event)
const todoForm = document.getElementById("todo-form"); //form  elementini se.eriz
todoForm.addEventListener("submit",submitForm);  //fonksiyonu bu sefer ayrı olarak oluşturuyoruz

function submitForm(myEvent2){

    console.log("Submit Eventi"); //çok kısa bir süre konsolda yazdırılır ve kaybolur

    myEvent2.preventDefault();  //konsolda submit eventi yazılı kalır.

}






