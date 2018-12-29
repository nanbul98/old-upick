import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import { title, users} from './App.js';

export class YourCategories extends Component {
  render() {
    return(
      <div className="App-home">
      <header className="App-side">
      <h1 className="title-side">
      <strong> {title} </strong>
      </h1>
      <h1 className="names-side">
      {users.user1.firstName} & {users.user2.firstName}
      </h1>
      </header>
      </div>
    )
  }
}
