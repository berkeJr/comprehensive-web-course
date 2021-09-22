//önceki derste elementleri seçmenin değişik yöntemlerini görmüştük bu derste ise bu elementlere değişik stiller vermeye çalışacağız.

//id'si clear-todos olan butonu seçelim
const element = document.querySelector("#clear-todos");

console.log(element);

//element Özellikleri
console.log(element.id);  //seçili elemetin id'si
console.log(element.className);  // seçili elemetin sahip olduğu classların adı
console.log(element.classList);  // seçili elementin sahip olduğu classların adı (array şeklinde)
console.log(element.classList[0]); 
console.log(element.classList[1]);
console.log(element.textContent);  //seçili elementin yazısı (Tüm Taskları Temizleyin)
console.log(element.href);         //
console.log(element.innerHTML);

console.log(element.style);  //buton için(seçili element) style objesinin bütün özelliklerini gösterir.


//Style ve Element Özelliklerini Değiştirme
//className özelliklerini değiştirelim
element.className = "btn btn-primary";  //seçili elementin classını değiştirelim
element.style.color = "#000";
element.style.marginLeft = "10px";
element.href = "https://www.google.com"; //butona basınca google sayfası açılsın
element.target = "_blank";  //butona basınca link farklı sayfada açılsn
element.innerHTML = "<span style = 'color: red'>Silin</span>"

console.log(element);


//list-group-item classına göre elementleri 4 tane li elementini seçelim
const elements = document.querySelectorAll(".list-group-item");
console.log(elements);

elements.forEach(function (el) {

    el.style.color = "red";
    el.style.background = "#eee";

})

//Eğer biz 2. ya da 3. li elementine ulaşmak istersek yani spesifik bie sıradaki elemente ulaşmak istersek ne yaparız

let element2 = document.querySelector("li:last-child"); //son sıradaki li elementi
element2 = document.querySelector("li:nth-child(2)");  //2.sıradaki li elementi
element2 = document.querySelector("li:nth-child(3)");  //3.sıradaki li elemetni
element2 = document.querySelector("li:first-child");  //ilk li elementi
element2 = document.querySelectorAll("li:nth-child(odd)"); //1.ve 3. li elementi
element2 = document.querySelectorAll("li:nth-child(even)"); //2.ve 4. li elementi

element2.forEach(function(el){

    el.style.background = "#ccc";
    el.style.color = "red";

})



console.log(element2);