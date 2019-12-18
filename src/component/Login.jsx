import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../asset/logo/logo.png'
import "../style/Login.scss"

export default function Login({
    onChange,
    nameEmail,
    namePassword,
    valueEmail,
    valuePassword,
    onClick
}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="header">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form text-center" onSubmit={onClick}>
                        <div className="login-title">
                            <h1>Login</h1>
                        </div>
                        <div className="new-user">
                            <h5>New To Delta? <Link to="/register">SignUp</Link> </h5>
                        </div>
                        <div className="wrap-card">
                            <div className="card-login text-left" onSubmit={onClick}>
                                <div className="email">
                                    <input onChange={onChange} name={nameEmail} value={valueEmail} type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email</label>
                                </div>
                                <div className="password">
                                    <input onChange={onChange} name={namePassword} value={valuePassword} type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Password</label>
                                </div>
                                <button onClick={onClick}>SignIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
