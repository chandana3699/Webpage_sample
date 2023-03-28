import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react-bootstrap';
import "../Forms/Login.css";

function LoginForm() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-7">
        <h1 className="Label_title">Let's Start With Login</h1>
      </div>
      <div className="col-lg-5">
        <div className="space">
      <Form className="spacing_control">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="Label_title">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="Label_title">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
    
      <Button variant="primary" type="submit" className="submit_color">
        Submit
      </Button>
    </Form>
    </div>
      </div>
    </div>
    </div>
    
  );
}

export default LoginForm;