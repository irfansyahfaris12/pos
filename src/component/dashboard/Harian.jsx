import React, { Component } from 'react'
import Moment from 'react-moment'
import Chart from "./Chart"
import "../../style/App.scss"

export default class Harian extends Component {
  render() {
    const date = new Date();
    return (
      <div className="row mt-5">
        <div className="col-md-5">
          <div class="card text-center">
            <div class="card-body">
              <h1 class="card-title">Total Transaksi</h1>
              <hr />
              <h1 class="card-text">0</h1>
              <hr />
              <i>
                <Moment format="L">{date}</Moment>
              </i>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12 mt-2">
              <div class="card">
                <div class="card-body d-flex justify-content-between">
                  <h4 class="card-title">Terjual</h4>
                  <h4>0</h4>
                  <h4 class="card-text">
                    <Moment format="L">{date}</Moment>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div class="card">
                <div class="card-body d-flex justify-content-between">
                  <h4 class="card-title">Terbeli</h4>
                  <h4>0</h4>
                  <h4 class="card-text">
                    <Moment format="L">{date}</Moment>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 mt-5">
          <div class="card text-left">
            <div class="card-body">
              <Chart />
            </div>
          </div>
        </div>
        <div className="wrap-table col-md-10 mt-5">
          <h4>Laporan Penjualan</h4>
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Kode Barang</th>
                <th>Member</th>
                <th>Jumlah Barang</th>
                <th>Harga Satuan</th>
                <th>Jumlah Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">01</td>
                <td>001</td>
                <td>Basman</td>
                <td>12</td>
                <th>12000</th>
                <th>144000</th>
              </tr>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wrap-table col-md-10">
          <h4>Laporan Pembelian</h4>
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Kode Barang</th>
                <th>Pemasok</th>
                <th>Jumlah Barang</th>
                <th>Harga Satuan</th>
                <th>Jumlah Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">01</td>
                <td>001</td>
                <td>Jaya</td>
                <td>1000</td>
                <td>12000</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wrap-table col-md-10">
          <h4>Laporan Stok Barang</h4>
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Kode Barang</th>
                <th>Unit</th>
                <th>Harga Beli</th>
                <th>Harga Jual</th>
                <th>Jumlah Stok</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">01</td>
                <td>001</td>
                <td>kg</td>
                <td>10000</td>
                <td>12000</td>
                <th>10000</th>
              </tr>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="wrap-table col-md-10">
          <h4>Laaporan Mutasi</h4>
          <table class="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Kode Barang</th>
                <th>Nama Barang</th>
                <th>Stok Barang</th>
                <th>Stok Awal</th>
                <th>Stok masuk</th>
                <th>Stok Keluar</th>
                <th>Saldo Awal</th>
                <th>Nilai Masuk</th>
                <th>Nilai Keluar</th>
                <th>Saldo Akhir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
