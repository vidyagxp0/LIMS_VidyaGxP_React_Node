import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";

export default function SpecificationType() {
  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'environment',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      { user: 'culture',  Date: 'May 17th 24 14:34', Status: 'ACTIVE'  },
      {  user: 'working standard', Date: 'May 17th 24 14:34', Status: 'ACTIVE'  },
      {user: 'culture 1',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      {user: 'culture',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      {user: 'environment',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      {user: 'environment',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      {user: 'working standard',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34', Status: 'ACTIVE' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return employees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.Date}</td>
              {/* <td>{employee.DayComplete}</td> */}
              {/* <td>{employee.Status}</td> */}
              <td className={`rounded-5 ${employee.Status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.Status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.Status}</td>
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
        <h5>Specifications Type</h5>
      </div>

      <div id="div2" className='p-5 '>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>Select Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>

                        </button>

                    </div>
                </div>

           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow' style={{fontSize:'0.8rem',margin:'0px auto',width:'98%'}}>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Specification Type</th>
                            <th>Added On</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination">

<div className="pagination " style={{margin:'0 35px'}}>
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

<button className="btn btn-next" style={{margin:'0 35px'}} onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>


    </>
  )
}
