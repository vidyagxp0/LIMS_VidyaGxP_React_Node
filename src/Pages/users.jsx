import React,{useState} from 'react'
import { CgAddR } from "react-icons/cg";


export default function Users() {


  function showActiveStatus(){
    
  }
  return (
      
    <>
     <div id="div1">
        <h5>User Management / Users</h5>
      </div>
    
      <div id="div2">
          <div id="div2ka2">
             <select className="form-control form-select" id="fv-topics" name="status" data-placeholder="Select a option" required="">
                 <option label=" Select Status" value=""></option>
                 <option onClick={showActiveStatus} value="ACTIVE">Active</option>
                 <option value="INACTIVE">Inactive</option>
             </select>
           </div>

         <button
          id="Addbtn"
         className="btn btn-primary"
         type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
         >
          <CgAddR />  <span>Add user</span>
        </button>

        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add User
          </h5>
          <button
            id="closebtn"
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ></button>
          </div>
        </div>
            
        <label id="line3" htmlFor="">User Name</label>
        <input id="line4" required type="text" placeholder="Name here"/>

        <label id="line3" htmlFor="">Contact Number</label>
        <input id="line4" required type="text" placeholder="+91 0000000000"/>

        <label id="line3" htmlFor="">Gmail Address</label>
        <input id="line4" required type="text" placeholder="sample@gamail.com"/>

        <label id="line3" htmlFor="">Address</label>
        <input id="line4" required type="text" placeholder="Floor,Bulding,Street,Land Mark,City,State"/>

        <label id="line3" htmlFor="">Plant</label>
        <input id="line4" required type="text" placeholder="Select"/> 
        
        <label id="line3" htmlFor="">Department</label>
        <input id="line4" required type="text" placeholder="Select Department"/>
       
        <label id="line3" htmlFor="">Role</label>
        <input id="line4" required type="text" placeholder="admin@lims.com"/>



         <div id="line5">
          <button type="button"
            
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Create user Id</button>
          </div>
           </div>


      </div>

      <table className="table">
  <thead>
    <tr>	
      <th scope="col">Sr.No</th>
      <th scope="col">User Id</th>
      <th scope="col">User</th>
      <th scope="col">Role</th>
      <th scope="col">Departments	</th>
      <th scope="col">Joining Date</th>
      <th scope="col">Status</th>
      <th scope="col">Added By</th>
      <th scope="col">...</th>
    </tr>
  </thead>
  <tbody>
    <tr> 					
      <td>1</td>
      <td>USER-022024-0000018</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>2</td>
      <td>USER-022024-0000017</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>3</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>4</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
     <tr> 					
      <td>5</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>6</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
     <tr> 					
      <td>7</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>8</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>9</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>ACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>10</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>INACTIVE</td>
      <td>Admin</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>11</td>
      <td>USER-022024-0000016</td>
      <td>afiya</td>
      <td>admin</td>
      <td>QC</td>
      <td>Feb 9th 24 15:52</td>
      <td>INACTIVE</td>
      <td>Admin</td>
      <td>...</td>
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
