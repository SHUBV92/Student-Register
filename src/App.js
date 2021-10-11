import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';
import StudentData from './studentsDataBase.json';

// styles
import { AppContainer, Nav, Logo } from './App.styles';

// components
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Students from './containers/Students/Students';
import EditStudents from './containers/EditStudents/EditStudents';

function App() {
  const [students, setStudents] = useState(StudentData);
  return (
    <Router>
      <AppContainer>
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

        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <route.sidebar />
          </Route>
        ))}
        <div>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.sidebar />
            </Route>
          ))}
        </div>
        {/* <Switch>
          {routes.map(({ path, Component }, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={(props) => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        )
                      : path,
                    ...rest,
                  }));

                console.log(`Generated crumbs for ${props.match.path}`);
                crumbs.map(({ name, path }) => console.log({ name, path }));

                return (
                  <div className='p-8'>
                    <Component
                      {...props}
                      students={students}
                      setStudents={setStudents}
                    />
                  </div>
                );
              }}
            />
          ))}
        </Switch> */}
      </AppContainer>
    </Router>
  );
}

export default App;
