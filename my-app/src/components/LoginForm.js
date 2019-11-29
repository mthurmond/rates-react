import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function LoginForm() {
    const handleSubmit = event => {
        event.preventDefault();
        console.log("test");
        }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="login-email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="login-password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" class="mt-3">
                Log In
                </Button>

        </Form>
    );
}

export default LoginForm;