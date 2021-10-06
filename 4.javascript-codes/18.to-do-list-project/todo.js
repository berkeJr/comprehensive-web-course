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
const clearButton = document.querySelector("#clear-todos")