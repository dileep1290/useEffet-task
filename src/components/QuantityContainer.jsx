import React from 'react'

export const QuantityContainer = ({ quantity, id, onChange}) => {
   
    console.log("Quant = ", quantity, id, onChange);
  return (
    <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={()=> onChange(id, -1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => onChange(id, +1)}>+</button>
    </div>
  )
}
