import React, { Component } from 'react'
import Navbar from "../component/Navbar"
import Sidebar from '../component/Sidebar'

export default class ConNavbar extends Component {
    state = {
        show: false,
    }

    showSidebar = () => {
        this.setState ({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                {/* {console.log(this.state.show)} */}
                <Navbar side={this.showSidebar} />
                <Sidebar sidebar={this.state.show} />
            </div>
        )
    }
}
