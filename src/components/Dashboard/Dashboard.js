import React from 'react';
import {connect} from 'react-redux';



const Dashboard =({isAuthenticated}) => (
     
       <p>This is Dashboard</p>
)

const mapStateToProp = (state) => {
  console.log("this is state")
  console.log(state)
  return {
      isAuthenticated: !! state.auth.token
  }
}

export default connect(mapStateToProp) (Dashboard);
