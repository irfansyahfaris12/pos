import React from 'react'
import "../style/Landing.scss"
import { Link } from "react-router-dom"
import Logo from "../asset/logo/logo.png"
import a from '../asset/vektor/a.jpg'

export default function Landing() {
    return (
        <div>
            <div className="row container-fluid">
                <div className="col-md-12">
                    <div className="header-landing">
                        <img src={Logo} alt="logo" />
                        <div className="opsi">
                            <Link>
                                Home
                            </Link>
                            <Link>
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                    <div className="main-lan col-md-6">
                        <div className="isi">
                        <h1>Delta POS</h1>
                        <p>Poin of sale system for manage your bisnis</p>
                        <a className="btn" href="/" role="button">GET STRARTED</a>
                        </div>
                    </div>
                    <div className="main-right col-md-6">
                        <img src={a} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAACA8" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,202.7C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
}
