/**Şimdi de input eventlerimizi öğrenmeye çalışacağız. Burada bir tane input alanı seçeceğiz. (filter input alanını seçelim). 
 * O input alanı üzerinde gezinirken eventlerimizi öğrenmeye çalışacağız. */

const filter = document.getElementById("filter");

// DomContentLoaded eventi: sayfadaki her şey yüklendikten sonra bu eventimiz oluşacak. 
document.addEventListener("DomContentLoaded", load); 

function load(e) {
    console.log("Sayfa Yüklendi!");
}


// Focus Eventi: İnput alanına tıklayınca oraya odaklanır, focus elementi çalışır. 
filter.addEventListener("focus", run);

function run(e) {
    console.log(e.type);
}


// Blur Eventi: İnput alanına tıklayınca oraya odaklanır, odaktan çıkınca blur eventi çalışır.
filter.addEventListener("blur", run);

function run(e) {
    console.log(e.type);
}


// Paste Eventi: Biz input alanına ctrl + v ile önceden kopyaladğımız yazıyı yapıştırırsak paste eventi çalışır. 
filter.addEventListener("paste", run);

function run(e) {
    console.log(e.type);
}


// Copy Eventi: Biz input alanındaki bir yazıyı kopyaladığımızda copy eventi oluşur. 
filter.addEventListener("copy", run);

function run(e) {
    console.log(e.type);
}



// Cut Eventi: Biz input alanındaki bir yazıyı kestiğimizde cut eventi oluşur. 
filter.addEventListener("cut", run);

function run(e) {
    console.log(e.type);
}



// Select Eventi: Biz input alanındaki bir yazıyı seçtiğimizde select eventi oluşur. 
filter.addEventListener("select", run);

function run(e) {
    console.log(e.type);
}


