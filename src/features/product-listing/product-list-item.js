import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn'

export default function ProductListItem (props){
	return <div className='product-list-item'>
              <h5> {props.product.title} </h5>
              <img 
              height={100} 
              title={ props.product.title } 
              src={props.product.image} 
              />
              <div>{props.product.author} </div>
              <div>{props.product.price} грн.</div>
              <div>
                <AddBtn 
                cartItem={props.cartItem} 
                product={props.product}
                addToCart={props.addToCart}
                 />
                 {props.cartItem
                 ?<RemoveBtn 
                cartItem={props.cartItem} 
                product={props.product}
                removeFromCart={props.removeFromCart}
                 />
                 :null
                }
              </div>
	      </div>
}