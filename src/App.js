import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TuneSpot</h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Song Title / Artist" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
      </header>
    </div>
  );
}

export default App;
