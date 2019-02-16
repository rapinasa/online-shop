import React from 'react'

export default function RemoveButton(props){
	return       <button type="button" class="btn btn-warning btn-sm"
	              onClick={() => props.removeFromCart(props.cartItem)}>
                  Отменить заказ
                  </button>
}