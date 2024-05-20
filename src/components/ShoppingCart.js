import React, { useContext } from 'react';
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Offcanvas, Stack } from 'react-bootstrap';
import CartItem from './CartItem';
import storeItems from "../data/Items.json"
//import {cartItem} from "./"

export const ShoppingCart = () => {
    const { closeCart, isOpen, cartItems } = useContext(ShoppingCartContext);
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        Total{" "}
                        {cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find((i) => i.id === cartItem.id);
                            return total + (item?.price || 0) * cartItem.quantity;
                        }, 0)}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>

    )
}

export default ShoppingCart