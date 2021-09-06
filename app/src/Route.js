import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NewScreen from "./component/newScreen";
import Main from "./component/main";

const RouteName = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/newScreen">
          <NewScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouteName;
