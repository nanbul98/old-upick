  import React, { Component } from 'react';
  import { Button } from 'react-bootstrap';
  import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
  import './App.css';
  import { PickingList } from './PicksList.js';
  import { YourCategories } from './YourPicks.js';

  export const title = 'UPick';
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

export const users = {user1, user2, user3, user4};


  class MainPage extends Component {
    pickingList() {
      window.location = "/PickingList";
    }
    yourPicks() {
      window.location = "/YourCategories";
    }
     render() {

      return (
        <div className="App">
        <Router>
        <Switch>
    <Route path="/PickingList" component={ PickingList } />
    <Route path="/YourCategories" component={ YourCategories } />
    </Switch>
  </Router>

          <header className="App-home">
            <h1 className="title">
              <strong>{title}</strong>
            </h1>

            <div className="App-center">
           <Button bsClass="new-list-btn" bsSize="large" block onClick={this.pickingList}><strong> New List </strong> </Button>
           </div>

           <div className = "App-center" >
           <p>
           - My Picks -
           </p>
           <div>
           <Button bsClass="list-btn" bsSize="large" block onClick={this.yourPicks}><strong> {user1.firstName} & {user2.firstName} </strong> </Button>
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




  export default MainPage;
