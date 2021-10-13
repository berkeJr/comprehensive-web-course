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
    form.addEventListener("submit", addTodo); // submit olunca todo'nun list-item'a eklenmesi için gerekli olan fonksiyon
}

// submit olunca todo'nun list-item'a eklenmesi için gerekli olan fonksiyon
function addTodo(e) {

    // ilk önce todo ekleme input'undaki değere ulaşmamız gerekiyor.
    const newTodo = todoInput.value.trim();
    // not: js trim function: string'in başındaki ve de sonundaki boşlukları siler. 

    // bu aldığımız newTodo'yu list item olarak ekleyeceğiz (ul içerisine)  yani arayüze eklenecek (UI)
    addTodoToUI(newTodo);

    // formumuz submit olduğunda tekrardan sayfaya yönelmesin diye default olan özelliğini değiştirelim
    e.preventDefault();
}

function addTodoToUI(newTodo) {  // bu fonksiyon aldığı string değerini list item olarak UI'a ekleyecek

    /**  // String Değer
     * 
        <li class="list-group-item d-flex justify-content-between">
            Todo 1
            <a href = "#" class ="delete-item">
                <i class = "fa fa-remove"></i>
            </a>
        </li> 
    */

        // li elementini dinamik bir şekilde oluşturalım
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";


        // a elementini (link) dinamik bir şekilde oluşturalım
        const link = document.createElement("a");
        link.href = "#";
        link.className = "delete-item";
        link.innerHTML = "<i class = 'fa fa-remove'></i>"

        // Todo 1 ya da Todo 2 yazısını text node olarak li elementi içerisine ekleyelim
        listItem.appendChild(document.createTextNode(newTodo));

        // li elementi içerisine a elementini çocuk olarak ekleyelim
        listItem.appendChild(link);

        // oluşturduğumuz li elementini ul elementi içerisine bir çocuk olarak ekleyelim.
        // TodoList'e listItem'e ekleyelim.
        todoList.appendChild(listItem);

        // todo eklendikten sonra input alanı temizlensin
        todoInput.value = "";


}