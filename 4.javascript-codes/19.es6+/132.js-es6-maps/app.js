// Map - Key(Anahtar) - Value(değer)

// Javascript'teki map veri tipinin çalışma mantığı şu: Her key'e karşılık gelen bir tane value'muz bulunuyor.

// Map'lerin en güzel tarafı burada key'in herhangi bir veri tipi olabilmesi. 

// Aynı şekilde value'muz da tüm veri tiplerinden olabilir. 

// Map oluşturalım

let myMap = new Map(); // oluşturma 

console.log(typeof myMap);   // object döner. 


// key'lerimizi oluşturalım
const key1 = "Berke";
const key2 = {a: 10, b: 20, c: 30};
const key3 = () => 2;

// Bu key'leri map'e eklemek için biz set fonksiyonunu kullanırız. 

// Set function for maps.
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

// Peki map'lerden bir tane key'e karşılık gelen değeri(value) almak için ne yaparız? Get fonksiyonunu kullanırız

// Get function for maps:  
console.log(myMap.get(key1));   // String Değer
console.log(myMap.get(key2));   // Object Literal Değer
console.log(myMap.get(key3));   // Function Değer


console.log(myMap);  // Bu şekilde value'ları ve de değerleri görebiliriz.
// Örnek key için: Berke String Değer

// Map içerisinde kaç eleman olduğuna şu şekilde bakabiliriz. 
console.log(myMap.size);