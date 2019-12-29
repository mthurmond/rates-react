import React from 'react';
import Table from 'react-bootstrap/Table';
import AddLeadButton from './AddLeadButton';

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

    addItemToState = (newItem) => {
        this.setState(prevState => ({
            items: prevState.items.concat([newItem])
        }))
    }

    componentDidMount() {
        this.pullItems()
        console.log('hi')
    }
        
    render() {
        // store table row html in variable. map through each item (i.e. object) in state array. can use any variable name in place of "item" below. 
        
        const tableRows = this.state.items.map(item => {
            // each time function loops through, html for the row is returned
            return (
                <tr key={item.lead_id}>
                    <th>{item.lead_id}</th>
                    <td>{item.first}</td>
                    <td>{item.last}</td>
                    <td>{item.email}</td>
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