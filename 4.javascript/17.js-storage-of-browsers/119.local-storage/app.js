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

// Local Storage:

// Local Storage'a değer atama: 
localStorage.setItem("hareket", "burpee");  // key ve value değerleri parantez içerisine girilir. 
localStorage.setItem("tekrar", 50);  // key ve value değerleri parantez içerisine girilir. 

// Local Storage'da ve de Session Storage'da value değerlerimiz tabloya mutlaka string olarak kaydedilir. 

// Örneğin biz bir key değerine karşılık gelen value'yı almak istiyoruz. 
const value = localStorage.getItem("tekrar");
console.log(value);  // konsolda tekrar değerine karşılık gelen değer olan 50'yi yazdırır. 
console.log(typeof value);


// Clear Local Storage
// localStorage.clear();  //local storage'da tüm tabloyu temizler. 

console.log(localStorage.getItem("sport")); // sport key'i olmadığı için null döner

localStorage.setItem("hareket", "burpee");  // key ve value değerleri parantez içerisine girilir. 
localStorage.setItem("tekrar", 50);  // key ve value değerleri parantez içerisine girilir. 


// Local Storage'a array yazmak =>  JSON.stringify() ve JSON.parse() fonksiyonları
const todos = ["todo 1", "todo 2", "todo 3"];

// localStorage.setItem("todos", todos);  // string şeklinde ekleme yapar.

localStorage.setItem("todos", JSON.stringify(todos));  // tabloya array şeklinde ekleme yapar. 

const value = JSON.parse(localStorage.getItem("todos"));
console.log(value); // console'da array şeklinde yazdırır. 

// Biz todo list'te input'a girilen değerleri bir tane array'e atayacağız daha sonra bu array'imizi local storage'a yazacağız.

/* Şimdi biz formdaki input alanından değerimizi alacağız ve tekrardan tabloya yazacağız. Onun için bu forma submit olayı 
kazandırmamız gerekiyor. */
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    // input'taki değeri alalım.
    const value = todoInput.value;

    /* Daha sonra biz aldığımız değeri bir array olarak yazmak istiyoruz. Eğer bizim local storage'ımızda o array varsa 
    onu ilk başta elde edip daha sonra bu değeri o array'e aktarmamız gerekiyor. Ancak burada o key'imiz yoksa ilk başta 
    onu oluşturmamız gerekiyor. */

    let todos; 

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));  // array olarak alalım
    }
    todos.push(value);

    localStorage.setItem("todos", JSON.stringify("todos"));  // array olarak yazdıralım
    

    e.preventDefault();  // submit olunca herhangi bir sayfaya gitmesin. 
}