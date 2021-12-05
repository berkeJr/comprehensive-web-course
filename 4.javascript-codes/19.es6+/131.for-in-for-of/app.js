// Javascript For In ve For Of Döngüleri

// Bir obje oluşturalım 
const person = {
    name: "Berke Sayın", 
    salary: 3000,
    age: 21
};

// Bir array oluşturalım
const langs = ["Python", "Java", "C#", "C++"];

// Bir string tanımlayalım 
const name = "AliBalbars";

// for in loop: objelerde propert'yleri almak için şu şekilde kullanılır
for(let property in person) {
    console.log(property);
}

// for in döngüsüyle hem property'leri(key) hem de value'ları almak istersek şu şekilde kulanırız:
for(let property in person) {
    console.log(property, person[property]);
}

// for in ile array içerisinde gezinelim:
// bu kullanımda array içerisindeki index sayılarını gösterir.
for(let index in langs) {
    console.log(index);
}

// hem index sayılarını hem de value'ları alalım
for(let index in langs) {
    console.log(index, langs[index]);
}

// string üzerinde for in ile gezinelim
for(let index in name) {
    console.log(index);
}


for(let index in name) {
    console.log(index, name[index]);
}

