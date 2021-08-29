import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewScreen from "./newScreen";

const RouteName = () => {
  return (
    <Router>
      <Route path="/">
        <NewScreen />
      </Route>
    </Router>
  );
};

export default RouteName;
