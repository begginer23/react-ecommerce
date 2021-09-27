import React, { Component } from 'react';
import Product from './Product';
import Title from './Title.js';
import {ProductConsumer} from '../Context'
import '../App.css';
import '../index.css';

class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
               <div className="py-5">
                   <div className="container ">
                       <Title name="Produk" title="Kami"/>
                      <div className="row">
                          <ProductConsumer>
                              { value =>
                               { return value.products.map(product=>{
                                  return <Product key={product.id} product={product}/>
                               })
                               }
                              }
                          </ProductConsumer>
                      </div> 
                   </div>
               </div> 
            </React.Fragment>

            //<div>
            //    <Product/>  
            //</div>
        );
    }
}

export default ProductList;