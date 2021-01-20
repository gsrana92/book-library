import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import Library from "../components/Library";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/library" component={Library} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
