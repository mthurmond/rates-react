import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'

export default function LoginPage() {
    return (

        <>

            <Alert variant="success">
                You successfully logged out.
            </Alert>

            <h1 class="header mt-5 mb-3">Log In</h1>

            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="login-email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="login-password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" onclick="storeLoginInfo()" class="mt-3">
                    Log In
                </Button>

            </Form>

        </>

    )
}