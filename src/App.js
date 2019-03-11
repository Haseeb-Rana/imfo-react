import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Signin />
        <Signup />

      </div>
    );
  }
}

export default App;
