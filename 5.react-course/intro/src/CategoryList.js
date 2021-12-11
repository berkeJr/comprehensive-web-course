import { ListGroupItem, ListGroup } from "reactstrap";

// rcc + enter ile CategoyList isimli class componentini oluşturalım
import React, { Component } from "react";


export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
