/* javascript son yıllarda hem Türkiye'de hem de dünyada çok popüler bir dil haline geldi. Bunun sebebi dilin sürekli olarak güncellenmesi ve de
yeni özellikler ile yeni standartların dile sürekli olarak eklenmesini örnek gösterebiliriz. Ancak js ilk başlarda sadece DOM işlemleri için
sadece web sayfalarında kullanılıyordu. Ancak bi js'de node.js gibi framework'ler sayesinde server tarafında da kullanabiliyoruz ve de
çalıştırabiliyoruz.*/


/*Javascript'in 2015'den sonra gelen standartları: EcmaScript6(ES6) standartları sayesinde js'de biz bir değişkenimizi hem let anahtar 
kelimesiyle hem de const anahtar kelimesiyle tanımlayabiliyoruz. Bu derste var, let ve const farklılıklarına bakacağız.*/

/*Var : biz var ile istersek değişkeni tanımlarken istersek de değişkeni tanımladıktan sonra alt satırlarda değer atama işlemini
gerçekleştirebiliriz. ya da ilk değeri atanmış bir değişkenin değerini alt satırlarda farklı bir değer vererek değerini değişttirebiliriz*/
var a = 20;
console.log(a);

/*let anahtar kelimesinin var'dan bir farkını gösterelim.*/ 
let name = "Mustafa Murat";
console.log(name);

name = "Murat";
console.log(name);
/*bu şekilde let ile tanımlanmış bir değişkene alt satırda farklı bir değer atayabiliriz fakat let ile tanımlanmış bir değişkeni tekrardan
alt satırlarda let ile tanımlayıp farklı bir değer atamaya çalışırsak bir hata alırız
let name = "Murat";  // burada hata alırız*/ 

let b,c;
b=10, c=20;
console.log(a+b);


/*const anahtar kelimesi. ingilizce'deki constant(sabit) kelimesinden geliyor. yani biz const ile bir değişkene değer atadığımız zaman
daha sonra o değişkenin değerini alt satırlarda değiştiremiyoruz.
const name="Mustafa Murat";
console.log(name);

name="Murat";
console.log(name);
bu şekilde bir şey denersek hata alırız. çünkü const ile tanımlanmış bir değişkenin değeri sabittir.
*/ 

/*ayrıca const ile tanımlanmış bir değişkenin değeri tanımlanırken atanmalıdır, değişkeni tanımlayıp alt satırlarda değer vermek istersek
yine hata alırız
const a;
a=25;
console.log(a);
bu şekilde bir şey denersek yine hata alırız.
*/ 

const d = [1,2,3,4,5];
console.log(d);

//array'e yeni bir eleman eklemek için: push() fonksiyonunu kullanırız.
d.push(6);
console.log(d);