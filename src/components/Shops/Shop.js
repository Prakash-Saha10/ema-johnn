import React from 'react';
import { useState } from "react"
import fakeData  from '../../fakeData/products.json'
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../cart/Cart';

const Shops = () => {

               const first10 =  fakeData.slice(0,15);
               const [products,setProducts] = useState(first10);
      const [cart,setCart]=useState([]);
      
      
      
               const handleAddProduct =(product) =>{
        console.log('product added',product);
        const newCart=[...cart,product];  
        setCart(newCart);
       }
    return (
      <div className='shop-container'>

         <div className='product-container'>
        
       {
            products.map(pd => <Product handleAddProduct={handleAddProduct}              
              product= {pd} > </Product>)
       }
   
         </div>
            <div className ='cart-container'>
              <Cart cart ={cart}></Cart>
                </div>
               </div>
);
};

export default Shops;
