import React from 'react'
import PropsTypes from "prop-types"

export default function Data({
    nameBarang,
    nameKode,
    nameCategory,
    nameBeli,
    nameJual,
    nameStok,
    valueBarang,
    valueKode,
    valueCategory,
    valueBeli,
    valueJual,
    valueStok,
    onChange,
    onSubmit,
    dataStok,
    onRemove,
    onUpdate,
    onAdd
}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <div className="card bg-aqua text-center">
                        <div className="card-body">
                            <h4 className="card-title">Product</h4>
                        </div>
                    </div>
                    <p className="mt-5">
                        <button onClick={onAdd} type="button" data-toggle="collapse" data-target="#contentId" aria-expanded="false"
                            aria-controls="contentId">
                            +
                            </button>
                    </p>
                    <div className="collapse" id="contentId">
                        <input type="text" placeholder="Nama Barang" onChange={onChange} name={nameBarang} value={valueBarang} />
                        <input type="text" placeholder="Kode Barang" onChange={onChange} name={nameKode} value={valueKode} />
                        <input type="text" placeholder="Category" onChange={onChange} name={nameCategory} value={valueCategory} />
                        <input type="text" placeholder="Harga Beli" onChange={onChange} name={nameBeli} value={valueBeli} />
                        <input type="text" placeholder="Harga Jual" onChange={onChange} name={nameJual} value={valueJual} />
                        <input type="text" placeholder="Stok" onChange={onChange} name={nameStok} value={valueStok} />
                        <button onClick={onSubmit}>Save</button>
                    </div>
                    <div className="card wrap-table col-md-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nama Barang</th>
                                    <th>Kode Barang</th>
                                    <th>Category</th>
                                    <th>Harga Beli</th>
                                    <th>Harga Jual</th>
                                    <th>Stok</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataStok.map((stok, index) => {
                                    return (
                                        <tr key={stok.id}>
                                            <td>{index + 1}</td>
                                            <td>{stok.name}</td>
                                            <td>{stok.product_code}</td>
                                            <td>{stok.category}</td>
                                            <td>{stok.price_in}</td>
                                            <td>{stok.price_out}</td>
                                            <th>{stok.stok}</th>
                                            <th><button onClick={() => onRemove(stok.id)}><i className="fas fa-trash    "></i></button></th>
                                            <th><button onClick={() => onUpdate(stok)} type="button" data-toggle="collapse" data-target="#contentId" aria-expanded="false"
                                                aria-controls="contentId" ><i className="fas fa-pencil-alt    "></i></button></th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

Data.propTypes = {
    dataStok: PropsTypes.array,
    onSubmit: PropsTypes.func,
    onChange: PropsTypes.func,
    nameBarang: PropsTypes.string,
    nameKode: PropsTypes.string,
    nameCategory: PropsTypes.string,
    nameBeli: PropsTypes.string,
    nameJual: PropsTypes.string,
    nameStok: PropsTypes.string,
    valueBarang: PropsTypes.string,
    valueKode: PropsTypes.string,
    valueCategory: PropsTypes.string,
    valueBeli: PropsTypes.string,
    valueJual: PropsTypes.string,
    velueStok: PropsTypes.string
};
