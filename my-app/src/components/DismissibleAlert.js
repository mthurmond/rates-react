import React, { useState }  from 'react';
import Alert from 'react-bootstrap/Alert';

function DismissibleAlert() {
    
    // useState is default react function, returns an array. ES6 destructuring. can more easily reference them now. using array, so matches by placement
    const [show, setShow] = useState(true);
    //bootstrap component, onClose method created by bootstrap
    if (show) {
        return (
            // currying being used. using anonymous function so setShow only runs after variant is closed. fat arrow functions shouldn't be used here. 
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                You successfully logged out.
            </Alert>
        );
    }
    return <></>
}

export default DismissibleAlert;