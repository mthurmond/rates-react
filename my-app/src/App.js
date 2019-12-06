import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MainNav from './components/MainNav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Container>

        <Router>
          <MainNav />
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>

      </Container>

    </div>

  );
}

export default App;