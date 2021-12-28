import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Cart - {this.props.cart.length}
                </DropdownToggle>

                <DropdownMenu right>
                    {this.props.cart.map(cartItem => ( //cartItem'ın bir quantity'si var bir de name
                         <DropdownItem>
                             {cartItem.product.productName}
                         </DropdownItem>
                    ))}

                 

                  <DropdownItem divider />

                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
        )
    }
}
