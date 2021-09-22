//bu dersimizde html sayfamızdan dinamik olarak element silmeyi göreceğiz

//ul elementlerinden classı list-group olanı seçelim
const todoList = document.querySelector("ul.list-group");

//li elementlerini(classı = list-group-item) olanları seçelim
const todos = document.querySelectorAll("li.list-group-item");


//Remove Metodu: remove metodu ile bir elementi kolaylıkla silebiliriz.

//ilk li elementini silelim
//todos[0].remove();

//Remove Child Metodu
todoList.removeChild(todoList.lastElementChild); //son li elementini silelim




console.log(todos);
console.log(todoList);