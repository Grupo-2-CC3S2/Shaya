import React from 'react'

import { connect } from 'react-redux';

import { userActions } from '../../redux/_actions';
import { Login } from '../Login';

const HomeApp = (props) => {

    return (
      <>
      {props.loggedIn === true && (<div>dashboard privado</div>)}
      {props.loggingIn === true && (<div>loading...</div>)}
      {props.loggedIn !== true && (<Login/>)}
      </>
    )
}


function mapState(state) {
    const { loggingIn } = state.authentication;
    const { loggedIn } = state.authentication;
    return { loggingIn, loggedIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(HomeApp);
export { connectedLoginPage as HomeApp };
