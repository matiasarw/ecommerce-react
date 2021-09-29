import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from './Item'
import React from 'react';


const productos = [
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000002','Cooler','500','https://mexx-img-2019.s3.amazonaws.com/39111_1.jpeg'],
['000003','Mouse','800','https://mexx-img-2019.s3.amazonaws.com/34217_3.jpeg'],['000004','Teclado','1950','https://mexx-img-2019.s3.amazonaws.com/35357_1.jpeg'],
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],
['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000001','Motherboard','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg']
];


const ItemList = () => {
    return ( 
        <main className="pt-3">
            <Row>
                {productos.map(prod => (
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Item id={prod[0]} title={prod[1]} price={prod[2]} pictureUrl={prod[3]}/>
                    </Col>
                ))}
            </Row>
        </main>

    );
}



export default ItemList;