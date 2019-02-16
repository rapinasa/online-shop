import React from 'react'

export default function AddButton(props){
	return       <button className="btn btn-success"
	              onClick={() => props.addToCart(props.product)}>
                  Купить 
                  ({ (props.cartItem && props.cartItem.quantity)||0})
               </button>
}