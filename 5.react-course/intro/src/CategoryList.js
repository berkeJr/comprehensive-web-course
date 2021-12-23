import { ListGroupItem, ListGroup } from "reactstrap";

// rcc + enter ile CategoyList isimli class componentini oluşturalım
import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json()) // response'u json'a döndürüyoruz
      .then((data) => this.setState({ categories: data })); // state'in cateogry değerini değiştirip data yapıyoruz.
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        {/* <h3>{this.state.counter}</h3> */}

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
