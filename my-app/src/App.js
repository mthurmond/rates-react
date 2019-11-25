import React from 'react';
import './App.css';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className="navbar-brand" href="#"></a>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Chart icon" height="30"/>
        </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item" id="rate-alerts">
                <a className="nav-link" href="#">Rate alerts</a>
              </li>
              <li className="nav-item" id="profile">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item" id="login">
                <a className="nav-link" href="#">Log Out</a>
              </li>
            </ul>
          </div>
      </nav>


        <h1 classNameName="header">Your rate alerts</h1>

        <div classNameName="mt-5">
          {/* Button opens modal to add a single lead */}
          <Button type="Button" data-toggle="modal" data-target="#myModal" classNameName="btn btn-primary">Add lead</Button>

          {/* Button opens modal to import multiple leads  */}
          <Button classNameName="btn btn-primary">Import leads</Button>
        </div>

        <table classNameName="table mt-3 table-hover">

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

      </Container>

      );
    }
    
    export default App;
