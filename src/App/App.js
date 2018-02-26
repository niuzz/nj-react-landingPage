import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import {Link, Route} from 'react-router-dom';
import SetPage from "../Set/Set";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React...</h1>
        </header>
        <Link to = "/setPage">
          <Button variant = "raised" color = "primary" > 此处可以点击 </Button>
        </Link>
        <div className="Route-wrap">
          <Route path = "/setPage" component = {SetPage}> 
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
