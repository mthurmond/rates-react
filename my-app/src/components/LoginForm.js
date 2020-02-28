import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

class LoginForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
        
    handleSubmit = event => {
        event.preventDefault();
        let loginEmail = document.getElementById("login-email").value;
        let loginPassword = document.getElementById("login-password").value;
        let userLogIn = {
            email: loginEmail,
            password: loginPassword 
        }
        console.log(userLogIn)
        fetch('http://localhost:3010/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogIn)
            })
        .then(response => response.json())
        .then(item => {
            console.log(item);
            (item.length > 0) ? console.log('Logged in') : console.log('Invalid email or password'); 
        })
    }
    
    render() {

    return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="login-email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="login-password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                Log In
            </Button>

        </Form>
    );
    }
}


export default LoginForm;