import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Form from 'react-bootstrap/Form';

class AddLeadButton extends React.Component {

    render() {

        const handleSubmit = event => {
            event.preventDefault()
            let firstName = document.getElementById('first-name').value
            let lastName = document.getElementById('last-name').value
            let leadEmail = document.getElementById('lead-email').value
            fetch('http://localhost:3010/home', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({first: firstName, last: lastName, email: leadEmail})
                })
            console.log("lead added")
            }

        const handleHide = () => {
            // event.preventDefault()
            console.log("hide")
            let addLeadModal = document.getElementById('add-lead-modal')
            // addLeadModal.toggleAttribute(hide: )
            console.log(addLeadModal)
        }

        const handleClick = event => {
            event.preventDefault()
            console.log("click")
            // let addLeadModal = document.getElementById('add-lead-modal')
            
            // addLeadModal.setAttribute('show', 'true')
        }

        return (

            <div>

                <Button variant="primary" className="mr-2" data-toggle="modal" data-target="#add-lead-modal" onClick={handleClick}>Add lead</Button>

                <Modal size='lg' centered='true' scrollable='true' onHide={handleHide} id="add-lead-modal" show>

                    <ModalHeader closeButton='true' closeLabel='Close'>
                        <ModalTitle>Add lead</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" id="first-name" placeholder="First name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" id="last-name" placeholder="First name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" id="lead-email" placeholder="Enter email" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">Add lead</Button>

                        </Form>

                    </ModalBody>

                </Modal>

            </div>

        )

    }

}

export default AddLeadButton;