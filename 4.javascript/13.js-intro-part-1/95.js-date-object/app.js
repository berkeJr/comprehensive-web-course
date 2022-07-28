// 95.JavaScript'te Zaman Objesi ve Metodları:


// Date object zamanlarla ilgili kullandığımız bir obje ve şimdi de date object'in metodlarına bakalım.

let value;

// İçinde bulunduğumuz zamanı gösteren bir obje (date objesi) oluşturalım, ismi now olsun:
const now = new Date();

console.log(now);


// Doğum tarihimizi oluşturalım:

const date1 = new Date("10-20-1999 06:15:00");   // date1 isimli objemize;  ay-gün-yıl  / saat-dk-saniye atıyoruz

const date2 = new Date("October 20 1999");   // date2 isimli objemize;  ay-gün-yıl atıyoruz

const date3 = new Date(10/20/1999);

value = date1;

value = date1.getMonth();  // 0'dan başlayarak yılın kaçıncı ayı olduğunu gösterir

value = date1.getDate();   // Ekim ayının hangi günü olduğunu söyler. 1'den başlayarak kaçıncı olduğunu söyler

value = date1.getDay();

value = date1.getHours();

value = date1.getHours();

value = date1.getSeconds();

value = date1.getMilliseconds();


// Ayrıca biz bir obje oluşturduktan sonra istersek o objenin değerlerini de değiştirebiliriz.

date1.setMonth(7);  // Ağustos ayı (0'dan başlayarak ilerliyor, yani 0.ay = Ocak)

date1.setDate(15);  // 15.gün

date1.setFullYear(1995);  // 1995 yılı

date1.setHours("09");  // Saat 9

date1.setMinutes("15");  // 15.dk


console.log(value);