import React from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function LoginForm() {
    // get username and password from form
    // log to console
    // show success modal

    //don't extend native prototype of javascript. if browsers later release update to native js implementation, could over-write their native implementation. general rule: don't overwrite anything you don't control. 
    //better idea, make a standalone function. ex: "function HashCode ()".
    String.prototype.hashCode = function() {
        var hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
          chr   = this.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
      };
    
      //may be able to get values from event object itself. console.log event object to check. 
    const handleSubmit = event => {
        event.preventDefault();
        let loginEmail = document.getElementById("login-email").value;
        let loginStatus = true;
        localStorage.setItem("login-email", loginEmail);
        localStorage.setItem("login-status", loginStatus);
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

            <Button variant="primary" type="submit" className="mt-3">
                Log In
                </Button>

        </Form>
    );
}

export default LoginForm;