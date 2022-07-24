//bu dersimizde array'lerimizi ve metodlarımızı öğrenmeye çalışacağız
//bir array'in içerisinde sayı olabilir, string olabilir

let value;

const numbers = [43,56,48,12,25,3,56];  //array oluşturma yöntemi

//const numbers2 = new Array(1,2,3,4,5,6,7);  //bu şekilde de array oluşturabiliriz.

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba",22, null, undefined, 3.14]

//Uzunluk
value = numbers.length;   //numbers arrayindeki eleman sayısı

//İndexlenme
value = numbers[0];
value = numbers[3];
value = numbers[numbers.length-1];  //son index

//herhangi bir indexteki değeri değiştirme
value = numbers[2] = 1000;

//index of : bir değerin hangi index'te olduğunu bulmaya yarar.
value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme
numbers.push(2000);
value = numbers;

//Arrayin başına değer ekleme
numbers.unshift(3000);
value = numbers;

//Arrayin sonundan değer silme
numbers.pop();
value = numbers;

//Arrayin başından değer silme
numbers.shift();
value = numbers;

//Array'den 0. ,  1. ve de 2. index deki değerleri silmek istersek
numbers.splice(0,3); 
value = numbers;

//Arrayi tam tersine çevirmek istiyorsak eğer
numbers.reverse();
value = numbers;

//Dizidekş elemanları her elemanın ilk rakamına göre küçükten büyüğe doğru sıralama
numbers.sort();
value = numbers;

//dizideki elemanları küçükten büyüğe doğru sort ile sıralamak için fonksiyon kullanırız
value = numbers.sort(function(x,y){
    return x-y;
});

//dizideki elemanları büyükten küçüğe doğru sort ile sıralamak için fonksiyon kullanırız
value = numbers.sort(function(x,y){
    return y-x;
});

console.log(value);