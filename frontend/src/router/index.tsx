import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";

import { routes } from "./routes";

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex gap-6 justify-center mx-auto my-2">
            {routes.map((route) => (
              <li className="text-lg" key={route.label}>
                <NavLink
                  to={route.path}
                  className="text-blue-500 hover:text-blue-800"
                  activeClassName="font-bold"
                >
                  {route.label}
                </NavLink>
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
