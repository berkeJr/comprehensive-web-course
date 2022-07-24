import { createStore } from "redux";

import reducers from "./index";

export default function configureStore() {
    return createStore(reducers);
}

// createStore ile bir mağaza oluşturuyoruz ve oraya da index'teki reducers'ı yolluyoruz. 

/** Yani configureStore'da olay şu: Bir mağaza olduğunu düşünelim. Yani bir state veri tabanım var. O state veri tabanının
 * reducer'ları kimler. Yani state'i yöneten nesneleri kimler? İşte bu noktada bizim reducer'ımızda combine ettiğimiz
 * tüm reducer'lar burada mevcut.
 */