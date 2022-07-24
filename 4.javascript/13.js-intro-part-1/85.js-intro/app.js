// 85.JavaScript Intro

/* 

Bizim js dosyalarımızı/kodlarımızı bir html sayfasında kullanabilmemiz için 3 farklı yöntem bulunuyor. 

- 1.Yöntem: html dosyasında body'de en altta script tag'ları arasında yazacağımız her kod bir javascript kodu olarak algılanır:

    <script>
        alert("Javascript'e Hoşgeldiniz!");
    </script>
    
- 2.Yöntem: JS dosyalarımızı internetten yüklemek. İnternette cloud'larda değişik js dosyaları bulunuyor. Bunun en temel örneği jquery 
    olabilir. Jquery'yi biz istersek bilgisayarımıza indirebiliriz veya jquery.org üzerinden biz buna direk erişim sağlayabiliriz.

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"></script>

    Bu yöntem dışarıdan bir js dosyasını dahil etmek şeklinde adlandırılır. Burada Jquery'yi indirmeden dahil etmiş olduk.

- 3.Yöntem: Bizim kurs boyunca kullanacağımız yöntem ise app.js isimli dosya içerisinde js kodlarımızı yazıp daha sonra o dosyayı 
    index.html'de dahil etmek olacaktır. bunun için index.html'de script tag'ları arasında src="app.js" şeklinde dahil etmemiz 
    gerekiyor.

    <script src="app.js"></script>
    
    Bu şekilde dahil ettikten sonra bizim app.js içinde yazdığımız kodlar çalışmış olacak.
   
*/

alert("Javascript'e Hoşgeldiniz / Berke Sayın");

