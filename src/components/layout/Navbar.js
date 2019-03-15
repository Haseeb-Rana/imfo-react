import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from '../layout/SignedInLink'
import {connect} from 'react-redux'
import SignedOutLink from '../layout/SignedOutLink'





const Navbar = (props) => {
    const {isAuthenticated} = props;
    console.log(isAuthenticated);
    const links = isAuthenticated ? <SignedInLink /> : <SignedOutLink />
    return (
        <header className="header">
            <div className="container container-palette top-bar overflow top-bar-black t-overflow affix-menu">
                <div className="container">
                    <div className="clearfix">
                        <div className="pull-left logo"><Link to='/'>IMFO</Link>
                        </div>      
                            <div className="top-bar-btns ">                         
                            {links}
                            </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
  }

const mapStateToProps = (state) => {
   return { isAuthenticated: !!state.auth.token
}
}
export default connect(mapStateToProps) (Navbar);