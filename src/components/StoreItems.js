import React, { useContext } from 'react'
import { Card,Button } from 'react-bootstrap';
import { ShoppingCartContext} from "../context/ShoppingCartContext";

export const StoreItems = ({id,name,price,url}) => {
    const{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useContext(ShoppingCartContext);
    const quantity = getItemQuantity(id); 
  return (
    <Card className='h-100'>
                   <Card.Img variant='top' src={url} 
                   height="200px" style={{objectFit:"cover"}} />
                   <Card.Body className="d-flex flex-column">
                       <Card.Title className='d-flex justify-content-between align-items-baseline mb4'>
                           <span className='fs-2'>{name}</span>
                           <span className='ms-2 text-mutes'>{price}</span>
                       </Card.Title>
                       <div className='mt-auto'>
                        {quantity === 0 ? (
                             <Button onClick={() => increaseCartQuantity(id)} className='w-100'>+ Add to cart</Button>
                        ):(
                            <div className='d-flex align-items-center flex-column'>
                            <div className='d-flex align-items-center justify-content-center '
                            style={{gap:".5rem"}}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span>
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>
                                Remove
                            </Button>
                           </div>
                        )}
                       </div>                    
                   </Card.Body>
               </Card>
  )
}
