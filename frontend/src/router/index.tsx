import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { routes } from "./routes";

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map((route) => (
              <li className="text-lg">
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
          <Route exact path="/">
            <Redirect to={routes[0].path} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
