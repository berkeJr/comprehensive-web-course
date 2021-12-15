// rcc + enter ile ProductList isiml class componentimizi oluşturalım.

import React, { Component } from 'react'

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
            </div>
        )
    }
}
