import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

class DeleteLeadButton extends React.Component {
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
        let itemToDelete = {lead_id: this.props.item.lead_id}
        fetch('http://localhost:3010/home', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemToDelete)
            })
            .then(this.setState({showModal: false}))
            //update code so it removes deleted item from state
            .then(this.props.removeItemFromState(this.props.item))
            
            //repull all items from db so state is up to date and table shows new row
            // .then(this.props.pullItems())
        }
    
    render() {

        return (

            <div>

                <Button variant="danger" className="mr-2" data-toggle="modal" data-target="#delete-lead-modal" onClick={this.handleClick}>Delete</Button>

                <Modal size='lg' centered='true' scrollable='true' onHide={this.handleHide} id="delete-lead-modal" show={this.state.showModal}>
                    <ModalHeader closeButton='true' closeLabel='Close'>
                        <ModalTitle>Delete lead</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete this lead?
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" type="submit" onClick={this.handleHide} className="mt-3">Cancel</Button>
                        <Button variant="danger" type="submit" onClick={this.handleSubmit}className="mt-3">Delete lead</Button>
                    </ModalFooter>
                </Modal>

            </div>

        )

    }

}

export default DeleteLeadButton;