import CartItem from "./ShoppingCartItem";
import React, { useState } from 'react';

function ShoppingCart(){
    interface Product {
        name: string,
        description: string,
        price: number,
        quantity: number
    }

    const [itens, setItens] = useState<Product[]>([
        { name: 'Pepperoni Pizza', description: 'Savor the timeless perfection of our Pepperoni Pizza.', price: 32.30, quantity: 0 },
        { name: 'Hamburger', description: 'Relish in the irresistible taste of our classic Hamburger.', price: 15.50, quantity: 0 },
        { name: 'Soda', description: 'Quench your thirst with our refreshing soda.', price: 3.20, quantity: 0 }
    ]);

    let num = itens.length;
    let message = num !== 0 ? "You have " + num + " itens" : "You don't have itens"

    const increaseProductQuantity = (index: number) => {
        const updatedItems = [...itens]; 
        updatedItems[index].quantity++;
        setItens(updatedItems);
    };

    const decreaseProductQuantity = (index: number) => {
        const updatedItems = [...itens];
        if (updatedItems[index].quantity > 0) {
            updatedItems[index].quantity--;
            setItens(updatedItems);
        }
    };

                 
   let listItems = itens.map((item, index) =>
                    <CartItem key={ index } index={ index } name={ item.name } description={ item.description } 
                     price={ item.price } quantity={ item.quantity }
                     increaseQuantityFunction={ increaseProductQuantity } decreaseQuantityFunction={ decreaseProductQuantity }></CartItem>);

    return (
        <div>
            <h2><b>Shopping Cart</b></h2>
            <div>{message}</div>
            <div>{listItems}</div>
        </div>
    )
}  
export default ShoppingCart;