import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const {Body, Img, Footer, Text, Title} = Card

const Item = (props) => {
    return ( 
        <Card className="text-center">
            <Img style={{width:'50%',marginLeft:'auto',marginRight:'auto'}} src={props.pictureUrl} />
            <Body>
                <Title>{props.title}</Title>
                <Text style={{fontSize:'xx-small'}}>Código: {props.id}</Text>
                <Text>${props.price}</Text>
            </Body>
            <Footer>
                <Button variant="dark" style={{width:'100%'}}>Ver más</Button>
            </Footer>
        </Card>
    );
}
 
export default Item;