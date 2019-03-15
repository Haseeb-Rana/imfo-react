import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
        <ul className="nav-items">
                                
                                <li><NavLink className="btn btn-custom-primary" to='/signin'>Signin</NavLink></li>
                                <li><NavLink className="btn btn-custom-primary" to='/signup'>Signup</NavLink></li>
                            </ul>
    )
}

export default SignedOutLink;
