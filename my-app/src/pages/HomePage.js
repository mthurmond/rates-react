import React from 'react';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

export default function HomePage() {
  return (

    <div>

      <h1>Your rate alerts</h1>

      <div className="mt-5">
        {/* Button opens modal to add a single lead */}
        <Button variant="primary" className="mr-2" data-toggle="modal" data-target="#myModal">Add lead</Button>

        {/* Button opens modal to import multiple leads  */}
        <Button variant="primary">Import leads</Button>
      </div>

      <Table className="table mt-3 table-hover">

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Area</th>
            <th>Loan amount</th>
            <th>Last email</th>
            <th>Last open</th>
            <th>Email alerts</th>
            <th>Email frequency</th>
            <th>Text alerts</th>
            <th>Text frequency</th>
            <th>End date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>1</th>
            <td>Mark Smith</td>
            <td>mark@gmail.com</td>
            <td>Maysville, AZ</td>
            <td>$300,000</td>
            <td>11/1/2019</td>
            <td>10/20/2019</td>
            <td>On</td>
            <td>Weekly</td>
            <td>Off</td>
            <td>NA</td>
            <td>12/1/2019</td>
          </tr>

          <tr>
            <th>2</th>
            <td>Jane Smith</td>
            <td>jane@gmail.com</td>
            <td>Phoenix, AZ</td>
            <td>$250,000</td>
            <td>11/1/2019</td>
            <td>10/31/2019</td>
            <td>On</td>
            <td>Weekly</td>
            <td>On</td>
            <td>Daily</td>
            <td>NA</td>
          </tr>

        </tbody>

      </Table>
    
    </div>

  )
}