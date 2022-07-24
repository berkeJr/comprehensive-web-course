let value;

//classı list-group olan ul elementini seçelim
const todoList = document.querySelector(".list-group");

//ul elementi içindeki 2.çocuk olan 2. li elementini seçelim
const todo = document.querySelector(".list-group-item:nth-child(2)");

//classı card ve row olan div'i de seçelim
const cardrow = document.querySelector(".card.row");


value = todoList;
value = todo;
value = cardrow;


//todoList için
//Child Nodes özelliği - text dahil : todoList'in çocuklarına erişelim(4 tane çocuğu var). 
//classı .list-group olan todoList'in çocuklarına erişelim
value = todoList.childNodes;  //bu şekilde deyince 4 tane değilde bir de satır atlamalarıda saydığı için 9 tane çıktı verir

//biz eğer satır atlamalarının sayılmasını istemiyorsak sadece çocukların yazılmasını istiyorsak Children özelliğini kullanırız
value = todoList.children;
value = todoList.children[0]; //ilk çocuk
value = todoList.children[todoList.children.length - 1]; //son çocuk
value = todoList.children[2].textContent = "Değişti";  //3. çocuğun text'ini değiştirdik



//cardrow için
value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children;
value = cardrow.children[2].children[1];
value = cardrow.children[2].children[1].textContent = "Burası da değişti";  //cardrow'un çocuğunun çocuğu,
// console.log(value);


//todoList için 
value = todoList;
value = todoList.children[0];  // =  value = todoList.firstElementChild;  // ilk çocuk
value = todoList.firstElementChild;  // =  value = todoList.firstElementChild;  // ilk çocuk
value = todoList.lastElementChild;   // =  value = todoList.lastElementChild;  // son çocuk

//todoList'in kaç çocuğu var?
value = todoList.children.length;  // = value = todoList.childElementCount; 
value = todoList.childElementCount; 

//cardrow'un ebeveyni kim?
value = cardrow;
value = cardrow.parentElement;  //ebeveyni
value = cardrow.parentElement.parentElement; // babasının babası

//Element Kardeşleri
value = todo;  //2. li elementi
value = todo.previousElementSibling;  //2. li elementi'nin bir önceki kardeşi: 1.li elementi
value = todo.nextElementSibling;  // 3.li elementi
value = todo.nextElementSibling.nextElementSibling;  //4.li elementi


console.log(value);
