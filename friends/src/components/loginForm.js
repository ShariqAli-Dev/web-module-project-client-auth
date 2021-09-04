import React from 'react';
import { connect } from 'react-redux';
import { onChange, loginUser } from '../actions';

const LoginForm = (props) => {
  // state
  const { username, password } = props;
  //functions
  const { onChange, loginUser } = props;

  return (
    <div>
      <div>
        <h4>Oi Bruv U loggin In Or wat?</h4>
      </div>

      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await loginUser({ username, password });
            props.history.push('/home');
          } catch (error) {
            console.log(error);
            alert(error.message);
          }
        }}
      >
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
  };
};

export default connect(mapStateToProps, { onChange, loginUser })(LoginForm);
