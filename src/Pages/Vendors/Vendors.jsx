import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Vendors() {
    const [statusFilter, setStatusFilter] = useState('');
    
    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };
  
    const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const  [employees, setEmployees] = useState([
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'  },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'INITIATED'  },
      {  user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'  },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'REJECTED'},
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'},
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'REINITIATED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'DROPPED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
  ]);

  
  const filteredEmployees = employees.filter(employee =>
    statusFilter === '' || employee.status.toLowerCase() === statusFilter.toLowerCase()
  );
  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.role}</td>
              <td>{employee.departments}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.addedBy}</td>
              <td><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED" ? badgeStyle2 :
              employee.status === "APPROVED" ? badgeStyle3 :
              employee.status === "REJECTED" ? badgeStyle4 :
              employee.status === "REINITIATED" ? badgeStyle5 :
              employee.status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.status}
          </div></td>
              <td>
              <div className="d-flex gap-3">
			 <Link to="/vendors/vendor-details"><FontAwesomeIcon icon={faEye} /></Link>
                        
                        <Link to="#" onClick={() => deleteEmployee(index)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </Link>
                    </div>
              </td>
          </tr>
      ));
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
};

const prevPage = () => {
    setCurrentPage(currentPage - 1);
};

const nextToLastPage = () => {
    setCurrentPage(Math.ceil(employees.length / pageSize));
};
  return (
    <>
     <div id="div1">
        <h5>Approved Vendors</h5>
      </div>

      <div id="div2" className='p-5 ' style={{display:'flex',justifyContent:'space-between'}}>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption' onChange={(e) => setStatusFilter(e.target.value)} style={{outline:'none'}}>
                            <option value="">All</option>
                                <option value="initiated">Initiated</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="reinitiated">Reinitiated</option>
                                <option value="dropped">Droped</option>
                            </select>

                        </button>

                    </div>
                </div>

         <button
          id=""
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#AddApprovedVendor"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span>Add Approved Vendor</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="AddApprovedVendor"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Approved Vendor
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
            <p style={{marginLeft:'20px'}}>Add information and add new approved vendor</p>
            
            <label className="line3" htmlFor="">Product/Material Name</label>
        <select name="Product/Material Name" className="line4">
            <option value="">Select Product</option>
            <option value="Tadalafil">Tadalafil</option>
            <option value="Diclofenac Resinate">Diclofenac Resinate</option>
        </select>

        <label className="line3" htmlFor="">Unique Code</label>
        <input className="line4" required type="text" placeholder="Product Code"/>

        <label className="line3" htmlFor="">Vendor Name</label>
        <select name="Vendor Name" className="line4">
            <option value="">Select Vendors</option>
            <option value="Aavis Pharmaceuticals">Aavis Pharmaceuticals</option>
        </select> 
        
        <label className="line3" htmlFor="">Qualification Criteria</label>
        <input className="line4" required type="text" placeholder="Qualification Criteria"/>    
        
        <label className="line3" htmlFor="">Comments If Any</label>
        <input className="line4" required type="text" placeholder="Comments If Any"/>

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Submit</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow'>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Product Name</th>
                            <th>Unique Code</th>
                            <th>Vendor Name</th>
                            <th>Qualification Criteria</th>
                            <th>Comments</th>
                            <th>Status</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination " style={{margin:'0 30px'}} >

<div className="pagination ">
    <div className='mr-5'>
        <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
    </div>
    <div className="current-page-number mr-2 bg-dark-subtle page-item">
        <button className='btn rounded-circle'> {currentPage} </button>
    </div>
    <div>
        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>

    </div>

</div>

<button className="btn btn-next" style={{margin:'0 30px'}}  onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>


    </>
  )
}
