import React, { Component } from 'react';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
