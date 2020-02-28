import React from 'react';
import Table from 'react-bootstrap/Table';
import AddLeadButton from './AddLeadButton';
import EditLeadButton from './EditLeadButton';
import DeleteLeadButton from './DeleteLeadButton';

//could import "Table" as "BootstrapTable" and then extend that to create my own, assuming I'm going to have my own standard formatting for each table. 

//after component mounts, get table data, then store it in state, then pull that info from state into render function so i can display it in the table. 
class AlertsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: '', first: '', last: '', email: '' }
            ],
        }
    }

    pullItems = () => {
        const url = 'http://localhost:3010/home'
        fetch(url).then(response => response.json()).then(items => {
            this.setState({ items })
            }
        )
    }

    addItemToState = (data) => {
        this.setState(prevState => ({
            items: prevState.items.concat(data)
        }))
    }

    editItemInState = (itemToEdit, itemToEditIndex) => {
        //remove array wrapper that knex 'returning' command adds 
        let objectToEdit = itemToEdit[0]
        if (itemToEditIndex > -1) {
            //replaces existing item with newly edited item
            this.state.items.splice(itemToEditIndex, 1, objectToEdit)
            //above changed state in the code, line below re-renders the DOM
            this.setState(prevState => ({
                items: prevState.items
            }))
        }
    }

    removeItemFromState = (itemToDelete) => {
        let index = this.state.items.indexOf(itemToDelete)
        if (index > -1) {
            //clean this code up later, seems long-winded. investigate moving the splicing into the setState function, or eliminating the need for a setState function.  
            this.state.items.splice(index, 1)
            this.setState(prevState => ({
                items: prevState.items
            }))
        }
    }

    componentDidMount() {
        this.pullItems()
    }
        
    render() {
        
        // store table row html in variable. map through each item (i.e. object) in state array. can use any variable name in place of "item" below. 
        
        const tableRows = this.state.items.map(item => {
            // each time function loops through, html for the row is returned
            let itemIndex = this.state.items.indexOf(item)
            return (
                <tr key={item.lead_id}>
                    <th>{item.lead_id}</th>
                    <td>{item.first}</td>
                    <td>{item.last}</td>
                    <td>{item.email}</td>
                    <td className='button-column'>
                        <EditLeadButton item={item} itemIndex={itemIndex} editItemInState={this.editItemInState}/>
                        <DeleteLeadButton item={item} removeItemFromState={this.removeItemFromState}/>
                    </td>
                </tr>
            )
        }
        )

        return (
            <div>
                <div className="mt-5">
                    {/* Button opens modal to add a single lead */}
                    <AddLeadButton addItemToState={this.addItemToState} pullItems={this.pullItems}/>
                </div>

                <Table className="table mt-3 table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableRows}
                    </tbody>

                </Table>

            </div>

        );

    }
}

export default AlertsTable;