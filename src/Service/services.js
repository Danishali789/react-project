import React from 'react'
import "./service.scss";
import {Container , Row, Col} from 'react-bootstrap'


export default function Services() {
  return (
    
    <div className='service'>
      <h3>Services</h3>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
      </p>
      {/* <div>
        <div className='pic'>
          <div className='firsPic'>
          <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt='food'
          />
          </div>
          <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='fashion'/>
            <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt='food'
          />
        </div>
        <div className='pic'>
        <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt='food'
          />
          <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='fashion'/>
            <img src='https://images.pexels.com/photos/2915216/pexels-photo-2915216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt='food'
          />
        </div>
    </div> */}
    <Container>
      <Row className='mb-3'>
        <Col md={4}>
        <img src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='fashion'/>
        </Col >
        <Col md={4}>
        <img src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='food'/>
        </Col>
        <Col md={4}>
        <img src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='fashion'/>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
        <img src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='fashion'/>
        </Col>
        <Col md={4}>
        <img src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='fashion'/>
        </Col>
        <Col md={4}>
        <img  src='https://m.media-amazon.com/images/I/716s7jxusPL._SL1200_.jpg'
          alt='fashion'/>
        </Col>
      </Row>
    </Container>
    
  </div>

  );
}
