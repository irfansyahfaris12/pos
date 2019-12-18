import React, { Component } from 'react'
import Login from '../component/Login'
import Axios from 'axios'
import { Redirect } from "react-router-dom"

export default class PageLogin extends Component {
    state = {
        email: '',
        password: '',
        token: '',
        redirect: false
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signIn = () => {
        const dataInput = {
            email: this.state.email,
            password: this.state.password
        }

        Axios.post('https://laravel-pos-1999.herokuapp.com/api/login', dataInput)
            .then(ress => {
                localStorage.setItem('token', ress.data.success.token)
                console.log(ress)
                this.setState({
                    token: ress.data.success.token,
                    redirect: true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        if(localStorage.getItem('token')){
            return <Redirect to="/dashboard/harian" />
        }
        return (
            <div>
                <Login
                    onChange={this.handleChange}
                    nameEmail="email"
                    namePassword="password"
                    valueEmail={this.state.email}
                    valuePassword={this.state.password}
                    onClick={this.signIn}
                />
            </div>
        )
    }
}
