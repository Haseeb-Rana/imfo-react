import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedInLink = () => {
    return (
        <div className="mainbar">
                <div className="bar-head top-bar clearfix">		
                    <div className="profile-card pull-right">
                        <a href="#" className="profile-card-image">
                            <img src="assets/img/placeholder/post-preview.jpg" alt="" />
                        </a>
                        <div className="profile-body">
                            Angela Devis
                        </div>
                    </div>
                    <a href="admin_3.html" className="btn btn-transparent pull-right">Add Listing</a>				
                </div>
               
            </div>
    )
}

export default SignedInLink;
