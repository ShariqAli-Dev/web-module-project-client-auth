import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';

function App(props) {
  return (
    <>
      <div>
        <h1>This is the app component</h1>
      </div>

      <LoginForm />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: [],
  };
};

export default connect(mapStateToProps, {})(App);
