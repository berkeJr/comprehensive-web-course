// Event Capturing and Bubbling Olayları: Aslında bu özellik js'ye özgü değil, dökümana - html sayfasına özgü bir özellik.

/** Event Bubbling: Örneğin Örneğin biz card-body içerisindeki h5 elementimize biz bir click eventi yaptık. Yani
 * o element üzerine tıkladık. O durumda DOM üzerinde click eventi oluşuyor. Bu click eventi aslında event bubbling sayesinde
 * (olay kabarcıklanması) tıpkı denizden yükeselen kabarcıklar gibi onun parent'ına da geçiyor. Biz en içteki bir elemente
 * click eventi uygularsak bu event sürekli kabarcıklanarak yukarıdaki parenta taşınıyor. 
 */

document.querySelector(".container").addEventListener("click", function(){
    console.log("Div Container");
})
// Bu durumda container içinde herhangi bir yere tıklayınca console'da Div Container yazdırılır. 


document.querySelector(".card-row").addEventListener("click", function(){
    console.log("Card Row");
})


document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
    console.log("Card Body");
})


/** Event Capturing or Delegation: Olay yakalama. Şimdi index.html sayfasına gelelim. Diyelim ki oradaki card-body'ye bir click eventi 
 * atadık. O element içerisindeki herhangi bir elemente tıklayınca fonksiyon çalışacak. 
 */

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
    console.log(e.target); //card-body içerisinde hangi elemente tıklandığını gösterir. 
}
// Bu durumda card body içerisinde herhangi bir yere basınca fonksiyon çalışır. 