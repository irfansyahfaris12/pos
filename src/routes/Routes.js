import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from '../container/App';
import Login from "../container/Login"
import PageRegister from '../container/Register';
import PageLanding from '../container/Landing';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard/harian" component={App} />
                <Route path="/dashboard/bulanan" component={App} />
                <Route path="/transaksi" component={App} />
                <Route path="/data" component={App} />
                <Route   exact path="/" component={Login} />
                <Route path="/register" component={PageRegister} />
                <Route path="/landing" component={PageLanding} />
            </Switch>
        </BrowserRouter>
    )
}
