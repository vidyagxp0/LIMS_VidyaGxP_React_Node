import React,{useState} from 'react'
import './Samplelogin.css'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Samplelogin() {
  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'  },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'  },
      {  user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'  },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'},
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED'},
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'APPROVED' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return employees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.role}</td>
              <td>{employee.departments}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.addedBy}</td>
              <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
              <td>
                  &nbsp; &nbsp; <Link to="/view">< IoEyeSharp /></Link> &nbsp;
                  {/* &nbsp; &nbsp; <a href="/approval/1321">< IoEyeSharp /></a> &nbsp; */}
                  <HiDotsHorizontal />
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
        <h5>Sample Login</h5>
      </div>

      <div id="div2">
         <input className="p-1 m-5" type="text"  placeholder='Ar. No.'/>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>All</option>
                                <option>Initiated</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                                <option>Approved</option>
                                <option>Reinitiated</option>
                                <option>Droped</option>
                            </select>

                        </button>

                    </div>
                </div>

         <button
          id="sampleloginbtn"
          className="btn btn-primary mr-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span>Add Sample Login</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Sample login
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
          <p className='m-3'>Add information and add new sample login</p>
            
        <label id="line3" htmlFor="">Client</label>
        <input id="line4" required type="text" placeholder="Select..."/>

        <label id="line3" htmlFor="">Test Plan / Revision No.</label>
        <input id="line4" required type="text" placeholder="Select..."/>

        <label id="line3" htmlFor="">Product / Material</label>
        <input id="line4" required type="text" placeholder="Prefix"/>

        <label id="line3" htmlFor="">Product / Material Code</label>
        <input id="line4" required type="text" placeholder=""/>

        <label id="line3" htmlFor="">Generic Name</label>
        <input id="line4" required type="text" placeholder=""/> 
        
        <label id="line3" htmlFor="">Specification ID</label>
        <input id="line4" required type="text" placeholder=""/>
       
        <label id="line3" htmlFor="">Copy Sample from</label>
        <input id="line4" required type="text" placeholder="Select..."/>
        
        <label id="line3" htmlFor="">Sample Type</label>
        <input id="line4" required type="text" placeholder=""/>
        
        <label id="line3" htmlFor="">Certificates (If any)</label>
        <input id="line4" required type="text" placeholder="Select..."/>

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Add Sample</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Sample Type</th>
                            <th>Product / Material</th>
                            <th>A.R. No.</th>
                            <th>Generic Name</th>
                            <th>Specification code</th>
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

<button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>


    </>
  )
}
