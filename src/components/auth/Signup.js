import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authAction'

class Signup extends Component {
    state = {
        email: "",
        password: "",
        fullName: ""
    }

    
    handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        })}
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);   
        this.props.signUp(this.state).then(() => this.props.history.push("/"));
         
      }

  render() {
    return (

        
        <section className="section container container-palette">
            <div className="container">
        <div className="row">
        <div className="col-md-6 col-centered">
                <h2>Register</h2>
            </div>
            <form className="local-form content-box" onSubmit={this.handleSubmit}>                                                 
                <div className="form-group">
                    <label className="control-label">First and last name</label>
                    <div className="controls">
                        <input type="text" name="fullName" className="form-control" id="fullName" placeholder="First and last name" onChange={this.handleChange} />                                  
                    </div>
                </div>
    
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <div className="controls">
                        <input type="text" name="email"  className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label" for="password">Password</label>
                    <div className="controls">
                        <input type="password" name="password"  className="form-control" id="password" placeholder="Password" autocomplete="off" onChange={this.handleChange} />                                  
                    </div>
                </div>   
                <div className="form-group">
                    <div className="controls">
                        <button type="submit" className="btn btn-danger">Register</button>
                        <button type="reset" className="btn btn-success">Reset</button>
                    </div>
                </div>
            </form>
        
        </div>
    </div>   
</section>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => dispatch(signUp(user))
    }
}

export default connect(null,mapDispatchToProps)(Signup);
