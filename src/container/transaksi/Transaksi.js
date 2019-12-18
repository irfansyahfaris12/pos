import React, { Component } from 'react'
import Transaksi from '../../component/transaksi/Transaksi'
import Axios from "axios"

export default class Pagetransaksi extends Component {
    state = {
        data: [],
        dataTransaksi: [],
        id: '',
        kode_produk: '',
        produk: '',
        harga: '',
        jumlah: "",
        total: '',
        stateidamar: ""
    }
    componentDidMount() {
        Axios.get('https://laravel-pos-1999.herokuapp.com/api/product')
            .then(ress => {
                const data = ress.data
                this.setState({
                    data: data
                })
                // console.log(ress.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    posToAPI = (index) => {
        const dataCart = {
            dataTransaksi: this.state.dataTransaksi
        }

        console.log("cart", dataCart['dataTransaksi'])
         dataCart['dataTransaksi'].map((res, id) => {
            console.log("amar id" , id)
            Axios
            .post('https://laravel-pos-1999.herokuapp.com/api/transaksi',dataCart['dataTransaksi'][`${id}`])
            .then(ress => {
                console.log(ress)
            })

            // Axios.put("https://laravel-pos-1999.herokuapp.com/api/product",)
        })
        // Axios.post('https://laravel-pos-1999.herokuapp.com/api/transaksi',dataCart['dataTransaksi'])
        //     .then(ress => {
        //         console.log(ress)
        //     })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    handleCart = (stok) => {
        console.log("dari data", stok)
        const { dataTransaksi } = this.state
        dataTransaksi.push({
            // id:stok.id,
            kode_produk: stok.product_code,
            produk: stok.name,
            harga: stok.price_out,
            jumlah: this.state.jumlah,
            total: this.state.jumlah * stok.price_out
        });
        this.setState({
            dataTransaksi
        })
        
    }


    render() {
        return (
            <div>
                <Transaksi dataStok={this.state.data} onSubmit={this.posToAPI} onCart={this.handleCart} dataTransaksi={this.state.dataTransaksi} jumlah={this.state.jumlah} onChange={this.handleChange} nameTr="jumlah" />
            </div>
        )
    }
}
