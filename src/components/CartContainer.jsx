import React, { useState } from 'react'
import { CartItem } from './CartItem';
import { TotalContainer } from './TotalContainer';


let cartItems = [
    { id: 1, label: "Noodles", price: 20, quantity: 1 },
    { id: 2, label: "Biryani", price: 90, quantity: 1 },
    { id: 3, label: "Soup", price: 10, quantity: 1 },
  ];




export const CartContainer = () => {
    const [cart, setCart] = useState(cartItems)

    const total = cart.reduce(function(bag, item){
        return bag = bag + item.price * item.quantity
        
    }, 0);




    const onChange = (id, value) => {
        let updateCart = cart.map((item) => {
          let newQuantity = item.quantity + value;
          newQuantity = newQuantity > 0 ? newQuantity : 0;
    
          return item.id === id ? { ...item, quantity: newQuantity } : item;
        });
        setCart(updateCart);
      };

  return (
    <div>
     {cart.map((item)=>{
        return(
            <CartItem key={item.id} {...item} onChange={onChange}/>
        )
    })}
    <TotalContainer total={total}/>
    </div>
  )
}
