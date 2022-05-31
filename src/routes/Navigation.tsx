import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages'
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({path, name}) => (
                  <li key={ name }>
                    <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
            {/* <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy 3</NavLink>
            </li> */}

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(( {path, Component} ) => (
                <Route path={path} key={path}>
                  {Component}
                </Route>
              ))
            }

            <Redirect to={routes[0].path} />
          </Switch>
          
        {/* <Switch>
          <Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LazyPage3 />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}