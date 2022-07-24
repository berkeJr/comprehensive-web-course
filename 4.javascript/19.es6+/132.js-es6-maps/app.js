// Map - Key(Anahtar) - Value(değer)

// Javascript'teki map veri tipinin çalışma mantığı şu: Her key'e karşılık gelen bir tane value'muz bulunuyor.

// Map'lerin en güzel tarafı burada key'in herhangi bir veri tipi olabilmesi.

// Aynı şekilde value'muz da tüm veri tiplerinden olabilir.

// Map oluşturalım

let myMap = new Map(); // oluşturma

console.log(typeof myMap); // object döner.

// key'lerimizi oluşturalım
const key1 = "Berke"; // string türünde
const key2 = { a: 10, b: 20, c: 30 }; // obje türünde
const key3 = () => 2; // fonksiyon türünde

// Bu key'leri map'e eklemek için biz set fonksiyonunu kullanırız.

// Set function for maps.
myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

// Peki map'lerden bir tane key'e karşılık gelen değeri(value) almak için ne yaparız? Get fonksiyonunu kullanırız

// Get function for maps: Açıklama değerlerini ekranda yazdıralım.
console.log(myMap.get(key1)); // String Değer
console.log(myMap.get(key2)); // Object Literal Değer
console.log(myMap.get(key3)); // Function Değer

console.log(myMap); // Bu şekilde value'ları ve de değerleri görebiliriz.
// Örnek key için: Berke String Değer

// Map içerisinde kaç eleman olduğuna şu şekilde bakabiliriz.
console.log(myMap.size);


// Yeni bir map oluşturalım
const cities = new Map();

// Map içerisinde değerler ekleyelim.
cities.set("İstanbul", 15);
cities.set("Ankara", 5);
cities.set("İzmir", 4);

console.log(cities);

// For each ile tek tek map'in elemanlarını key value şeklinde gezelim:
cities.forEach(function(value, key) {
    console.log(key, value);
})

// her bir elemanı array şeklinde yazdırır. 
for(let value of cities) {
    console.log(value);
}

// her bir elemanı key value şeklinde yazdırmak için
for(let [key, value] of cities) {  // destructing yapısı
    console.log(key, value);
}

// Eğer biz map içerisinde sadece key'leri almak istiyorsak 
for(let key of cities.keys()) {
    console.log(key);
}

// Eğer biz map içerisinde sadece value'leri almak istiyorsak 
for(let value of cities.values()) {
    console.log(value);
}

// İç içe bir array oluşturalım:

const array = [["key1", "value1"], ["key2", "value2"], ["key3", "value3"]];

// şimdi bu array'den bir tane map oluşturmaya çalışalım. 
const lastMap = new Map(array);

console.log(lastMap);


// Map'lerden array oluşturma

const countries = new Map();

countries.set("Holland", 15);
countries.set("Turkey", 80);
countries.set("England", 65);
countries.set("France", 50);

// countries isimli map'ten bir array oluşturalım
const array2 = Array.from(countries);

console.log(array2);