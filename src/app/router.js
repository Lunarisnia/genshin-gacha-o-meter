import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import { BannerPage } from "../pages/BannerPage";

export function IndexRouter() {
  return (
    <header className="App-header">
      <Router>
        <Switch>
          <Route path="/banner/:id">
            <BannerPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </header>
  );
}
