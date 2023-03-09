// import React,{useState} from 'react';
import './about.css';
import AbtImg from "../../src/images/AbtImg.jpg";
import {Container , Row, Col} from 'react-bootstrap' 

export default function About() {
    
  return (
    <div className='about-page'>
      <section className="about-info">
        <div >
            <h2 className="about-info-heading">About information</h2>
        </div>

      <p className="about-info-detail">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
    </section> 

    {/* <section className="about">
        <div className="about-left">
            <h3>DIRECTED BY READABLE</h3>
           <p id="middle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             versions of Lorem Ipsum.
           </p>
           <button>Read more</button>
        </div>

        <div className="about-right">
          <img src={AbtImg} alt="About-Image"/>
        </div>
    </section> */}
     <Container>
      <Row>
        <Col md={6} className='order-2 order-md-1'>
          <div className='ms-5 mt-5 w-75'>
          <h3>DIRECTED BY READABLE</h3>
           <p id="middle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in
             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              
           </p>
          </div>
       
        </Col>

        <Col md={6} className='order-1 order-md-2'>
          <div className='mt-5'>
          <img className='abtImg' src={AbtImg} alt="About-Image"/> 
          </div>
          
        </Col>
       
      </Row>
    </Container>
    </div>
  )
}
