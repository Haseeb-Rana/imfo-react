import React, { Component } from 'react'

class Signin extends Component {
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
                            <form action="#" method="post" className="local-form content-box"> 
                                <div className="form-group">
                                    <label className="control-label" htmlFor="inputUsername2">Username</label>
                                    <div className="">
                                        <input type="text" name="username"  className="form-control" id="inputUsername2" placeholder="Username" />                      
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" htmlFor="inputPassword1">Password</label>
                                    <div className="controls">
                                        <input type="password" name="password"  className="form-control" id="inputPassword1" placeholder="Password" />                      
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

export default Signin;
