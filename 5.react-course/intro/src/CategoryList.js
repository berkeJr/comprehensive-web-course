import { ListGroupItem, ListGroup } from "reactstrap";

// rcc + enter ile CategoyList isimli class componentini oluşturalım
import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    // this.state = { counter:1} // counter bir değişken ismi
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" }
      ],

      currentCategory: ""   // mevcut kategori bizim için state'deki diğer elemandır. 

    }; // categori'ler bizim için boş bir array.
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        {/* <h3>{this.state.counter}</h3> */}

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={()=>this.setState({currentCategory:category.categoryName})} 
              key={category.categoryId} >{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup> 

        <h4>{this.state.currentCategory}</h4>

      </div>
    );
  }
}
