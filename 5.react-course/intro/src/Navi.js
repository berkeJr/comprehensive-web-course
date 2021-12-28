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

import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Components</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Github</NavLink>
              </NavItem>

              <CartSummary cart={this.props.cart}/>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
