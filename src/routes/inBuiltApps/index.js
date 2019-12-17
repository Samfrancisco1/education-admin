import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const InBuiltApps = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/Mail`}/>

    <Route path={`${match.url}/mail`} component={asyncComponent(() => import('./Mail'))}/>

  </Switch>
);

export default InBuiltApps;
