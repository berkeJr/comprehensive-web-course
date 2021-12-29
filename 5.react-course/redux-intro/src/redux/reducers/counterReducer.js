import * as actionTypes from "../actions/actionTypes";

/* Burada bir adet reducer oluşturalım. Bütün reducer'lar çağırdığımız aksiyonu içerip içermediğine bakacak.
 
-- state'i ve bizim çağırdığımız action'ı parametre olarak gönderelim.

-- Bizim reducer'ımızın yaptığı tek şey aksiyona göre state belirlemek. Yani aslında bizim state'imizi kontrol 
ettiğimiz yer tam olarak burası ve bizim sadece reducer'daki state'imizden yararlanacak. reducer'ımız içerisinde
gidip bir veritabanına bağlanılmaz, api'ye bağlanılmaz, reducer içerisinde tamamen basit state yönetimi işleri yapılır.

-- Burada bir switch bloğu çalıştıracağız, genelde switch kullanılır fakat if bloğu da kullanılabilir. */

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);

    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);

    default:
      return state; // eğer yukarıdaki bloğa girmiyorsa state'in kendisini return etsin.
  }
};

/* let newstate ile yeni bir değişken tanımladık. Bu olay bizim için reducer'da yapmamız gereken şudur. Örneğin
elimizde bir liste var, array var, önce array'in kopyasını alıp referans oluştururuz, onun üzerinde işlemimizi yapıp 
döndürürüz. Yani referansın değişmesi önemli. (JavaScript Immutability)  */

// Şu anda artık reducer'ımızı export edebiliriz. redux tarafında genelde aşağıdan export ederiz
export default counterReducer;


