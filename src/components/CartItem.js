import React from 'react';
import { useContext } from 'react';
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import  StoreItems  from '../data/Items.json';
import { Button, Stack } from 'react-bootstrap';

export const CartItem = ({id, quantity}) => {
    const { removeFromCart } = useContext(ShoppingCartContext);
    const item = StoreItems.find((i) => i.id === id);
    if (item === null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
        <img 
        src={item.url} 
        style={{width: "125px" , height: "75px" , objectFit:"cover"}} alt='hi'/>
        <div className='me-auto'>
        <div>
            {item.name}{" "}
            {quantity > 1 && (
                <span className='text-muted' style={{ fontSize: ".65rem"}}>
                    x{quantity}
                </span>
            )}
        </div>
        <div className='text-muted' style={{ fontSize: ".75rem"}}>
            {item.price}
        </div>
        </div>
        
        <div>{item.price * quantity}</div>
        <Button
            variant='outline-danger'
            size='sm'
            onClick={() => removeFromCart(item.id)}
        >        
            &times;
        </Button>
    </Stack>
        
  )
}

export default CartItem
