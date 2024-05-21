import React from 'react'
import { IoEyeSharp } from "react-icons/io5";

const View = () => {
    return (
        <div className='m-5 shadow rounded px-5 py-3'>
            <div className="d-flex justify-content-between my-3">
                <div className="fw-bolder fs-4">Sample Login Details</div>
                <div className="btn btn-primary">Copy AR No.</div>
            </div>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <td className="text-light bg-info">A.R No.</td>
                        <td>ARPC0000097	</td>
                        <td className="text-light bg-info">Registered On</td>
                        <td>17/05/2024</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Sample Type</td>
                        <td>Petrochemical</td>
                        <td className="text-light bg-info">Party Name</td>
                        <td>MIT Power</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Product/Material Code</td>
                        <td>Hydraulic Oil</td>
                        <td className="text-light bg-info">Days to Complete</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Generic Name</td>
                        <td>hyo</td>
                        <td className="text-light bg-info">Specification Id</td>
                        <td>HOS 234</td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Set Days to Complete</td>
                        <td><input type="text" className='form-control' defaultValue={10} readOnly /></td>
                        <td className="text-light bg-info">Due On</td>
                        <td><input type="date" className='form-control' defaultValue={'2024-12-12'} /></td>
                    </tr>
                    <tr>
                        <td className="text-light bg-info">Sample In Charge</td>
                        <td>
                            <select className='form-select'>
                                <option selected>Select</option>
                                <option value="Analyst">Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className="text-light bg-info">QA approval Required</td>
                        <td className='d-flex gap-3'>
                            <input type="radio" className='form-check-input' id="yes" name='approval' /> <label htmlFor="yes">Yes</label>
                            <input type="radio" className='form-check-input' id="no" name='approval' /> <label htmlFor="no">No</label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn btn-primary mx-4 my-2">Submit</div>
            <table className='table table-bordered my-3'>
                <thead>
                    <tr>
                        <th className='bg-info text-light'>SNo.</th>
                        <th className='bg-info text-light'>Specification</th>
                        <th className='bg-info text-light'>Test Name</th>
                        <th className='bg-info text-light'>Worksheet</th>
                        <th className='bg-info text-light'>Test In-Charge</th>
                        <th className='bg-info text-light'>Test Status</th>
                        <th className='bg-info text-light'>Updated On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>HOS 234</td>
                        <td>Water Content PPM</td>
                        <td>water content kf worksheet</td>
                        <td>
                        <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1'/> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>HOS 234</td>
                        <td>	Viscosity @40C</td>
                        <td>-</td>
                        <td>
                        <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1'/> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>HOS 234</td>
                        <td>	Total Acid Number (TAN)</td>
                        <td>-</td>
                        <td>
                        <select className='form-select' disabled>
                                <option value="Analyst" selected>Analyst</option>
                                <option value="Analyst two">Analyst two</option>
                            </select>
                        </td>
                        <td className='d-flex'><IoEyeSharp className='mt-1 mx-1'/> <span>APPROVED</span></td>
                        <td>21/05/2024</td>
                    </tr>
                    
                </tbody>

            </table>
            <div className="d-flex gap-4 mt-4 mx-4">
                <div className="btn btn-primary">Coa Preview</div>
                <div className="btn btn-primary">Raw Data Preview</div>
                <div className="btn btn-primary">Submit</div>
            </div>
        </div>
    )
}

export default View