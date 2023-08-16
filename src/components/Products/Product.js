import React from 'react';
import "./Product.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
//const { img,name,seller,price,stock} =props.product;   
    return (
        <div className='product'>
            <div class='product-img'>
                <img src ={props.product.img} alt =""/>
            </div>

           <div className='product-name'>
           <h4>{props.product.name}</h4>
        
           <p><small>by :{props.product.seller}</small></p>
           <p>${props.product.price}</p>
           <p>Only Item Left {props.product.stock}</p>

           <button class ='main-button'
           onClick={() => props.handleAddProduct(props.product)}>
           add to cart</button>

            </div> 


        </div>
    );
};

export default Product;