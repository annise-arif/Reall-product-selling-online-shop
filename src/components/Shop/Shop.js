import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);
  
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleCart = (product) => {
    setCart((items) => [...items, product]);
  };
  
  const deleteButton = (cart) => {
    setCart(cart = []);
    
    
  }
  
  const ChooseRandom = (cart) => {  
       genareateRandomName(cart)
  }
  const genareateRandomName = (cart) => {
    const randomN = Math.random() * cart.length;
    const randomName = Math.round(randomN)
    // console.log(randomName)
    setRandom(cart[randomName].name)
    setCart(cart = [])
  }
  
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleCart={handleCart} />
        ))}
      </div>

      <div className="cart-container">
        <div className="cart">
          <h3>Selected Items</h3>
          {cart.map((item) => (<Cart key={item.id} cart={item.name} />))}
            <p className="random-item">{random}</p>
            <button className="btn1" onClick={()=>ChooseRandom(cart)}>Choose 1 For Me</button><br />
            <button className="btn2" onClick={deleteButton}>Choose Again</button>
            
        </div>
      </div>
    </div>
  );
};

export default Shop;
