import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Form from 'react-bootstrap/Form';

class AddLeadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleClick = event => {         
        this.setState({showModal: true})
    }

    handleHide = () => {
        this.setState({showModal: false})
    }

    handleSubmit = event => {
        event.preventDefault()
        let firstName = document.getElementById('first-name').value
        let lastName = document.getElementById('last-name').value
        let leadEmail = document.getElementById('lead-email').value
        //store new item object in single variable so we can easily add it to state further down
        let newItem = {first: firstName, last: lastName, email: leadEmail}
        //need to get response and store so i can setstate with a lead_id
        fetch('http://localhost:3010/home', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
            })
            .then(response => response.json())
            .then(data => {
                this.props.addItemToState(data)
            
            })
            .then(this.setState({showModal: false}))
            //repull all items from db so state is up to date and table shows new row
            // .then(this.props.pullItems())
        }
    
    render() {

        return (

            <div>

                <Button variant="primary" className="mr-2" data-toggle="modal" data-target="#add-lead-modal" onClick={this.handleClick}>Add lead</Button>

                <Modal size='lg' centered='true' scrollable='true' onHide={this.handleHide} id="add-lead-modal" show={this.state.showModal}>

                    <ModalHeader closeButton='true' closeLabel='Close'>
                        <ModalTitle>Add lead</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
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