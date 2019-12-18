import React from 'react'
import Moment from 'react-moment'
import Chart from "./Chart"
import "../../style/App.scss"
import PropsTypes from "prop-types"

export default function Harian({
  dataStok
}) {
  const date = new Date();
  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="card-title">Total Transaksi</h1>
            <hr />
            <h1 className="card-text">0</h1>
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
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h4 className="card-title">Terjual</h4>
                <h4>0</h4>
                <h4 className="card-text">
                  <Moment format="L">{date}</Moment>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h4 className="card-title">Terbeli</h4>
                <h4>0</h4>
                <h4 className="card-text">
                  <Moment format="L">{date}</Moment>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 mt-5">
        <div className="card text-left">
          <div className="card-body">
            <Chart />
          </div>
        </div>
      </div>
      <div className="card wrap-table col-md-10 mt-5">
        <h4>Laporan Penjualan</h4>
        <table className="table">
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
              <td>01</td>
              <td>001</td>
              <td>Basman</td>
              <td>12</td>
              <th>12000</th>
              <th>144000</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card wrap-table col-md-10 mt-3">
        <h4>Laporan Pembelian</h4>
        <table className="table">
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
              <td>01</td>
              <td>001</td>
              <td>Jaya</td>
              <td>1000</td>
              <td>12000</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card wrap-table col-md-10 mt-3">
        <h4>Laporan Stok Barang</h4>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama Barang</th>
              <th>Kode Barang</th>
              <th>Unit</th>
              <th>Harga Beli</th>
              <th>Harga Jual</th>
              <th>Jumlah Stok</th>
            </tr>
          </thead>
          <tbody>
            {dataStok.map((stok, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stok.name}</td>
                  <td>{stok.product_code}</td>
                  <td>{stok.category}</td>
                  <td>{stok.price_in}</td>
                  <td>{stok.price_out}</td>
                  <th>{stok.stok}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="card wrap-table col-md-10 mt-3">
        <h4>Laaporan Mutasi</h4>
        <table className="table">
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
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Harian.PropsTypes = {
  dataStok: PropsTypes.string
}
