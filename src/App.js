import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// utils
import routes from './routes';
import studentsData from './studentsDataBase.json';

// styles
import { AppContainer, Nav, Logo } from './App.styles';

// components
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Students from './containers/Students/Students';

const SideNav = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/students'>Students</Link>
        </li>
      </ul>
    </Nav>
  );
};

const App = () => {
  const [students, setStudents] = useState(studentsData);

  return (
    <Router>
      <AppContainer>
        <SideNav />
        <Switch>
          <Route path='/students'>
            <Students students={students} setStudents={setStudents} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
