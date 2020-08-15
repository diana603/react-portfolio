import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import lighthouse from './lighthouse.jpg';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top">
        <Navbar.Brand href="#home">Diana Zsigray</Navbar.Brand>
        <Container className="justify-content-end">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Container>

      </Navbar>
      <Image src={lighthouse} fluid />
      <h1>Hello World</h1>
      <Button>I made a button </Button>
      <button> Button two!</button>
    </div>
  );
}

export default App;
