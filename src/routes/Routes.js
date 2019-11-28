import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from '../container/App';
import Login from "../component/Login"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/dashboard/harian" component={App} />
                <Route      path="/dashboard/bulanan" component={App} />
                <Route      path="/transaksi" component={App} />
                <Route     exact path="/"     component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
