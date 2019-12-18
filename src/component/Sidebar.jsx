import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Sidebar.scss"
import Logo from "../asset/logo/logo.png"

const Sidebar = (props) => {
    return (
        <div className="col-md-2">
            <div id={props.sidebar ? 'sidebar-show' : 'sidebar'} className="card sidebar text-center">
                <div className="title-sidebar">
                    <h3>Delta</h3>
                    <h4>Poin Of Sale</h4>
                    <hr />
                </div>
                <div className="user">
                    <img src={Logo} alt="" />
                    <p>Kambing Hitam</p>
                </div>
                <div className="isi-sidebar text-left">
                    <Link to="/dashboard/harian">
                        <i className="fas fa-layer-group    "> Dashboard</i>
                    </Link>
                    <Link to="/data">
                        <i className="fas fa-database    "> Data</i>
                    </Link>
                    <Link to="/transaksi">
                        <i className="fa fa-credit-card" aria-hidden="true"> Transaksi</i>
                    </Link>
                </div>
                <div className="footer-sidebar text-left    ">
                    <Link to="/setting">
                        <i className="fa fa-cog" aria-hidden="true"> Setting</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

