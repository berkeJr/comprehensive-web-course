import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {

  // let titleProduct = "Product List";
  // let titleCategory = "Category List";
  // let baskaBirSey = "";

  let categoryInfo = {title: "CategoryList", baskaBirSey: "birSey"};
  let productInfo = {title: "ProductList"}

  return (
    // Navi componentini burada kullanabiliriz. (div içerisinde)
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>

      </Container>
    </div>
  );
  /**Burada return işlemi direkt olarak bir parantezle başlıyor. Burada bir .jsx yapısı var.  Yani JavaScript XML
   * dediğimiz yapı var. Bu react'ta jsx yapısıdır. Peki nedir bu jsx yapısı? React aslında bir kütüphane ve arayüz
   * oluşturmaya yönelik kolaylıklar sağlıyor. O da react'ın en önemli yapısı. Yani .jsx yapısı. Normalde return
   * içerisindeki ifadenin HTML'den bir farkı yok gibi gelebilir. Buradaki div aslında HTML olarak render ediliyor,
   * yani biz html'deki div'i ve diğer elementleri aynen burada da kullanabiliyoruz, ama aslında buradaki yapı tam olarak
   * jsx yapısıdır. Yani bu div'in react kütüphanesinde bir karşılığı var. Ayrıca örneğin biz bu diV'in altında, dışında
   * bir h3 elementi oluşturursak hata verir. Örneğin bir div elementi var açılıp kapanıyor, biz onunla aynı hiyerarşide
   * yani ona kardeş bir h3 element oluşturamayız. Yani bizim bir ana container tag'ımız olacak(div) biz onun içerisine
   * yazacağız.
   */
}

export default App;
