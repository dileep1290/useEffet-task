import React from 'react'

export const LableContainer = (props) => {
    const {label, price} = props
  return (
    <div style={{ display: "flex", gap: "5px" }}>
        <p>{label}</p>
        <p>INR: {price}</p>
    </div>
  )
}
