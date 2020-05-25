import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  if(props.authState.isLoggedIn) {
    return (
      <Route
				{...rest}
				render={props => {
					return <Component {...props} />;
				}}
			/>
    );
  } else {
    return <Redirect to={{ pathname: "/" }} />
  }
}

const mapStateToProps = state => ({
  authState: state.auth
})

export default withRouter(connect(mapStateToProps, null)(ProtectedRoute));