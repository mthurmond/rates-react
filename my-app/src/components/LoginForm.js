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
            (item.length > 0) ? console.log('logged in') : console.log('invalid email/pw'); 
        })
    }

    //compare login credentials to username and password. if one or more don't exactly match, say "Sorry, login and/or password didn't match our records." if both match, show "logged in" alert. 
    //not sure if i should hash passwords now or later, come back to this. 

    //don't extend native prototype of javascript. if browsers later release update to native js implementation, could over-write their native implementation. general rule: don't overwrite anything you don't control. 
    //better idea, make a standalone function. ex: "function HashCode ()".
    // String.prototype.hashCode = function() {
    //     var hash = 0, i, chr;
    //     if (this.length === 0) return hash;
    //     for (i = 0; i < this.length; i++) {
    //       chr   = this.charCodeAt(i);
    //       hash  = ((hash << 5) - hash) + chr;
    //       hash |= 0; // Convert to 32bit integer
    //     }
    //     return hash;
    //   };
    
      //may be able to get values from event object itself. console.log event object to check. 
    
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