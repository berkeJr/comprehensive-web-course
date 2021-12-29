import * as actionTypes from "./actionTypes";

// yani aksiyonumuz bir fonksiyon ve o fonksiyonun parametresi de süslü parantez içerisinde yazılanlar(obje).
export const increaseCounter = () => ({
  // fonksiyonun değeri de bir fonksiyon, parametre obje.
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 1,
});

// Biz daha sonra bu aksiyonları redux'ta başka bir yerde çalıştıracağız.(reducer)

/** Şimdi yapı şöyle olacak: 
 * Sayının gösterildiği component,
 
 * Sayacı 1 arttıran buton component: increaseCounter() fonksiyonunu çağıracak. 
 * Daha sonra increaseCounter reducer'a gidecek ve bana şu type ve payload ile bir talep geldi, ve ona göre işlem yapılacak.

 * Sayacı 2 arttıran buton component
 * Sayacı 1 azaltan buton component
 */
