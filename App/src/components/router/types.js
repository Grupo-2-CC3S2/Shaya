import React from "react";
import { Redirect, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { userActions } from '../../redux/_actions';
import { Login } from '../Login';


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
           <Redirect><Login/></Redirect>
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
