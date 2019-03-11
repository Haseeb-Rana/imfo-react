import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authAction'

class Signin extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })
        
       
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
        
      }
  render() {
    return (
        <main className="">
        <section className="section container container-palette">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-centered">
                        <div className="widget widget-styles" id="form">
                            <div className="header content t-right">
                                <h2>Login</h2>
                            </div>
                            <form onSubmit={this.handleSubmit} className="local-form content-box"> 
                                <div className="form-group">
                                    <label className="control-label" htmlFor="email">Username</label>
                                    <div className="">
                                        <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="password">Password</label>
                                    <div className="controls">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" id="remember" value="true" /> Remember me </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="controls">
                                        <button type="submit" className="btn btn-danger">Sign in</button>
                                        <button type="reset" className="btn btn-default">Reset</button>
                                        <a href="#"><em>Forget password?</em></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    </main>
    )
  }
}

const mapDispatchToProp = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }
}

export default connect(null,mapDispatchToProp)(Signin);