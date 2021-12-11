// Burada yeni componentimizi oluşturaacğız.

// rcc yazalım ve enter'a basalım, hani bir bileşen ekledik ya snippent'lar, işte rcc oradan geliyor.

// rcc + enter yapınca bize bir adet class component oluşturdu. 

/** Peki nedir bu class component? Baktığımız zaman bize şöyle bir yapı oluşturuyor. export = public anlamına geliyor.
 * Yani diğer taraflardan erişilebilir. Bunun bir component olabilmesi için React kütüphanesideki component nesnesini 
 * extend etmesi (inheritance) gerekir. Artık Navi bir component'tir, çünkü extends Component yapısı ile miras almış.
 */

/** Oluşturduğumuz bu class component içerisinde bir fonksiyonumuz var: render() isimli. Class componetnlerin ayrıca şöyle
 * bir güzelliği var, biz süslü parantezle içerisinde ayrıca bir fonksiyon yazıp o fonksiyonu da render içerisinde
 * çağırıp kullanabiliriz.
 */

import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <h2>Navi Component</h2>
            </div>
        )
    }
}

/** App.js içerisindeki return aslında burada Navi.js'deki render()'a karşılık geliyor. Peki render ne işe yarıyor?
 * render() componentlerde bir değişiklik olduğu zaman componentleri değişen veriye göre yeniliyor. 
 */

// Peki biz bu Navi'yi nasıl kullanırız; App.js içerisine gideriz. 