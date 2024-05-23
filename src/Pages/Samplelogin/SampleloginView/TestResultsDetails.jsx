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
                                                <td>weight of the sample</td>
                                                <td>w</td>
                                                <td>gm</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>sample qt</td>
                                                <td>m</td>
                                                <td>gm</td>
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
                                                <td>w</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>m</td>
                                                <td>10</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className='fs-5 fw-bold mt-2 mb-0'>Worksheet</p>
                                    WSQTY0001: <span className='text-muted bg-warning-subtle rounded p-1'>
                                        WSQTY0001
                                    </span> <hr className='text-light m-2' />
                                    WSQTY0002: <span className='text-muted bg-warning-subtle rounded p-1'>
                                        WSQTY0002
                                    </span>
                                    <hr className='text-light m-2' />
                                    <p className='l-2'><span className='fw-bold'>Procedure:</span>Weigh about (0.15)<span className='text-muted bg-warning-subtle rounded p-1'>
                                        WSQTY0001
                                    </span>
                                        gm of Calcium Hydroxide powder, and transfer in  a Idometric flask add (50)
                                        <span className='text-muted bg-warning-subtle rounded p-1'>
                                            WSQTY0002
                                        </span>
                                        ml of  0.1 N Iodine Solution, Keep the solution in dark for 30 minutes and Shake it in regular time interval  Titrate the excess iodine with 0.1 N Sodium Thiosulphate using starch as an indicator. End point is bluish to colorless. Carry out a blank titration without sample. <br />
                                        Weight of butter paper. <br />
                                        Weight of butter paper + sample <br />
                                        Weight of sample taken. <br />
                                        Blank value (B) <br />
                                        Titer value (A)</p>

                                    <span className='text-success d-flex justify-content-center'>Test Cases Passed Successfully with value 11.00</span> <br />
                                    <div className="d-flex">
                                        <button type="button" className="btn btn-danger px-4 mt-3 ms-auto" data-bs-dismiss="modal">Cancel</button>
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