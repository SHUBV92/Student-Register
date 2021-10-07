import Form from './components/Form';
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
        <Form />
      </div>
    </Router>
  );
}

export default App;
