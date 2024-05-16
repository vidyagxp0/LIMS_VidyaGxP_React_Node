import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";


export default function InvestigationL1() {
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
    <tr> 					
      <td scope="col"><input type="checkbox"/></td>
      <td>1</td>
      <td>Total Fungal Count</td>
      <td>WBL/FPS/FG/2893-T-25</td>
      <td>QUANTITATIVE</td>
      <td>13-07-2023</td>
      <td><IoEyeSharp />...</td>
    </tr> 
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
