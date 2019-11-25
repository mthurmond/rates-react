import React from 'react';
import './App.css';

import Button from "react-bootstrap/Button";

function App() {
  return (
    
// test html
<div className="container">

    <h1 className="header">Your rate alerts</h1>

    <div className="mt-5">
      {/* Button opens modal to add a single lead */}
      <Button type="Button" data-toggle="modal" data-target="#myModal" className="btn btn-primary">Add lead</Button>

      {/* Button opens modal to import multiple leads  */}
      <Button className="btn btn-primary">Import leads</Button>
    </div>

    <table className="table mt-3 table-hover">

      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Area</th>
          <th scope="col">Loan amount</th>
          <th scope="col">Last email</th>
          <th scope="col">Last open</th>
          <th scope="col">Email alerts</th>
          <th scope="col">Email frequency</th>
          <th scope="col">Text alerts</th>
          <th scope="col">Text frequency</th>
          <th scope="col">End date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">1</th>
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
          <th scope="row">2</th>
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

    </table>

  </div>


  );
}

export default App;
