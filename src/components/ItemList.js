import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from './Item'
import React from 'react';


const productos = [
['000001','Motherboard A320M','5500','https://mexx-img-2019.s3.amazonaws.com/38551_1.jpeg'],['000002','Cooler Hyper212','500','https://mexx-img-2019.s3.amazonaws.com/39111_1.jpeg'],
['000003','Mouse Logitech','800','https://mexx-img-2019.s3.amazonaws.com/34217_3.jpeg'],['000004','Teclado Mecanico Redragon','1950','https://mexx-img-2019.s3.amazonaws.com/35357_1.jpeg'],
['000005','Fuente Thermaltake 600W','5779','https://mexx-img-2019.s3.amazonaws.com/34446_4.jpeg'],['000006','Monitor Gamer 27','58.999','https://mexx-img-2019.s3.amazonaws.com/monitor-gamer-144hz_40194_1.jpeg'],
['000007','Procesador I7 11th Gen','51.829','https://mexx-img-2019.s3.amazonaws.com/39541_3.jpeg'],['000008','Notebook Asus','113.500','https://mexx-img-2019.s3.amazonaws.com/39467_5.jpeg'],
['000009','Camara Logitech','4600','https://mexx-img-2019.s3.amazonaws.com/39575_1.jpeg'],['000010','Disco SSD 240','6200','https://mexx-img-2019.s3.amazonaws.com/37031_1.jpeg'],
['000011','Impresora Laser','83500','https://mexx-img-2019.s3.amazonaws.com/39921_1.jpeg'],['000012','Silla Gamer','63200','https://mexx-img-2019.s3.amazonaws.com/40013_1.jpeg'],
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