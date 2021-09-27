// Mouse eventleri

/**Burada html sayfamızdaki 2.card-body'yi ve onun içindeki title alanını seçelim, biz orada mouse eventlerini görmeye
 * çalışacağız. */

const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Eventi: Bir elemente tıkladığımız zaman oluşan eventimiz. 
title.addEventListener("click", run);

function run(e) {
    console.log(e.type);
}


// Double Click eventi: Bir elementin üzerine çift tıkladığımız zaman gerçekleşen eventimiz. 
title.addEventListener("dblclick", run);

function run(e) {
    console.log(e.type);
}


// Mouse Down eventi: Elemetin üzerine bastığımız ve basılı tuttuğumuzda oluşan event 
title.addEventListener("mousedown", run);

function run(e) {
    console.log(e.type);
}


// Mouse Up eventi: Bir elementin üzerine tıklamayı bırakınca oluşan event
title.addEventListener("mouseup", run);

function run(e) {
    console.log(e.type);
}


// Mouse Over eventi: Bir elemetin üzerine gelince tıklamadan bile oluşan event.
title.addEventListener("mouseover", run);

function run(e) {
    console.log(e.type);
}


// Mouse Out eventi: Bir elemetin üzerine geldikten sonra oradan ayrılınca oluşan event. 
title.addEventListener("mouseout", run);

function run(e) {
    console.log(e.type);
}


// Mouse Enter ve Mouse Leave: Mouse over ve mouse out a çok benziyor.
cardBody.addEventListener("mouseenter", run);

function run(e) {
    console.log(e.type);
}

cardBody.addEventListener("mouseleave", run);

function run(e) {
    console.log(e.type);
}