//REPLACE: Bu dersimizde elementleri birbirleri ile değiştirelim

/**Biz ilk başta card-body'yi alacağız ve onun içindeki h5 elementini(child'ı) başka bir elementle değiştirmeye çalışacağız. */

//<h5 class="card-title" id = "tasks-title">Todolar</h5>


//2. card-body'nin içindeki h5 elementini kullanacağız
const cardbody = document.querySelectorAll(".card-body")[1];

console.log(cardbody);


//şimdi h5 in yerine yeni bir element ekleyeceğiz o da h3 elementi olacak bu yüzden h3 elementini oluşturalım
const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks";
newElement.textContent = "Yeni Todolar";

//Eski elementi seçelim
const oldElement = document.querySelector("#tasks-title");  //h5 elementi

//cardbody içindeki h5 elementi ile yeni oluşturduğumuz h3 etiketini değiştirelim
cardbody.replaceChild(newElement, oldElement);