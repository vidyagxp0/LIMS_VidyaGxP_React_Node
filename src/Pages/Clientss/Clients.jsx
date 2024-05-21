import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Clients() {
  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
      { user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
      {  user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'  },
      {user: 'Initiated Product',  role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A' , addedBy: 'RPS-TSLV-00',  status: 'ACTIVE'},
      
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
                  &nbsp; &nbsp; <Link to="/masters/product-details">< IoEyeSharp /></Link> &nbsp;
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
        <h5>Clients</h5>
      </div>

      <div id="div2" className='p-5 '>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>Active</option>
                                <option>In Active</option>
                               
                            </select>

                        </button>

                    </div>
                </div>

         <button
          id="sampleloginbtn"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span>Add Client</span>
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
            
        <label id="line3" htmlFor="">Client Name</label>
        <input id="line4" required type="text" placeholder="Bussiness Associate Name"/>

        <label id="line3" htmlFor="">Alternate Name</label>
        <input id="line4" required type="text" placeholder="Alternate Name"/>

        <label id="line3" htmlFor="">Email</label>
        <input id="line4" required type="email" placeholder="Email"/> 
        
        <label id="line3" htmlFor="">Phone</label>
        <input id="line4" required type="number" placeholder="Phone"/>    
        
        <label id="line3" htmlFor="">Address</label>
        <input id="line4" required type="text" placeholder="Address"/>
       
        <label id="line3" htmlFor="">Contact Person</label>
        <input id="line4" required type="text" placeholder="Contact Person"/>
        
        <label id="line3" htmlFor="">Contact Person Number</label>
        <input id="line4" required type="text" placeholder="Contact Person Number"/>
        
        <label id="line3" htmlFor="">Tax Number</label>
        <input id="line4" required type="text" placeholder="Tax Number"/> 
        
        <label id="line3" htmlFor="">Fax</label>
        <input id="line4" required type="number" placeholder="Fax"/> 
        
        <label id="line3" htmlFor="">Website</label>
        <input id="line4" required type="text" placeholder="Website"/>

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Submit</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table'>
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