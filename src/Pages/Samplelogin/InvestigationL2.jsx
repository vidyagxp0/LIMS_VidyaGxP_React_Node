import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { HiDotsHorizontal } from "react-icons/hi";

export default function InvestigationL2() {

  const data = [
    { srNo: 1, testName: 'Test A', testCode: 'A001', testType: 'Type 1', addedOn: '2024-05-01' },
    { srNo: 2, testName: 'Test B', testCode: 'B002', testType: 'Type 2', addedOn: '2024-05-02' },
    { srNo: 3, testName: 'Test C', testCode: 'C003', testType: 'Type 3', addedOn: '2024-05-03' },
    { srNo: 4, testName: 'Test D', testCode: 'D004', testType: 'Type 4', addedOn: '2024-05-04' },
    { srNo: 5, testName: 'Test E', testCode: 'E005', testType: 'Type 5', addedOn: '2024-05-05' },
    { srNo: 6, testName: 'Test F', testCode: 'F006', testType: 'Type 6', addedOn: '2024-05-06' },
    { srNo: 7, testName: 'Test G', testCode: 'G007', testType: 'Type 7', addedOn: '2024-05-07' },
    { srNo: 8, testName: 'Test H', testCode: 'H008', testType: 'Type 8', addedOn: '2024-05-08' },
    { srNo: 9, testName: 'Test I', testCode: 'I009', testType: 'Type 9', addedOn: '2024-05-09' },
    { srNo: 10, testName: 'Test J', testCode: 'J010', testType: 'Type 10', addedOn: '2024-05-10' },
  ]
  return (
    <>
      <div id="div1">
        <h5>Test Results QA</h5>
      </div>
      <div id="div2">
        <div id="searchmain">
          <div id="searchicon">
            <CiSearch />
          </div>
          <div className="">
            <input type="text" className="" id="" placeholder="search" />
          </div>
        </div>

        <div id="div2ka2">
          <select
            className="form-control form-select"
            id="fv-topics"
            name="status"
            data-placeholder="Select a option"
            required=""
          >
            <option label=" Select Status" value=""></option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
          </select>
        </div>

      </div>


      <table className="table">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">Sr.No</th>
            <th scope="col">Test Name</th>
            <th scope="col">Test Code</th>
            <th scope="col">Test Type</th>
            <th scope="col">Added On</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map((itm, index) => {
              return (
                <tr key={index}>
                  <td scope="col"><input type="checkbox" /></td>
                  <td>{itm.srNo}</td>
                  <td>{itm.testName}</td>
                  <td>	{itm.testCode}</td>
                  <td>{itm.testType}</td>
                  <td>{itm.addedOn}</td>
                  <td><Link to='/testResultsDetails'><IoEyeSharp /></Link> <HiDotsHorizontal /> </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>


    </>
  )
}
