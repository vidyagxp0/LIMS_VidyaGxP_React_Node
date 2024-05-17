import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";

export default function SampleType() {
  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED'  },
      {  user: 'Initiated Product', Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED'  },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'DROPPED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', DayComplete: '10', Status: 'APPROVED' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return employees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.Date}</td>
              <td>{employee.DayComplete}</td>
              {/* <td>{employee.Status}</td> */}
              <td className={`rounded-5 ${employee.Status === 'APPROVED' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.Status === 'APPROVED' ? 'success' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.Status}</td>
              <td>
                  &nbsp; &nbsp;  &nbsp;
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
        <h5>Specifications/Sample Type</h5>
      </div>

      <div id="div2" className='p-5 '>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>All</option>
                                <option>Initiated</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                                <option>Reinitiated</option>
                                <option>Droped</option>
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
          <CgAddR />  <span>Add Sample Type</span>
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
            Add Product/Material
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
            
        <label id="line3" htmlFor="">Name</label>
        <input id="line4" required type="text" placeholder="Product Name"/>

        <label id="line3" htmlFor="">Unique Code</label>
        <input id="line4" required type="text" placeholder="Product Code"/>

        <label id="line3" htmlFor="">Generic Name</label>
        <input id="line4" required type="text" placeholder="Generic Name"/> 
        
        <label id="line3" htmlFor="">Re-testing Period</label>
        <input id="line4" required type="text" placeholder="Retesting Period"/>

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Add Product</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Sample Type Name</th>
                            <th>Add Date</th>
                            <th>Days to Comlete</th>
                            <th>Status</th>
                            <th>...</th>
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