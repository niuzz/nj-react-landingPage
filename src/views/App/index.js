import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import Home from '../Home';
import List from '../List';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text: '要有光',
      color: 'primary'
    }
    this.changeBg = this.changeBg.bind(this)
  }

  changeBg(text) {
    this.setState({
      text: text
    })
  }
  
  render() {
    return (
      <Router>
        <div className={this.state.text === 'shine' ? 'App shine' : 'App'}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React SSR</h1>
          </header>
          <Switch>
            <Route 
              path="/" 
              render={(props) => <Home {...props} changeBg={this.changeBg} /> } 
              exact>
            </Route>
            <Route path="/list" component={List}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
