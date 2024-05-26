import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import './TestPlan.css'

export default function TestPlan() {
    const [leftArray, setLeftArray] = useState([
        "Viscosity @40C", 
"TAN Total acid number",
"Water Content PPM",
"Average Weight",
"Description",
"Assay test for SPP",
"Specific Gravity  PA",
"Color Test",
"Specific Gravity",
"Melting Range",
"Color",
"Ph test",
"test",
"Hydroxyl Value",
"Acid Value",
"Viscosity (mPa.s)",
"Infrared spectrum",
"Appearance (Form)",
"ph test new",
"Micro Media",
"FG Assay Test",
"VDC-PH TEST",
"Water Ph test",
"Assay",
"Description",
"Water content KF1",
"Resolution",
"% RSD of Standard with racketing std.",
"Theoretical Plates.",
"Tailing Factor of standard",
"Assay (on anhydrous basis)",
"Water content",
"SP_T_001",
"New Product Test"
      ]);
    
      const [rightArray, setRightArray] = useState([
        "Inspections",
        "Audit",
        "Refference",
        "CCTT",
      ]);
    
      const moveRight = () => {
        let leftElement = document.getElementsByClassName('check-left');
        for (let index = 0; index < leftElement.length; index++) {
          if (leftElement[index].checked) {
            let data = leftElement[index].value;
            let left = leftArray.filter((value) => value !== data);
            setLeftArray(left);
            rightArray.push(data);
            setRightArray(rightArray);
            break  // Important
          }
        }
      }
    
      const moveLeft = () => {
        let rightElement = document.getElementsByClassName('check-right');
        for (let index = 0; index < rightElement.length; index++) {
          if (rightElement[index].checked) {
            let data = rightElement[index].value;
            let right = rightArray.filter((value) => value !== data);
            setRightArray(right);
            leftArray.push(data);
            setLeftArray(leftArray);
            break         // Important
          }
        }
      }
    
      const clicked = () => {
        let checkboxes = document.querySelectorAll('.check-left, .check-right');
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        let allLabels = document.querySelectorAll('.labels');
        allLabels.forEach((label) => {
          label.classList.remove('clicked');
        });
    
        let label = event.target;
        label.classList.add('clicked');
        label.checked = true;
      };


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
              <td>{employee.user}</td>
              <td>{employee.DayComplete}</td>
              <td>{employee.Date}</td>
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
        <h5>Test plans</h5>
      </div>

      <div id="div2" className='p-5 '  style={{display:'flex',justifyContent:'space-between'}}>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                            <option value="">All</option>
                                <option value="initiated">Initiated</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="reinitiated">Reinitiated</option>
                                <option value="droped">Droped</option>
                            
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
          <CgAddR />  <span  style={{fontSize:'14px',fontWeight:'bold',marginLeft:'5px'}}>Add Test Plan</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll w-75"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Test Plan
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
        <p style={{marginLeft:'20px'}}>Add information and Add Test Plan</p>
            
        <label className="line3" htmlFor="">Specification ID</label>
        <input className="line4" required type="text" placeholder="Select..."/>

        <label className="line3" htmlFor="">Product/Material Name</label>
        <input className="line4" required type="text" placeholder="Product/Material Name"/>

        <label className="line3" htmlFor="">Test Plan Comments</label>
        <input className="line4" required type="text" placeholder="Test Plan Comments"/> 
        
        <label className="line3" htmlFor="">Sampling Quantity UOM</label>
            	 <select name="Specification Type" className="line4">
            		    <option value="">Select UOM</option>
             		    <option value="gm">gm</option>
             		    <option value="ml">ml</option>
             	 </select>

                  <div className="drag-drop">
              <div className="sub-container">
                <h5>Available Tests</h5>
                <div className="list-container">
                  <ul>
                    {leftArray.map((data) =>
                      <li key={data}><input type="checkbox" value={data} id={data} className="check-left" /><label className="labels" htmlFor={data} onClick={clicked}>{data}</label></li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="mid-container">
                <button className="arrow-button" onClick={moveRight}><TiArrowRightThick /></button>
                <button className="arrow-button" onClick={moveLeft}><TiArrowLeftThick /></button>
              </div>
              <div className="sub-container">
                <h5>Selected</h5>
                <div className="list-container">
                  <ul>
                    {rightArray.map((data) =>
                      <li key={data}><input type="checkbox" value={data} id={data} className="check-right" /><label className="labels" htmlFor={data} onClick={clicked}>{data}</label></li>
                    )}
                  </ul>
                </div>
            <input type="checkbox" /> <span>Test Grouping Required</span><button style={{borderRadius:'5px',margin:'17px 20px', padding:'2px 6px',backgroundColor:'#0f93c3',border:'1px solid #0f93c3',color:'white'}}>Refresh</button>
              </div>
            </div>
            
               
        <label className="line3" htmlFor="">Coa Template</label>
            	 <select name="Specification Type" className="line4">
            		    <option value="">Select Coa Template</option>
             		    <option value="gm">Test Coa</option>
             		    <option value="ml">Windlas Template</option>
             	 </select>

        <label className="line3" htmlFor="">Remarks</label>
        <textarea className="line4" style={{padding:'40px'}} rows="4" cols="50" ></textarea>                 

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Submit</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow' style={{fontSize:'0.8rem',margin:'0px auto',width:'98%'}}>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Specification Id</th>
                            <th>Product Name</th>
                            <th>Tests</th>
                            <th>Initiated At</th>
                            <th>Status</th>
                            <th>Action</th>
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
