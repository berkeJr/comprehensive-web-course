// İlk olarak sayfamızdaki elementleri seçmeyle işimize başlayalım.  

// form ekranını seçelim
const form = document.querySelector("#todo-form");

// input alanını seçelim
const todoInput = document.querySelector("#todo");

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



eventListeners();

// Projedeki tüm eventleri eventListeners fonksiyonu ile kontrol edelim. 
function eventListeners() {

    /* Sonra ise, biz burada inputa girilen to do ları ekleyeceğimiz için buradaki forma bir submit olayı kazandırmamız lazım.
    Yani form submit olduğunda girilen todo, list-item alanına eklenmeli */

    form.addEventListener("submit", addTodo); // submit olunca todo'nun list-item'a eklenmesi için gerekli olan fonksiyon
}

function addTodo(e) {

    // ilk önce todo-input içerisine girilen değeri alalım.
    const newTodo = todoInput.value.trim();   // not: js trim function: string'in başındaki ve de sonundaki boşlukları siler.

    // inputa girilen todo'nun ul elementi içerisinde UI'a eklenmesi.
    addTodoToUI(newTodo);


    e.preventDefault();  // sayfa submit edilince herhangi bir yere yönlendirilmesin.
}

function addTodoToUI(newTodo) {  // inputa girilen todo'nun ul elementi içerisinde UI'a eklenmesi.

   /* 
    <li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href="#" class="delete-item">
            <i class="fa fa-remove"></i>
        </a>
    </li> --> 
    
    */

    // Yukarıdaki li elementini dinamik bir şekilde oluşturup dinamik bir şekilde ul içerisine ekleyeceğiz.
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    // bu li elementi içerisinde bir tane de a elementi (linkimiz) var
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

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