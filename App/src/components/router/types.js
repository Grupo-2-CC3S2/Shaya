import React from "react";
import { Redirect, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { userActions } from '../../_actions';


const PrivateRoute = ({ loggedIn,component: Component, ...rest }) => {
  console.log("provate", loggedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn === true ? (
          <Component {...props} />
        ) : (
          <>
          <div>Not Authorized</div>
           
          </>
        )
      }
    ></Route>
  );
};

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(PrivateRoute);
export { connectedLoginPage as PrivateRoute };
