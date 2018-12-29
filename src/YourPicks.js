import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import { title, user1, user2, user3, user4 } from './App.js';

export class YourCategories extends Component {
  render() {
    return(
      <div className="App-home">
      <h1 className="title-side">
      <strong> {title} </strong>
      </h1>
      <h1 className="users-side">
      {user1.firstName} & {user2.firstName}
      </h1>
      </div>
    )
  }
}
