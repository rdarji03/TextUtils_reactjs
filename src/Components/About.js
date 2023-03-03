import React from 'react'
import { Navbar,Card } from 'react-bootstrap'

export default function About(props) {
  return (
<>
<Navbar/>
<div className="container">
<Card className="text-center" >
      <Card.Header style={{backgroundColor:`${props.backclr}`,color:`${props.textclr}`}}>About this application</Card.Header>
      <Card.Body  style={{backgroundColor:`${props.backclr}`,color:`${props.textclr}`}}>
        <Card.Title >Text Utils</Card.Title>
        <Card.Text>
          This is my first react app made to analyze basics feature of text like word counter character counter and also to manipulate  the text 
        </Card.Text>
       
      </Card.Body>
      <Card.Footer   style={{backgroundColor:`${props.backclr}`,color:`${props.textclr}`}}>Made And Developed By Rahul Darji</Card.Footer>
      <Card.Footer  style={{backgroundColor:`${props.backclr}`,color:`${props.textclr}`}}> Amrityaenterprise.com © 2002 - 2022 All rights reserved</Card.Footer>
    </Card>
</div>
</>  

)
}


// #567397