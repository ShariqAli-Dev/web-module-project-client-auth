import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import { Link, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent';
function App(props) {
  return (
    <>
      <Switch>
        <Route path='/home' component={TestComponent} />
        <Route component={LoginForm} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
