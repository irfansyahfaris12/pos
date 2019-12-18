import React, { Component } from 'react'
import Register from '../component/Register'
import Axios from 'axios'
import { Redirect } from "react-router-dom"

export default class PageRegister extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        c_password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = () => {
        const dataInput = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            c_password: this.state.c_password
        }
        Axios.post('https://laravel-pos-1999.herokuapp.com/api/register', dataInput)
            .then(ress => {
                console.log(ress)
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    c_password: ''
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmit = () => {
        const { password, c_password } = this.state;
        if (password !== c_password) {
            alert("Passwords don't match")
        }if(password < 6 ) {
            alert('password harus lebih dari 6')
        }else {
            this.signUp()
        }
    }

    render() {
        if(localStorage.getItem('token')){
            return <Redirect to="/dashboard/harian" />
        }
        return (
            <div>
                <Register
                    onChange={this.handleChange}
                    onClick={this.handleSubmit}
                    nameName="name"
                    nameEmail="email"
                    namePassword="password"
                    nameCoPassword="c_password"
                    valueName={this.state.name}
                    valueEmail={this.state.email}
                    valuePassword={this.state.password}
                    valueCoPassword={this.state.c_password}
                />
            </div>
        )
    }
}
