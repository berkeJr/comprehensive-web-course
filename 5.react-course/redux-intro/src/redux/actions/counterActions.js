import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({  // fonksiyonun değeri de bir fonksiyon, parametre obje. 
    type:actionTypes.INCREASE_COUNTER,  
    payload:1
})
// yani aksiyonumuz bir fonksiyon ve o fonksiyonun parametresi de süslü parantez içerisinde yazılanlar(obje). 

// Biz daha sonra bu aksiyonları redux'ta başka bir yerde çalıştıracağız.(reducer)

/** Şimdi yapı şöyle olacak: 
 * Sayının gösterildiği component,
 * Sayacı 1 arttıran buton component
 * Sayacı 2 arttıran buton component
 * Sayacı 1 azaltan buton component
 */