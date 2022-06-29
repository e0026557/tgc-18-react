import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './Product';

class App extends React.Component {
  // Mock data for e-commerce shop
  state = {
    products: [
      {
        _id: 1,
        sku: '1102-Z',
        name: 'Chicken Wings',
        cost: 100,
        stock: 10
      },
      {
        _id: 2,
        sku: '1103-Z',
        name: 'Spring Onion',
        cost: 150,
        stock: 7
      },
    ]
  }


  renderProducts() {
    // Create an array of JSX elements, one for each product
    let productJSX = [];
    for (let product of this.state.products) {
      productJSX.push(
        // Export this as a component
        // <div className="card">
        //   <div className="card-body">
        //     <h3 className="card-title">
        //       {product.name}
        //     </h3>

        //     <ul>
        //       <li>Cost: {product.cost}</li>
        //       <li>Stock: {product.stock}</li>
        //     </ul>
        //   </div>
        // </div>
        <Product key={product._id} product={product} />
      );
    }
    return productJSX;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Our Shop</h1>
        {/* {this.renderProducts()} */}

        {this.state.products.map(function (product) {
          return <Product key={product._id} product={product} />
        })}

      </React.Fragment>
    )
  }

}

export default App;