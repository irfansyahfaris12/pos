import React, { Component } from 'react'
import Data from "../../component/datas/Datas"
import Axios from 'axios'

export default class datas extends Component {
    state = {
        data: [],
        name: '',
        category: '',
        price_in: '',
        price_out: '',
        product_code: '',
        stok: '',
        id: '',
        isUpdate: false
    }
    componentDidMount() {
        this.handleGet()
    }

    handleGet = () => {
        Axios.get('https://laravel-pos-1999.herokuapp.com/api/product')
            .then(ress => {
                const data = ress.data

                this.setState({
                    data: data
                })
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    hanldeAdd = () => {
        this.setState({
            name: "",
            category: "",
            product_code: "",
            price_out: "",
            price_in: "",
            stok: "",
            isUpdate: false
        })
    }

    handlePos = () => {
        const dataInput = {
            name: this.state.name,
            category: this.state.category,
            product_code: this.state.product_code,
            price_out: this.state.price_out,
            price_in: this.state.price_in,
            stok: this.state.stok
        }
        Axios.post('https://laravel-pos-1999.herokuapp.com/api/product', dataInput)
            .then(res => {
                //console.log(res)
                alert('Data Added')
                this.handleGet()
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleRemove = (id) => {
        console.log('ini id', id)
        Axios.delete(`https://laravel-pos-1999.herokuapp.com/api/product/${id}`)
            .then(res => {
                //console.log("bisa", res)
                this.handleGet()
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleUpdate = (stok) => {
        const dataInput = {
            name: this.state.name,
            category: this.state.category,
            product_code: this.state.product_code,
            price_out: this.state.price_out,
            price_in: this.state.price_in,
            stok: this.state.stok
        }
        console.log("ini data input", dataInput)
        Axios.put(`https://cors-anywhere.herokuapp.com/https://laravel-pos-1999.herokuapp.com/api/product/${this.state.id}`, dataInput)
            .then(ress => {
                //console.log(ress)
                alert('Data Edited')
                this.setState({
                    name: "",
                    category: "",
                    product_code: "",
                    price_out: "",
                    price_in: "",
                    stok: "",
                    isUpdate: false
                })
                this.handleGet()

            })
            .catch(err => {
                console.log(err)
            })
    }

    handleEdit = (id) => {
        const idUpdate = id.id
        this.setState({
            name: id.name,
            category: id.category,
            product_code: id.product_code,
            price_out: id.price_out,
            price_in: id.price_in,
            stok: id.stok,
            isUpdate: true,
            id: idUpdate
        })
        //console.log(id)
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.handleUpdate()
        } else {
            this.handlePos()
        }
    }



    render() {
        return (
            <div>
                <Data
                    onAdd={this.hanldeAdd}
                    dataStok={this.state.data}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    nameBarang="name"
                    nameKode="product_code"
                    nameCategory="category"
                    nameBeli="price_in"
                    nameJual="price_out"
                    nameStok="stok"
                    valueBarang={this.state.name}
                    valueKode={this.state.product_code}
                    valueCategory={this.state.category}
                    valueBeli={this.state.price_in}
                    valueJual={this.state.price_out}
                    valueStok={this.state.stok}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleEdit}
                />
            </div>
        )
    }
}




