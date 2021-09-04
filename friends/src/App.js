import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import { Link, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <>
      <Switch>
        <Route component={LoginForm} />
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
