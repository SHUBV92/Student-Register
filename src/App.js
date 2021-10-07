import Form from './components/Form';
// import Home from './containers/Home';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Students from './containers/Students/Students';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/students'>Students</Link>
            </li>
            <li>
              <Link to='/register'>Add a new Student</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/students'>
            <Students />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
