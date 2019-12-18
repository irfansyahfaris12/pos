import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../asset/logo/logo.png'
import '../style/Register.scss'

export default function Register({
    onClick,
    onChange,
    nameName,
    valueName,
    nameEmail,
    namePassword,
    nameCoPassword,
    valueEmail,
    valuePassword,
    valueCoPassword
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
                            <h5>Have an account? <Link to="/">SignIn</Link> </h5>
                        </div>
                        <div className="wrap-card">
                            <div className="card-login text-left" onSubmit={onClick}>
                            <div className="name">
                                    <input onChange={onChange} name={nameName} value={valueName} type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Name</label>
                                </div>
                                <div className="email">
                                    <input onChange={onChange} name={nameEmail} value={valueEmail} type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email</label>
                                </div>
                                <div className="password">
                                    <input onChange={onChange} name={namePassword} value={valuePassword} type="password" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Password</label>
                                </div>
                                <div className="password">
                                    <input onChange={onChange} name={nameCoPassword} value={valueCoPassword} type="password" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Co-Password</label>
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
