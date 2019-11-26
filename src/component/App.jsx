import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import PageHarian from '../container/dashboard/Harian'
import PageBulanan from '../container/dashboard/Bulanan'

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <div className="dashboard">
                            <div className="title-wrap">
                                <div className="title">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                            <div className="harian-bulanan">
                                <NavLink exact activeClassName="btn" to="/dashboard/harian">
                                    Harian
                                </NavLink>
                                <NavLink activeClassName="btn" to="/dashboard/bulanan">
                                    Bulanan
                                </NavLink>
                            </div>
                        </div>
                        <Switch>
                            <Route  path="/dashboard/harian" component={PageHarian} />
                            <Route path="/dashboard/bulanan" component={PageBulanan} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
