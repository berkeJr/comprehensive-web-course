/*Scope kavramı bize şunu söyler: bir değişkenin nerelerde var olabildiğini söyler. bir değişken fonksiyon içerisinde tanımlanmışsa 
dışarıda  var olur mu veya bir blok içinde mesela if bloğu içinde tanımlanmışsa dışarıda var olur mu. 
scope kavramı bize bunları söyler. */

/*js de bizim 3 farklı scope'umuz bulunuyor.
global scope: js dosyasında herhangi fonksiyon ya da if bloğu vs. içerisinde olmayan kısım 
function scope:  function a(){
                        //function scope
                }
block scope: if(){
                 //block scope
            }
*/

//fonksiyon bloğunda tanımlanan değişken sadece orada geçerlidir

var value1 = 10;
let value2 = 20;
const value3 = 30;


console.log(value1, value2, value3);

function Func() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3);
}
Func();

//Fakat if bloğunda durum biraz farklıdır

if(true){
    var a = 10;
    let b = 20;
    const c = 30;

}

console.log(a);
console.log(b);
console.log(c);
////bu durumda a değişkeni var ile tanımlandığı için if bloğu dışında da değeri geçerli olur ve consola yazdırılır fakat b ve c yazdırılmaz