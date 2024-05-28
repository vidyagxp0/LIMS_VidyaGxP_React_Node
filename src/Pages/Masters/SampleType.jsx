import React,{useState} from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CgAddR, CgCalendarDates } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

      <div id="div2" className='p-5 ' style={{display:'flex',justifyContent:'space-between'}}>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
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
          <CgAddR />  <span style={{fontSize:'14px',fontWeight:'bold',marginLeft:'5px'}}>Add Sample Type</span>
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
            Add Sample Type
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
            
        <label className="line3" htmlFor="">Sample Name</label>
        <input className="line4" required type="text" placeholder="ID"/>

        <label className="line3" htmlFor="">Prefix</label>
        <input className="line4" required type="text" placeholder="Model Number"/>

        <label className="line3" htmlFor="">Days To Complete(Days)</label>
        <input className="line4" required type="text" placeholder="Number"/> 
        
        <label className="line3" htmlFor="">Selected Standard Fields Displays At Sample Registration</label>
        <FormGroup style={{marginLeft:'20px'}}>
  <FormControlLabel control={<Checkbox/>} label="Manufacturing Date" />
  <FormControlLabel control={<Checkbox />} label="Expiry Date" />
  <FormControlLabel control={<Checkbox />} label="Batch No." /> 
  <FormControlLabel control={<Checkbox />} label="Batch Size" /> 
  <FormControlLabel control={<Checkbox />} label="Packing Type" /> 
  <FormControlLabel control={<Checkbox />} label="Project" /> 
  <FormControlLabel control={<Checkbox />} label="Supplier" /> 
  <FormControlLabel control={<Checkbox />} label="Customer" />
  <FormControlLabel control={<Checkbox />} label="Manufacturer" />
  <FormControlLabel control={<Checkbox />} label="Priority" />
  <FormControlLabel control={<Checkbox />} label="Sampling Quantity" />
  <FormControlLabel control={<Checkbox />} label="
Sample Reference No" />
  <FormControlLabel control={<Checkbox />} label="Recommended Reference Lot" />
  <FormControlLabel control={<Checkbox />} label="W.S. Validity Period" />
  <FormControlLabel control={<Checkbox />} label="Storage Condition" />
  <FormControlLabel control={<Checkbox />} label="Storage Location" />
  <FormControlLabel control={<Checkbox />} label="Comments" />
</FormGroup>

<FormControl style={{margin:'20px'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Reserve Sample Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Sampling Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup> 

      <FormLabel id="demo-row-radio-buttons-group-label">Analyst Level Investigation Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup> 

      <FormLabel id="demo-row-radio-buttons-group-label">Sample Destruction Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
      
      <FormLabel id="demo-row-radio-buttons-group-label">Sample Acceptance Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">TCI Approval Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">SI Approval Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">MGR Approval Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">QA Approval Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Reduced/Retesting Required</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>

         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Add Sample Type</button>
          </div>
           </div>

           {/* Employee table */}
           <div className='table-responsive p-4 container1'>
                <table className='table shadow' style={{fontSize:'0.8rem',margin:'0px auto',width:'98%'}}>
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

<div className="pagination" style={{margin:'0 35px'}}>
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
