/*Window Objesi: Biz daha önce window objesinden bahsetmiştik. Window objemizin javascript sayfalarında en temel objemiz
olduğundan bahsetmiştik.   */

//console.log(this); //bu şekilde yaparak window objesini içerisindeki obje ve metotlarla birlikte ekranda yazdırabiliriz.

//console.log(this.document); //html sayfamızın hepsini konsolda yazdırır. (index.html sayfasını)

// console.log(document); //bu şekilde de yazdırabiliriz, yukarıdaki işlemin aynısını yapar. == (this.document)

let value;

value = document.all;  //bu şekilde yaparak dökümandaki bütün html etiketlerini görebiliriz "HTMLALLCollection objesi"

value = document.all.length; //html sayfamızda toplam kaç element olduğunu görebiliriz.

value = document.all[0]; //0. index'te html etiketi var, o etiketi ekranda görebiliriz 
value = document.all[6]; //6. index'te hangi etiket varsa, o etiketi ekranda görebiliriz 

value = document.all[document.all.length - 1];  //html sayfamızdaki son elementi bize verir.

//Html All Collection objesi içindeki tüm elementleri ekrana for döngüsü ile yazdıralım
const elements = document.all; //HTML Collection

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

/*forEach ile yazdırırsak hata alırız çünkü html all collection da forEach döngüsü kullanılmaz, kullanabilmek için ilk önce array'e 
çevrilmesi gerekir. */


const collections = Array.from(document.all);  // dökümandaki elementleri array'e çevirdik

//şimdi de forEach kullanarak bütün elementleri gezinelim
collections.forEach(function(collection){

    console.log(collection);

});

//dökümanda body elementine erişmek için
value = document.body;

value = document.head;  //head etiketine erişmek için

value = document.location; //location objesine erişmek

value = document.location.hostname;

value = document.location.port;

value = document.URL;

console.log(value);