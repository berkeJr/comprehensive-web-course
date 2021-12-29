import * as actionTypes from "../actions/actionTypes";



/* Burada bir adet reducer oluşturalım. Bütün reducer'lar çağırdığımız aksiyonu içerip içermediğine bakacak.
 
-- state'i ve bizim çağırdığımız action'ı parametre olarak gönderelim.

-- Bizim reducer'ımızın yaptığı tek şey aksiyona göre state belirlemek. Yani aslında bizim state'imizi kontrol 
ettiğimiz yer tam olarak burası ve bizim sadece reducer'daki state'imizden yararlanacak. reducer'ımız içerisinde
gidip bir veritabanına bağlanılmaz, api'ye bağlanılmaz, reducer içerisinde tamamen basit state yönetimi işleri yapılır.

-- Burada bir switch bloğu çalıştıracağız, genelde switch kullanılır fakat if bloğu da kullanılabilir. */ 

const counterReducer = (state=0,action) => {
    
}