import React, { Component } from 'react'
import Logo from '../asset/logo/logo.png'
import "../style/Navbar.scss"


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <img src={Logo} alt="logo" />
                <i className="fa fa-list" onClick={this.props.side}></i>
            </nav>
        )
    }
}
