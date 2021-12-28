import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>

        <DropdownMenu right>
          {this.props.cart.map(
            (
              cartItem //cartItem'ın bir quantity'si var bir de name
            ) => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            )
          )}

          <DropdownItem divider />

          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return <div>{this.renderSummary()}</div>;
  }
}
