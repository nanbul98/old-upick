import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';


const title = 'UPick';
const user1 = {
  firstName: 'Chris',
  lastName: 'Chan'
}
const user2 = {
  firstName: 'Erin',
  lastName: 'Harding'
}
const user3 = {
  firstName: 'Nandini',
  lastName: 'Bulusu'
}
const user4 = {
  firstName: 'Braeden',
  lastName: 'Jury'
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">
            <strong>{title}</strong>
          </h1>
          <div className="App-center">
         <Button bsClass="new-list-btn" bsSize="large" block><strong> New List </strong> </Button>
         </div>
         <div className = "App-center" >
         <p>
         - My Picks -
         </p>
         <div>
         <Button bsClass="list-btn" bsSize="large" block><strong> {user1.firstName} & {user2.firstName} </strong> </Button>
         </div>
         <div>
         <Button bsClass="list-btn" bsSize="large" block><strong> {user3.firstName} & {user4.firstName} </strong> </Button>
         </div>
         </div>
        </header>
      </div>
    );
  }
}

export default App;
