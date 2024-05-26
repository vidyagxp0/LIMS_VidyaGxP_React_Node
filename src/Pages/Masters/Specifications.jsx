import React, { useState } from "react";
// import "./StorageCondition.css";
import { CiSearch } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function Specifications() {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },];

  const [storageName, setStorageName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddStorage = () => {
    if (storageName.trim() === "") {
      setErrorMessage("Storage condition is Required");
    } else {
      toast.warning("Apologies, an unexpected error occurred while adding the Storage Condition.")
    }
  };
  const notify = () => toast("Wow so easy!");


  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const employees = [
      { user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED'  },
      { user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED'  },
      {  user: 'CHPOIL',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' , EffectFrom: 'May 18th 24',ReviewDate: 'Aug 18th 24',  status: 'APPROVED'  },
      {user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED'},
      {user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED'},
      {user: 'PM-001',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED' },
      {user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED' },
      {user: 'TSTvl',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED' },
      {user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' ,EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24',  status: 'APPROVED' },
      { user: 'HYO',  ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test' , EffectFrom: 'May 18th 24',ReviewDate: 'Aug 18th 24',  status: 'APPROVED' },
  ];
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
      return employees.slice(startIndex, endIndex).map((employee, index) => (
          <tr key={startIndex + index}>
              <td>{startIndex + index + 1}</td>
              <td>{employee.user}</td>
              <td>{employee.ProdName}</td>
              <td>{employee.SpecificID}</td>
              <td>{employee.SpecificName}</td>
              <td>{employee.EffectFrom}</td>
              <td>{employee.ReviewDate}</td>
              <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
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
        <h5>Specifications / Specification List</h5>
      </div>

      <div id="div2" style={{display:'flex',justifyContent:'space-between'}}>
        <div className="dropdown m-5">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                            <select id='selectOption'>
                            <option value="">Select Sample Type</option>
                <option value="raw-material">Raw Material</option><option value="hcl">hcl</option>
                <option value="hydrochloric-acid">Hydrochloric Acid</option><option value="petrochemical">Petrochemical</option><option value="initiated-product">Initiated Product</option><option value="semi-finished">Semi Finished</option><option value="abcd">ABCD</option><option value="h2so4">H2So4</option><option value="att108">ATT108</option><option value="micro-media">Micro Media </option><option value="fg-templage">FG Templage</option><option value="water-type">water type</option><option value="sodium">Sodium</option><option value="test-sample-type">test sample type</option><option value="new-product-sample-type">New Product Sample Type</option><option value="packing-material">Packing Material</option><option value="raw-material-1">Raw Material-1</option><option value="finished-product">Finished Product</option>
                            </select>
                           
                        </button>

                    </div>
                </div>

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
          id="Addbtn"
          className="btn btn-primary m-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <CgAddR /> <span style={{fontSize:'14px',fontWeight:'bold',marginLeft:'5px'}}>Add Specification</span>
        </button>

        <div
          className="offcanvas offcanvas-end overflow-y-scroll"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Specification
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
          <label className="line3" htmlFor="">
          Product/Material Code
          </label>
                <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 370,margin:2 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />

            <label className="line3" htmlFor="">
            Product Name
               </label>
              <input className="line4" type="text" placeholder="Product Name" /> 
              
              <label className="line3" htmlFor="">
              Specification Name
               </label>
              <input className="line4" type="text" placeholder="Specification Name" /> 
             
              <label className="line3" htmlFor="">
              Specification ID
               </label>
              <input className="line4" type="text" placeholder="Specification ID" />
         

          
            <label className="line3" htmlFor="">Sample Type</label>
             <select name="Sample Type" className="line4">
                <option value="">Select Sample Type</option>
                <option value="raw-material">Raw Material</option><option value="hcl">hcl</option>
                <option value="hydrochloric-acid">Hydrochloric Acid</option><option value="petrochemical">Petrochemical</option><option value="initiated-product">Initiated Product</option><option value="semi-finished">Semi Finished</option><option value="abcd">ABCD</option><option value="h2so4">H2So4</option><option value="att108">ATT108</option><option value="micro-media">Micro Media </option><option value="fg-templage">FG Templage</option><option value="water-type">water type</option><option value="sodium">Sodium</option><option value="test-sample-type">test sample type</option><option value="new-product-sample-type">New Product Sample Type</option><option value="packing-material">Packing Material</option><option value="raw-material-1">Raw Material-1</option><option value="finished-product">Finished Product</option>
              </select>
              
               <label className="line3" htmlFor="">Specification Type</label>
             <select name="Specification Type" className="line4">
                <option value="">Select Specification Type</option>
              <option value="environment">environment</option><option value="culture">culture</option><option value="culture1">culture1</option><option value="working-standard">working standard</option><option value="tentative">tentative</option><option value="release">release</option><option value="regulatory">regulatory</option><option value="raw-material">Raw Material</option><option value="instrument">instrument</option><option value="shell-life">shell life</option><option value="lupin-mitra-s-25-tablet">LUPIN MIRA S 25 TABLET</option>
              </select>

           
        <label className="line3" htmlFor="">Effective From</label>
        <input className="line4" style={{padding:'14px'}}  type="date" placeholder="" />  
        
        <label className="line3" htmlFor="">Review Date</label>
        <input className="line4" style={{padding:'14px'}} type="date" placeholder="" />  
        
        <label className="line3" htmlFor="">Supersedes</label>
        <input className="line4" type="text" placeholder="Supersedes" /> 

         <label className="line3" htmlFor="">Standard Test Procedure No.</label>
        <input className="line4" type="text" placeholder="Standard Test Procedure No." />
        
        <label className="line3" for="formFile">Document</label>
      <input className="line4" style={{padding:'25px',fontSize:'12px'}} type="file"/>

         

          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button>Add Specification</button>
          </div>
          <div>
            <ToastContainer/>
          </div>
        </div>
      </div>

      <br />
      <div className='table-responsive p-4 container1'>
                <table className='table shadow ' style={{fontSize:'0.8rem',margin:'0px auto',width:'98%'}}>
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Product Code</th>
                            <th>Product Name</th>
                            <th>Specification ID</th>
                            <th>Specification Name</th>
                            <th>Effect From</th>
                            <th>Review Date</th>
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
  );
}
