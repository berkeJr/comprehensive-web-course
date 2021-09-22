/*Biz js'de sayfamızdaki herhangi bir elementi seçebiliyoruz. Mesela bir elementi class ya da id değerine göre seçebiliyoruz. 
Javascriptin ayrıca JQuery gibi güzel bir kütüphanesi, framework'ü var biz o şekilde de seçebiliyoruz fakat sadece eğer 
projemizde bir elementi seçmemiz gerekiyorsa bunun için boş yere JQuery'yi dahil etmeye gerek yok. bu durumda biz javascript'i 
de kullanabiliriz. element seçmemizin bir çok yöntemi bulunuyor, bu yöntemlere bakalım şimdi*/

//Elementi id'ye göre seçme
//Örneğin sayfamızdaki form'umuzu seçmeye çalışalım. id'si "todo-form"

let element;

element = document.getElementById("todo-form"); //id'si todo-form olan elemeti seçer. eğer burada yanlış id verirsek console da null çıktısı alırız

element = document.getElementById("tasks-title");  //id'si tasks-title olan elementi seçelim

console.log(element);

//Elementi class'a göre seçme: bir class a ait birden çok element olabileceği için bize array şeklinde sonuç verir.
let element2;

element2 = document.getElementsByClassName("list-group-item"); // bize 4 tane li elementi getirir.

element2 = document.getElementsByClassName("list-group-item")[0];  //ilk li elementini getirir

console.log(element2);

//Elementi Tag'e göre seçme
let element3;

element3 = document.getElementsByTagName("li");  //sayfadaki li elementlerini getir.

element3 = document.getElementsByTagName("div");  //sayfadaki div elementlerini getir.

console.log(element3);


//Query Selector-CSS Selector-Tek bir element: tek metodla yukarıdaki 3 işlemden istediğimizi yapabiliriz
//Query selector sadece ilk bulduğu elementi getirir.
let element4;

element4 = document.querySelector("#todo-form");  //id'si todo-form olan elementi getirir.

element4 = document.querySelector(".list-group-item");  //classa göre

element4 = document.querySelector("li");  //sayfada bulduğu ilk li elementini getirir.

console.log(element4);

//QuerySelctorAll: Tüm elementleri seç
let element5;

element5 = document.querySelectorAll("li");  //sayfadaki tüm li elementleri gelir.

element5 = document.querySelectorAll(".list-group-item");  //classa göre 

element5.forEach(function(el){
    console.log(el);
});

//console.log(element5);