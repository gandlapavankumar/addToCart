import {Col , Row} from 'react-bootstrap'
import storeItems from "../data/Items.json";
import { StoreItems } from '../components/StoreItems';
export function Store() {
    return(
    <>
    <h1>store</h1>    
    <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) =>(
               <Col key={item.id}>
                <StoreItems {...item}/>
               </Col>
        ))}
    </Row>
    </>
    )
}