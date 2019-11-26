import React from 'react';
import './App.css';
import logo from './logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <Container>

    <Navbar         
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-5"
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="Chart icon" height="30"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      
      <Nav
        activeKey="/home"
        onSelect={selectedKey => console.log(`selected ${selectedKey}`)}
      >
        <Nav.Link href="/home">Rate alerts</Nav.Link>
        <Nav.Link eventKey="link-1">Profile</Nav.Link>
        <Nav.Link eventKey="link-2">Log out</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>


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

    </Container >

  );
}

export default App;
