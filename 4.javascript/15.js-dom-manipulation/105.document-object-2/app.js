//Bu dersimizde document objemizin özelliklerini görmeye devam edelim. 

let value;

value = document;  //document objesini görüntüleyelim.

//Script'ler
value = document.scripts;  //document objesinin içinde bulunan scriptler

value = document.scripts.length; // 4 tane script etiketi var

value = document.scripts[0];  //ilk script etiketi


//Linkler: document'ın ayrıca link özelliği vardır
value = document.links;  //sayfadaki bütün linkler = bütün a elementleri

value = document.links[0]; //ilk linkimiz: ilk a elementi 

value = document.links[document.links.length - 1]; //son linkimiz: son a elementi

value = document.links[document.links.length - 1].getAttribute("class"); //son linkin sahip olduğu class'lar

value = document.links[document.links.length - 1].className; //son linkin sahip olduğu class'lar

value = document.links[document.links.length - 1].classList; //son linkin sahip olduğu class'ların liste şeklinde gösterimi

//value = document.links[document.links.length - 1].getAttribute("href"); //son linkin sahip olduğu href'lar


//HTML sayfamızda, document'da Formlar
value = document.forms;  //formumuzu görelim

value = document.forms.length;  //kaç tane formumuz olduğunu görelim

value = document.forms[0];  //ilk form elementi

value = document.forms[0].id;  //ilk form elementinin id'si

value = document.forms[0].getAttribute("id"); //ilk form elementinin id'si

value = document.forms[0].name;  //ilk form elementinin name'i


console.log(value);