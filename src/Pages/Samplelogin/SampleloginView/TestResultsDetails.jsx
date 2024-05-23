import React, { useState } from 'react'

const TestResultsDetails = () => {
    const [approved, setApproved] = useState(false);

    const handleDecision = (data) => {
        setApproved(data)
    }

    return (
        <>
            <div className='m-5 shadow rounded px-5 py-3'>
                <div className=" my-3">
                    <div className="fw-bolder fs-4">Test Results Details</div>
                </div>
                <table className='table table-bordered border-dark'>
                    <tbody>
                        <tr>
                            <td className="text-light bg-info">A.R No.</td>
                            <td>ARFP0000011	</td>
                            <td className="text-light bg-info">Product/Material (Code)	</td>
                            <td>FGTAB000D2857</td>
                        </tr>
                        <tr>
                            <td className="text-light bg-info">Specification ID	</td>
                            <td>648c1904c30b4b0cb1a4534e</td>
                            <td className="text-light bg-info">Sample Type	</td>
                            <td>Finished Product</td>
                        </tr>
                        <tr>
                            <td className="text-light bg-info">Test Name</td>
                            <td>Total Fungal Count	</td>
                            <td className="text-light bg-info">Due On	</td>
                            <td>Invalid date</td>
                        </tr>
                        <tr>
                            <td className="text-light bg-info">View Details	</td>
                            <td>COA Preview</td>
                            <td className="text-light bg-info">Raw Data Preview</td>
                            <td>Sample Status</td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex flex-row justify-content-start align-items-center mx-4 my-4">
                    <div className="h6">Test Results Data Transfer Validation ✔️</div>
                    <div className="btn btn-primary mx-4 my-2" data-bs-toggle="modal" data-bs-target="#resultValueModal" >View</div>
                    <div className="modal fade" id="resultValueModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Result values</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body px-5">
                                    <h3 className="fs-5 fw-bold mt-4">Total Fungal Count</h3>
                                    <h2 className="fs-5 ">Formula</h2>
                                    <p className='fs-6'>c</p>
                                    <p className='fs-5 fw-bold mt-4 mb-0'>Variable Data</p>
                                    <table className='table table-bordered border-dark'>
                                        <thead>
                                            <tr>
                                                <th>Sno.</th>
                                                <th>Variables</th>
                                                <th>Symbol</th>
                                                <th>UOM</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Count</td>
                                                <td>c</td>
                                                <td>cfu/g</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='fs-5 fw-bold mt-2 mb-0'>Execution data</p>
                                    <table className='table table-bordered border-dark'>
                                        <thead>
                                            <tr>
                                                <th>Sno.</th>
                                                <th>Symbol</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>c</td>
                                                <td>80</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <span className='text-success d-flex justify-content-center'>Test Cases Passed Successfully with value 80.00</span> <br />
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-danger text-light mx-4">Submit</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h5 fw-bolder">View Details</div>
                <table className='table table-bordered border-dark my-3'>
                    <thead>
                        <tr>
                            <th className='bg-info text-light'>SNo.</th>
                            <th className='bg-info text-light'>Test In Charge</th>
                            <th className='bg-info text-light'>Initiated On</th>
                            <th className='bg-info text-light'>Test Status</th>
                            <th className='bg-info text-light'>Cycle Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Admin</td>
                            <td>03-Oct-2023 22:57</td>
                            <td>INITIATED</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Admin</td>
                            <td>05-Oct-2023 15:50</td>
                            <td>FORWARD FOR INVESTIGATION</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Admin</td>
                            <td>05-Oct-2023 15:54</td>
                            <td>QC INVESTIGATION</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Admin</td>
                            <td>05-Oct-2023 22:57</td>
                            <td>SENT TO INVESTIGATION</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="h5 fw-5 mt-4">Reviewer Decesion</div>
                <div className="d-flex flex-row mx-3 gap-4 mb-4">
                    <div className="form-group">
                        <input className='form-check-input mx-2' type="radio" name="decesion" id="approved" onChange={(e) => handleDecision(e)} />
                        <label htmlFor="approved">Approved</label>
                    </div>
                    <div className="form-group">
                        <input className='form-check-input mx-2' type="radio" name="decesion" id="investigation" onChange={(e) => handleDecision(e)} />
                        <label htmlFor="investigation">Investigation</label>
                    </div>
                </div>

                {approved && <div className="show my-4">
                    <div className="mb-3">
                        <label for="formFile" class="form-label">Refrence Documents</label>
                        <input class="form-control" type="file" id="formFile"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Cao Footer Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>}
                <div className="btn btn-primary">Submit</div>
            </div>
        </>
    );
}

export default TestResultsDetails