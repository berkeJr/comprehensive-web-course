// İlk olarak sayfamızdaki elementleri seçmeyle işimize başlayalım.  

// form ekranını seçelim
const form = document.querySelector("#todo-form");

// input alanını seçelim
const todoInput = document.querySelector("todo");

// todo ların listelendiği parent element olan ul elementini seçelim
const todoList = document.querySelector(".list-group");

// ilk card grubumuzu yani ilk card-body'yi seçelim
const firstCardBody = document.querySelectorAll(".card-body")[0];

// ikinci card grubumuzu yani ikinci card-body'yi seçelim
const secondCardBody = document.querySelectorAll(".card-body")[1];

// ikinci card body'nin içindeki filter input alanını seçelim 
const filter = document.querySelector("#filter");

// taskları temizleme butonunu seçelim
const clearButton = document.querySelector("#clear-todos");


/* Sonra ise, biz burada inputa girilen to do ları ekleyeceğimiz için buradaki forma bie submit olayı kazandırmamız lazım.
Yani form submit olduğunda girilen todo, list-item alanına eklenmeli */

// aşağıda oluşturduğumuz fonksiyonu çalışması için burada çağıralım.
eventListeners();

// bütün eventListener'ları yöneteceğimiz bir fonksiyon oluşturalım.
function eventListeners() {
    
}