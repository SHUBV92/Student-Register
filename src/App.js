import { Breadcrumbs } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BreadCrumb from './components/BreadCrumb';
import routes from './routes';

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
                    <Component {...props} />
                  </div>
                );
              }}
            />
          ))}
          {/* <Route path='/students'>
            <Students />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
