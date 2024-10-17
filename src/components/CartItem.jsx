import React from 'react'
import { LableContainer } from './LableContainer'
import { QuantityContainer } from './QuantityContainer'

export const CartItem = (props) => {
    const {id, label, price, quantity, onChange} = props
    console.log("Id = ", id);
    console.log("onChange = ", onChange);
  return (
    <div style={{
        display: "flex",
        gap: "60px",
        margin: "10px",
        justifyContent: "space-between",
      }}>
        <LableContainer label={label} price={price}/>
        <QuantityContainer id={id} quantity={quantity} onchange={onChange}/>
    </div>
  )
}
