
import React from "react";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

import { Router, Route, Redirect, hashHistory,IndexRoute } from 'react-router'

export default props=>(

    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='billingCycles' component={BillingCycle}></Route>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)