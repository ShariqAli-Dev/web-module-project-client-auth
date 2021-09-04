import React from 'react';
import { connect } from 'react-redux';
import { onChange, onSubmit } from '../actions/';

const LoginForm = (props) => {
  // state
  const { username, password } = props;
  //functions
  const { onChange } = props;

  return (
    <>
      <div>
        <h4>Oi Bruv U loggin In Or wat?</h4>
      </div>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          id='username'
          name='username'
          placeholder='Username'
          onChange={onChange}
        />
        <input
          value={password}
          id='password'
          name='password'
          placeholder='Password'
          onChange={onChange}
        />
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
  };
};

export default connect(mapStateToProps, { onChange })(LoginForm);
