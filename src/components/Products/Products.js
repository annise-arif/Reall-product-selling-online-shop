import React from 'react';

import './Products.css';


const Product = (props) => {
    const {name, img, price, ratings} = props.product;
    return (
        <div className='product'>
         <img src={img} alt="" />
          <div className="product-info">
          <p className='product-name'>{name}</p>
              <p>Price: ${price}</p>
          </div>
          <button className='btn-cart'>
              <p className="btn-text">Add To Cart</p>
              
          </button>
        </div>
    );
};

export default Product;