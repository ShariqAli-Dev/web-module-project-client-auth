import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='login'>Login</Link>
          </li>
          <li>
            <Link to='home'>Home</Link>
          </li>
          <li>
            <Link to='friends'>Friends</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <PrivateRoute path='/friends' component={Friends} />
        <PrivateRoute path='/home' component={Welcome} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
