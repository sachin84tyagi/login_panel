import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from "./components/login/login"
import Dashboard from "./components/dashboard/dashboard";
import User from "./components/users/users";
import Logout from "./components/login/logout";
import UserAdd from "./components/users/useradd";
import UserEdit from "./components/users/useredit"
import { PrivateRoute } from "./helper/PrivateRoute"

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/users" exact component={User} />
            <PrivateRoute path="/useradd" exact component={UserAdd} />
            <PrivateRoute path="/useredit/:id" exact component={UserEdit} />
            <PrivateRoute path="/logout" exact component={Logout} />
        </Switch>
    );
}

export default Router;