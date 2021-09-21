//Date object bizim zamanlarla ilgili kullandığımız bir obje ve bu derste date object'in metodlarını göreceğiz. 
let value;

//içinde bulunduğumuz zamanı gösteren bir obje(date objesi) oluşturalım.
const now = new Date();

console.log(now);

//doğum tarihimizi oluituralımü
const date1 = new Date("10-20-1999 06:15:00");

const date2 = new Date("October 20 1999");

const date3 = new Date(10/20/1999);

value = date1;

value = date1.getMonth();  //0'dan başlayarak yılın kaçıncı ayı olduğunu gösterir

value = date1.getDate();   //Ekim ayının hangi günü olduğunu söyler. 1'den başlayarak kaçıncı olduğunu söyler.

value = date1.getDay();

value = date1.getHours();

value = date1.getHours();

value = date1.getSeconds();

value = date1.getMilliseconds();

//peki biz bir obje oluşturduktan sonra o objenin değerlerini değiştiremez miyiz? değiştirebiliriz
//mesela ekm ayı yerine ocak ayı yapalım
date1.setMonth(7);  //ağustos ayı
date1.setDate(15);  //15.gün
date1.setFullYear(1995);  //1995 yılı
date1.setHours("09");  //saat 9
date1.setMinutes("15");  // 15.dk


console.log(value);