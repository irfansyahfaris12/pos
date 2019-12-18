import React, { Component } from 'react'
import Harian from '../../component/dashboard/Harian';
import Axios from 'axios';

export default class PageHarian extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        Axios.get('https://laravel-pos-1999.herokuapp.com/api/product')
            .then(ress => {
                const data = ress.data
                this.setState({
                    data: data
                })
                console.log(ress.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Harian dataStok={this.state.data} />
            </div>
        )
    }
}
