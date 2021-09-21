//Döngüler belirli koşullarda kendi bloklarını sürekli çalıştıran yapılardır.
//While döngüleri

let i = 1;

while (i < 10) {
    console.log(i);
    i = i + 1; //i++
}

/*break ve continue :
break: döngünün herhangi bir yerinde kullanıldığında koşul hala geçerli olsa bile döngü sonlanıyor.

continue: döngümüzde herhangi bir yerde continue çalıştırırsak, döngü bloğunun kalan kısmı çalıştırılmadan döngümüz direk 
en başa döner ve tekrardan koşulumuzu kontrol etmeye çalışır.*/

let j = 0;

while (j < 10) {   /// sonsuz döngü olur
    
    if (j == 5) {
        j++;
        continue;
    }
   
    console.log(j);
    j++;
}

//Do While Döngüleri: while döngüsüne oldukça benziyor ancak bu döngünün en az bir deefa çalışma garantisi vardır.

let k = 0;

do{
    console.log("k= ", k);
    k++ ;
}while(k<10);


//For döngüleri
//burada bir array oluşturalım

//önce while ile
// const langs = ["Python","Javascript","Java"];

// let index = 0;

// while(index < langs.length){
//     console.log("lang = ", langs[index]);
//     index++;
// }


//for ile aynı yapıyı oluşturalım
// const langs = ["Python","Javascript","Java"];

// for(let index = 0; index < langs.length; index++){   //döngü değişkeni ; koşul ; otomatik artırma işlemi
//     console.log("lang = ", langs[index]);
// }

//yukarıdaki aynı yapıyı forEach şle oluşturabiliriz. forEach her eleman üzerinde tek tek gezinmemizi sağlar.
const langs = ["Python","Javascript","Java"];

langs.forEach(function(lang){

    console.log("lang = ", lang);

});


const languagesAliKnows = [".Net", "Java", "Html", "Css", "Javascript", "React", "Ajax and Json"];

languagesAliKnows.forEach(function(languagesAliKnow){

    console.log("languages = ", languagesAliKnow);

});
//forEach() fonksiyonu içerisine bir fonksiyon alır

///şimdi bir array oluşturalım ve array'in her bir elemanı bir obje olsun.
const users = [
    {name: "Mustafa", age: 25},
    {name: "Zeynep", age: 40},
    {name: "Ali", age:12}
];

/*şimdi mesela bu arraydeki elemanların name'lerini alıp bir array oluşturmak istersek map() fonksiyonunu kullanabiliriz. 
ve bu fonksiyonda içerisine bir fonksiyon alır*/

const names = users.map(function(user){

    return user.name;

});

console.log(names);

//yaşları tutan bir array oluşturalım
const ages = users.map(function(user){

    return user.age;

});

console.log(ages);

//for in döngüsü
const person = {
    name: "Berke",
    age: 25
};

for(let key in person){
    console.log(key, person[key]);  //key property leri verir  person[key] ise value larını verir.
}