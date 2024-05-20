import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import './StocksVerification.css';
import { Link } from 'react-router-dom';



export default function StocksVerification() {
  const pageSize = 18; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'APPROVED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED'  },
      {  user: 'Initiated Product', Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'DROPPED'  },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED'  },
      {  user: 'Initiated Product', Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'DROPPED'  },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
      {user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
      { user: 'Initiated Product',  Date: 'May 17th 24 14:34',Statu:'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return employees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.user}</td>
              <td>{employee.DayComplete}</td>
              <td>{employee.DayComplete}</td>
              {/* <td>{employee.Date}</td> */}

              <td id='edatabtn' className={`rounded-5 ${employee.Statu === 'VERIFIED' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.Statu=== 'VERIFIED' ? 'success' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.Statu}</td>
              <td>{employee.DayComplete}</td>
              <td id='edatabtn' className={`rounded-5 ${employee.Status === 'APPROVED' ? 'bg-success' : 'bg-warning'} bg-opacity-25 text-${employee.Status === 'APPROVED' ? 'success' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.Status}</td>
              <td>
                  &nbsp; 
                  <Link to="/stock-management/stock-onboarding-details"><IoEyeSharp/></Link>  &nbsp;   <HiDotsHorizontal />
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
        <h5>Stocks</h5>
      </div>
     
           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow'>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Material Type</th>
                            <th>Invoice Number</th>
                            <th>Supplier Name</th>
                            <th>Supplier approved by QA</th>
                            <th>Verification Status</th>
                            <th>Stock Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            {/* <div className="pagination"> */}


    </>
  )
}
