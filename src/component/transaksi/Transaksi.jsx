import React from 'react'
import "../../style/App.scss"

export default function Transaksi({
    dataStok,
    onCart,
    dataTransaksi,
    onSubmit,
    jumlah,
    onChange,
    nameTr
}) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <div className="title-transaksi">
                            <h3>Transaksi Penjualan</h3>
                            <hr />
                        </div>
                        <div className="col-md-10 text-center">
                            <label htmlFor="label">kode/product</label>
                            <input type="text" />
                            <button type="button" data-toggle="modal" data-target="#modelId">
                                ...
                                    </button>

                            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content justify-content-center">
                                        <div className="modal-header">
                                            <input type="text" />
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Kode Product</th>
                                                        <th>Product</th>
                                                        <th>Category</th>
                                                        <th>Stok</th>
                                                        <th>Harga</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dataStok.map((stok, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{stok.product_code}</td>
                                                                <td>{stok.name}</td>
                                                                <td>{stok.category}</td>
                                                                <th>{stok.stok}</th>
                                                                <td>{stok.price_out}</td>
                                                                <td><button onClick={() => onCart(stok)}>+</button></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Kode Product</th>
                                        <th>Product</th>
                                        <th>Harga</th>
                                        <th>Jumlah</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTransaksi.map((trans, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{trans.kode_produk}</td>
                                                <td>{trans.produk}</td>
                                                <td>{trans.harga}</td>
                                                <td><input type="number" onChange={onChange} name={nameTr} value={jumlah}/></td>
                                                <td>{+jumlah * +trans.total}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                                    <button onClick={onSubmit}>save</button>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mt-5">
                                <div className="card text-left">
                                    <div className="card-body">
                                        <h4 className="card-title">Rp.0</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5">
                                <input type="text" readOnly placeholder="Total" />
                                <input type="text" readOnly placeholder="bayar" />
                                <input type="text" readOnly placeholder="kembali" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

