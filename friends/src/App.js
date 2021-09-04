import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import TestComponent from './components/TestComponent';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='home/friends'>Home</Link>
          </li>
          <li>
            <Link to='friends'>Friends</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <PrivateRoute path='/home' component={TestComponent} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
