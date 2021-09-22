//Bu bölümde bir elementin özellikleri dinamik olarak nasıl eklenir ya da çıkarılır yani değiştirilir,onu göreceğiz

//Bu elementi kullanacağız
//<input class="form-control" type="text" name="todo" id = "todo" placeholder="Bir Todo Girin">

const todoInput = document.getElementById("todo");

let element;

element = todoInput;
element = todoInput.classList;  //input elementindeki class'ları görelim

//biz classList'e yeni class ekleyebiliriz veya var olanı çıkarabiliriz
todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");
todoInput.classList.remove("form-control");

element = todoInput.placeholder;  // = element = todoInput.getAttribute("placeholder");
element = todoInput.getAttribute("placeholder");  //placeholder attribute'ının tuttuğu value

//placeholder'ın değerini değiştirelim
todoInput.setAttribute("placeholder", "Naber");

//placeholder'a yeni bir attribute ve value ekleyelim
todoInput.setAttribute("title","Input");

element = todoInput;

//eğer todoInput'ta required isimli bir attribute varsa true döner yoksa false döner
element = todoInput.hasAttribute("required"); 

todoInput.removeAttribute("name");


console.log(element);