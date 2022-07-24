// 93.Array'lerin Özellikleri

// Şimdi de array'lere ve array metodlarımıza bakalım.

// Not: Bir array'in içerisinde sayı olabilir, string olabilir.

let value;

const numbers = [43, 56, 48, 12, 25, 3, 56]; // array oluşturma yöntemi  (numbers isimli array)

const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7); // bu şekilde de array oluşturabiliriz   (numbers2 isimli array)

const langs = ["Python", "Java", "C++", "Javascript"];  // (langs isimli array)

const a = ["Merhaba", 22, null, undefined, 3.14];  // (a isimli karışık veri tiplerinden eleman bulunduran array)


// Array'in uzunluğu, eleman sayısı:
value = numbers.length; // numbers arrayindeki eleman sayısı


// Array içerisinde istenilen index değerine sahip elemana erişme:
value = numbers[0];
value = numbers[3];
value = numbers[numbers.length - 1]; // son eleman, son index


// Herhangi bir indexteki değeri değiştirme, yeni değer verme:
value = numbers[2] = 1000;


// indexOf : Bir değerin hangi array içerisinde hangi index'te olduğunu bulmaya yarar.
value = numbers.indexOf(1000);


// Arrayin sonuna yeni değer ekleme: push()
numbers.push(2000);
value = numbers;


// Arrayin başına değer ekleme: unshift()
numbers.unshift(3000);
value = numbers;


// Arrayin sonundaki değeri(son elemanı) silme: pop()
numbers.pop();
value = numbers;


// Arrayin başındaki değeri(ilk elemanı) silme: shift()
numbers.shift();
value = numbers;


// Array'den 0., 1. ve de 2. index'deki değerleri silmek istersek: splice()
numbers.splice(0, 3);
value = numbers;


// Arrayi tam tersine çevirmek istiyorsak: reverse()
numbers.reverse();
value = numbers;


// Dizideki elemanları her elemanın ilk rakamına göre küçükten büyüğe doğru sıralama: sort()
numbers.sort();
value = numbers;


// Dizideki elemanları küçükten büyüğe doğru sort ile sıralamak için fonksiyon kullanırız:
value = numbers.sort(function (x, y) {
  return x - y;
});


//dizideki elemanları büyükten küçüğe doğru sort ile sıralamak için fonksiyon kullanırız
value = numbers.sort(function (x, y) {
  return y - x;
});


console.log(value);


/*   JS, Some Array Functions

- length
- indexOf()
- push()
- unshift()
- pop()
- shift()
- splice()
- reverse()
- sort()

*/ 