import React from 'react';
import { connect } from 'react-redux';
const LoginForm = (props) => {
  const { username, password } = props;
  return (
    <>
      <div>
        <form>
          <input
            value={username}
            id='username'
            name='username'
            placeholder='Username'
          />
          <input
            value={password}
            id='password'
            name='password'
            placeholder='Password'
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
