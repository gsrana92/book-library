import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import HomePage from "../components/HomePage";
import Library from "../components/Library";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history = {history}>
      <div>
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/library" component={Library} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
