import React from 'react';
import Card from 'react-bootstrap/Card';


function Shopcard({shop}) {
  console.log(shop)
  return (
    <div style={{display:'flex', gap:'20px', marginBottom:'20px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shop.image}/>
      <Card.Body>
        <Card.Title>{shop.product}</Card.Title>
        <Card.Text>{shop.description}</Card.Text>
        <Card.Text>price:{shop.price}</Card.Text>
        <Card.Text>quantity:{shop.quantity}</Card.Text>

      </Card.Body>
    </Card>
    </div>
    )
}
export default Shopcard