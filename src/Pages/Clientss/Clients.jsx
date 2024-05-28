import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
    const [statusFilter, setStatusFilter] = useState('');

    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = {
      background: " #2A5298",
      color: "white",
      width: "110px",
    };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'INACTIVE'  },
      {  user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'},
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
              <td>  <div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "ACTIVE" ? badgeStyle3 : badgeStyle4
            }
          >
            {employee.status}
          </div></td>
              <td>
              <div className="d-flex gap-3">
              <Link to="/clientss/clients-details"><FontAwesomeIcon icon={faEye} /></Link>
                        
                        <Link to="#" onClick={() => deleteEmployee(startIndex + index)}>
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
        <h5>Clients</h5>
      </div>

      <div id="div2" className='p-5 ' style={{display:'flex',justifyContent:'space-between'}}>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption' style={{outline:'none'}} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

                        </button>

                    </div>
                </div>

         <button
          id=""
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#AddClient"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span>Add Client</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="AddClient"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Client
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
            <p style={{marginLeft:'20px'}}>Add information and add new Client</p>
            
        <label className="line3" htmlFor="">Client Name</label>
        <input className="line4" required type="text" placeholder="Bussiness Associate Name"/>

        <label className="line3" htmlFor="">Alternate Name</label>
        <input className="line4" required type="text" placeholder="Alternate Name"/>

        <label className="line3" htmlFor="">Email</label>
        <input className="line4" required type="email" placeholder="Email"/> 
        
        <label className="line3" htmlFor="">Phone</label>
        <input className="line4" required type="number" placeholder="Phone"/>    
        
        <label className="line3" htmlFor="">Address</label>
        <input className="line4" required type="text" placeholder="Address"/>
       
        <label className="line3" htmlFor="">Contact Person</label>
        <input className="line4" required type="text" placeholder="Contact Person"/>
        
        <label className="line3" htmlFor="">Contact Person Number</label>
        <input className="line4" required type="text" placeholder="Contact Person Number"/>
        
        <label className="line3" htmlFor="">Tax Number</label>
        <input className="line4" required type="text" placeholder="Tax Number"/> 
        
        <label className="line3" htmlFor="">Fax</label>
        <input className="line4" required type="number" placeholder="Fax"/> 
        
        <label className="line3" htmlFor="">Website</label>
        <input className="line4" required type="text" placeholder="Website"/>

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
                            <th>Client Name</th>
                            <th>Email Address</th>
                            <th>Contact Number</th>
                            <th>Address</th>
                            <th>Added On</th>
                            <th>Status</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination">

<div className="pagination " style={{margin:'0 30px'}} >
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
