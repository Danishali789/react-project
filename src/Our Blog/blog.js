import React from 'react'
import "./blog.scss";

import Card from 'react-bootstrap/Card';

export default function Blog() {
  return (
    <section className='ourblog'>
        <div className='top-content'>
        <h3>Our Blog</h3>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      
    <div className='blog' >
        
       <Card className='Card' >
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg" />
      <Card.Body>
        <Card.Title>London Amazing Tour</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card className='Card'>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg" />
      <Card.Body>
        <Card.Title>London Amazing Tour</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card className='Card'>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg" />
      <Card.Body>
        <Card.Title>London Amazing Tour</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card className='Card'>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg" />
      <Card.Body>
        <Card.Title>London Amazing Tour</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    <Card className='Card'>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg" />
      <Card.Body>
        <Card.Title>London Amazing Tour</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>

    
    </div>
    </section>
  )
}
