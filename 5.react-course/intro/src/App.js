import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }; // bizim burada products state'ine ihtiyacımız var.

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json()) // response'u json'a döndürüyoruz
      .then((data) => this.setState({ products: data })); // state'in product değerini değiştirip data yapıyoruz.
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    // daha önce bu eleman eklenmiş mi diye liste kontrolü yapalım.
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else { // daha önce o ürün yoksa
       newCart.push({ product: product, quantity: 1 }); // push ile array'e yeni bir eleman ekliyoruz.
    }   
    this.setState({ cart: newCart });
  }

  render() {
    let categoryInfo = { title: "CategoryList", baskaBirSey: "birSey" };
    let productInfo = { title: "ProductList" };

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
