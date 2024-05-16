import React from 'react'
import './Department.css'

const Department = () => {
    return (


        <div className='container p-4'>
            <div className="container-fluid">
                <div className="main-head pt-4 pb-4">
                    <h4 className="fw-bold mb-4 mt-3">Department</h4>
                </div>

                <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>

                        </button>

                    </div>
                </div>


                <div className="">
                    <div className="card-container pt-4">
                        <div className="card border-secondary">
                            <div className="card-body">
                                <h5 className="card-title">Admin</h5>
                                <div className="justify-container">
                                    <p className="card-text">  12 Employee</p>
                                    <a href="/admin" className="btn btn-secondary">
                                        <img src='/images/plus-icon.svg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card border-danger">
                            <div className="card-body">
                                <h5 className="card-title">Quality Assurance</h5>
                                <div className="justify-container">
                                    <p className="card-text">3 Employee</p>
                                    <a href="/qualityAssurance" className="btn btn-danger">
                                        <img src='/images/plus-icon.svg' />
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="card   border-warning ">
                            <div className="card-body">
                                <h5 className="card-title">Quality Check</h5>
                                <div className="justify-container">
                                    <p className="card-text">2 Employee</p>
                                    <a href="/qualityCheck" className="btn btn-warning">
                                        <img src='/images/plus-icon.svg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card border-secondary ">
                            <div className="card-body">
                                <h5 className="card-title">Store</h5>
                                <div className="justify-container">
                                    <p className="card-text">2 Employee</p>
                                    <a href="/store" className="btn btn-secondary">
                                        <img src='/images/plus-icon.svg' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Department
