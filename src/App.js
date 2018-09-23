import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Home from './containers/Home/Home'

class App extends Component {
  render () {
    return (
      <div className="App">

        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
