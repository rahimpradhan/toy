import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import '../App.css';

const CardExampleCardProps = () => (
  <Card.Group className="card-container">
  <Card
    
    header='Rashan Hodge'
    image='rashan.jpg'
    description='Protects networks from intrusion and could possibly stop collusion.'
   />

    <Card
    header='Arash Teimourpoor'
    image='arash.jpg'
    description='Saleforce architect by day, developer by night.'
   
  />

  <Card
    header='William Almy'
    image='bill.jpg'
    description='Bill attends a web development bootcamp and owns a suit. Be like Bill.'
   
  />

  <Card
    header='Rahim Pradhan'
    image='rahim.jpg'
    description='Interests include coding and long walks on the beach.'
   
  />
  </Card.Group>
)

export default CardExampleCardProps;