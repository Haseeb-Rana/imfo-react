import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (

        <main className="">
        <section className="section container container-palette">
            <div className="container">
        <div className="row">
        <div className="col-sm-6 col-centered">
        <div className="widget widget-styles" id="form2">
            <div className="header content t-left">
                <h2>Register</h2>
            </div>
            <form action="#" method="post" className="local-form content-box">                                                 
                <div className="form-group">
                    <label className="control-label">First and last name</label>
                    <div className="controls">
                        <input type="text" name="name_surname" value="" className="form-control" id="inputNameSurname" placeholder="First and last name" />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <div className="controls">
                        <input type="text" name="username" value="" className="form-control" id="inputUsername" placeholder="Username" />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <div className="controls">
                        <input type="text" name="mail" value="" className="form-control" id="inputMail" placeholder="Email" />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label" for="inputPassword2">Password</label>
                    <div className="controls">
                        <input type="password" name="password" value="" className="form-control" id="inputPassword2" placeholder="Password" autocomplete="off" />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">Confirm password</label>
                    <div className="controls">
                        <input type="password" name="password_confirm" value="" className="form-control" id="inputPasswordConfirm" placeholder="Confirm password" autocomplete="off" />                                  
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label">Address</label>
                    <div className="controls">
                        <textarea name="address" cols="40" rows="3" placeholder="Address" className="form-control"></textarea>                                  
                    </div>
                </div>          
                <div className="form-group">
                    <label className="control-label">Phone</label>
                    <div className="controls">
                        <input type="text" name="phone" value="" className="form-control" id="inputPhone" placeholder="Phone" />                                  
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
    </div>)
        </div>
        </section>
    </main>
    )
    }
}

export default Signup;
