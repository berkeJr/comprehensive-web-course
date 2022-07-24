// 88.Değişken Tanımlama (var, let, const keywords)

/* 

- Javascript son yıllarda hem Türkiye'de hem de dünyada çok popüler bir dil haline geldi. Bunun sebebi olarak dilin sürekli olarak
güncellenmesini ve de yeni özellikler ile yeni standartların dile sürekli olarak eklenmesini örnek gösterebiliriz. 
Ancak js ilk başlarda sadece DOM işlemleri için yani sadece web sayfalarında kullanıcıların gördüğü alanda (client-side) 
kullanılıyordu. Ancak artık biz js'yi node.js gibi framework'ler sayesinde server tarafında da kullanabiliyoruz.

*/

// EcmaScript6 (ES6+) Standards:

/* 

- JavaScript'in 2015'den sonra gelen EcmaScript6(ES6) standartları sayesinde js'de biz bir değişkenimizi var keyword'üne ek olarak 
let, const anahtar kelimeleriyle de tanımlayabiliyoruz. Bu derste var, let ve const farklılıklarına bakalım.

*/

/*   var keyword: 

- var globally scoped veya function / locally scoped olarak kullanılabilir. Bu da şu anlama gelir: Herhangi bir yerde
var ile tanımlanan bir değişkene biz yine herhangi bir yerde erişebiliriz.

-- var variables can be re-declared and updated:

- var ile tanımlanıp değeri atanmış bir değişken bir değişken daha sonra yine var ile başka bir yerde tanımlanıp yeni değer 
verilebilir veya var ile tanımlanmadan değeri yine başka bir yerde değiştirilebilir. 

var greeter = "hey hi";
var greeter = "say Hello instead";   // tekrar tanımladığımızda herhangi bir hata olmaz.

var greeter = "hey hi";
greeter = "say Hello instead";    // değişkenin değeri güncellendiğinde de herhangi bir hata olmaz.

console.log(greeter);

*/

var a = 20;
console.log(a);

var a = 30;

a = 45;

console.log(a);



/*   let keyword:

- let block scoped keyword'dür. Yani bir değişken sadece tanımlandığı block içerisinde erişilebilir. 

-- let can be updated but not re-declared:

- let ile tanımlanıp değeri atanmış bir değişkenin daha sonra değeri değiştirilebilir, fakat tekrar en baştan tanımlanamaz.

let greeting = "say Hi";
greeting = "say Hello instead";  // Bu durumda bir hata yok.

let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared => Burada hata olur.

console.log(greeting);

*/

let b, c;
(b = 10), (c = 20);
console.log(a + b);



/*   const keyword: 

- const anahtar kelimesi ingilizce'deki constant(sabit) kelimesinden geliyor. Yani biz const ile bir değişkene değer 
atadığımız zaman daha sonra o değişkenin değerini alt satırlarda değiştiremiyoruz.

- const ile tanımlanan değişkenler block scoped olarak geçer. Yani const ile tanımlanmış değişkene sadece tanımlandığı
block içerisinde erişebiliriz. 

-- const cannot be updated or re-declared:

- const ile tanımlanmış bir değişkenin değeri daha sonra tekrar değiştirilemez veya o değişken tekrar tanımlanamaz.

const greeting = "say Hi";
greeting = "say Hello instead";   // error: Assignment to constant variable. 


const greeting = "say Hi";
const greeting = "say Hello instead";   // error: Identifier 'greeting' has already been declared

- Ayrıca const ile tanımlanmış bir değişkenin değeri tanımlanırken atanmalıdır, değişkeni tanımlayıp alt satırlarda değer vermek istersek
yine hata alırız:  

const a;
a = 25;  // error
 
*/

