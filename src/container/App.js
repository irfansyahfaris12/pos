import React, { Component, Fragment } from 'react'
import { Switch, Route } from "react-router-dom"
import '../style/App.scss'
import App from "../component/App";
import Navbar from "../container/Navbar"
import Transaksi from "../container/transaksi/Transaksi"
import PageDatas from './datas/datas';

export default class PageApp extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <App/>
          </Route>
          <Route path="/data">
            <PageDatas/>
          </Route>
          <Route path="/transaksi">
            <Transaksi />
          </Route>
        </Switch>
      </Fragment>
    )
  }
}
