import React from 'react'
import './Department.css'

const Department = () => {
    return (


        <div className='mx-5'>
            <div className="">
                <div className="main-head py-5">
                    
                    <div className="title fw-bold fs-5">Department</div>
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
                    <div className="card-container py-5">
                        <div className="card shadow border-secondary">
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
                        <div className="card shadow border-danger">
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
                        <div className="card shadow border-warning ">
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
                        <div className="card shadow border-secondary ">
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
