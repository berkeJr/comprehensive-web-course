//bu dersimizde html sayfamıza dinamik olarak yeni bir element nasıl ekleriz onu göreceğiz
/*mesela bizim bi a etiketimiz yani butonumuz var onun sonuna bi tane daha ondan oluşturmaya çalışallım. a linkimiz 
2. card-body'nin sonunda(en son elementi) biz card-body'nin sonuna bi tane daha a etiketi eklemeye çalışacağız*/

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a> 

//a elementini oluşturalım
const newLink = document.createElement("a");

//2.card-body yi seçelim
const cardbody = document.getElementsByClassName("card-body")[1];

//linke bir id,class ve diğer özelliklerini verelim
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";
// newLink.textContent = "Farklı Sayfaya Git";

//Text Node
const text = document.createTextNode("Naber");
cardbody.appendChild(text);  // cardbody nin en sonuna ekleyelim
console.log(cardbody);

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

//cardbody'nin sonuna newLink i ekleyelim
cardbody.appendChild(newLink);


console.log(newLink);
