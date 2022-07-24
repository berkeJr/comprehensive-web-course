/** Session Storage and Local Storage: Bu bölümümüzde tarayıcıların depolama alanlarından olan session storage 
 * ve de local storage'ı göreceğiz. */

/* Storage: Eğer biz javascript uygulamalarımızda herhangi bir veritabanı kullanmıyorsak aslında biz tarayıcıların
 * kendi içerisinde bulunan session storage veya local storage'ı kullanabiliriz. Örneğin biz daha önce  tarayıcı da 
 * web developer tools'u kulandığımız zaman elements kısmında sayfamızdaki elementleri inceleyebiliyorduk veya console 
 * kısmında js kodlarımızı deneyebiliyorduk. Aynı zamanda tarayıcıda web developer tools'da Application kısmı var. Ve o 
 * kısımda Storage bölümüne gelince Local Storage ve Session Storage isminde 2 tane bölüm görüyoruz. Session Storage'ın ve
 * de Local Storage'ın çalışma mantığı direk olarak aynı. Ancak bunlar arasında şöyle bir farklılık var: Local Storage'da
 * biz değerlerimizi depoladığımzda biz silmediğimiz sürece değerlerimiz orada sabit kalıyor. Biz browser'ı kapatsak bile 
 * orada sabit kalıyor. Biz o değerleri istersek js tarafında silebiliriz veya browser üzerinde silebiliriz. Session storage
 * ise oturumumumz açık kaldığı sürece orada depoladığımız veriler sabit kalıyor. Ancak o sekmeyi ya da browser'ı kapatırsak
 * verilerin hepsi siliniyor. Session storage; key-value değerleriyle verilerimizi depolamamızı sağlıyor. Biz bir tane key 
 * veriyoruz ona karşılık da bir value'mız oluyor. (meyve - kiraz) gibi.  
 */

// Session Storage

// ilk olarak bir window objemize göz atalım 
console.log(window); 
// aslında session storage'ın ve de local storage'ın window objesi içerisinde birer obje olduğunu görebiliriz. 


// Arayüzdeki butonları seçelim
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Arayüzdeki inputları seçelim
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// Eventler
add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

// Fonksiyonlar
function addItem(e) {
    // öncelikle inputlardaki key ve value değerini alacağız. 
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);  // delete input'una yazılan değer sil butonuna baslılınca silinir. 
}

function clearItems(e) {
    sessionStorage.clear();  // tablodaki bürün değerleri siler. 
}