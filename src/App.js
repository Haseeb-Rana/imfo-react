import React, { Component } from 'react';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Dashboard from './components/Dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
