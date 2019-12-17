import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const School = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`}/>
    <Route path={`${match.url}/school`} component={asyncComponent(() => import('./School/index'))}/>
    <Route path={`${match.url}/branch`} component={asyncComponent(() => import('./Branch/index'))}/>

  </Switch>
);

export default School;
