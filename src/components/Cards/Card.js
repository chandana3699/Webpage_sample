import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import React from 'react';

export function Cards() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-lg-4">
      <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="card_title">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="submit_color">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div class="col-lg-4">
      <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="card_title">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="submit_color">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div class="col-lg-4">
      <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="card_title">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="submit_color">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

    </div>
    </div>
    
  );
}
