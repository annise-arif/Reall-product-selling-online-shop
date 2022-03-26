import React, { useEffect, useState } from 'react';
import Product from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop-container'>

          <div className="products-container">
            {
                products.map(product => <Product 
                key = {product.id}
                product = {product}
                ></Product>)
            }
          </div>

           <div className="card-container">
            <h3>card container</h3>
           </div>
            
        </div>
    );
};

export default Shop;