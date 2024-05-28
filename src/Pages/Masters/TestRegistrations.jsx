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


export default function TestRegistrations() {
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
              <td>{employee.SpecificName}</td>
              <td>{employee.ProdName}</td>
              <td>{employee.ProdName}</td>
              {/* <td>{employee.EffectFrom}</td> */}
              {/* <td>{employee.ReviewDate}</td> */}
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
        <h5>Test Resistrations</h5>
      </div>

      <div  className="container mt-5" >
        <div className="row justify-content-between m-3">
          <div className="col flex-item "> <select  className="p-2 rounded" style={{fontSize:'12px',width:'150px',}}>
          <option value="">Select Sample Type</option>
                <option value="raw-material">Raw Material</option><option value="hcl">hcl</option>
                <option value="hydrochloric-acid">Hydrochloric Acid</option><option value="petrochemical">Petrochemical</option><option value="initiated-product">Initiated Product</option><option value="semi-finished">Semi Finished</option><option value="abcd">ABCD</option><option value="h2so4">H2So4</option><option value="att108">ATT108</option><option value="micro-media">Micro Media </option><option value="fg-templage">FG Templage</option><option value="water-type">water type</option><option value="sodium">Sodium</option><option value="test-sample-type">test sample type</option><option value="new-product-sample-type">New Product Sample Type</option><option value="packing-material">Packing Material</option><option value="raw-material-1">Raw Material-1</option><option value="finished-product">Finished Product</option>
                            </select ></div>

                            <div className="col flex-item ">
                            <select  className="p-2 rounded " style={{fontSize:'12px',width:'150px',}} >
                                <option value="">Select Client</option>
                                <option  value="mit-power">MIT Power</option>
                                <option  value="ravi-kandala">Ravi Kandala</option>
                            </select>
                            </div>
                            <div className="col flex-item ">
                            <select className=" p-2 rounded" style={{fontSize:'12px',width:'150px',}}>
                                <option value="">Select Specification</option>
                             <option value="RMS-TDL-01 - Tadalfil Raw material testing specification">RMS-TDL-01 - Tadalfil Raw material testing specification</option><option value="DR123 - Resinate02">DR123 - Resinate02</option><option value="DCU-1 - DCU-01">DCU-1 - DCU-01</option><option value="DS-02 - Salts2">DS-02 - Salts2</option><option value="DS02 - Diclofenac Sodium-01">DS02 - Diclofenac Sodium-01</option><option value="DFA-1 - DFA-01">DFA-1 - DFA-01</option><option value="">DS2 - DHS-1</option><option value="">DFD-1 - DFD-01</option><option value="">DVS-1 - DVS-01</option><option value="MIR1 - Mirabegron1">MIR1 - Mirabegron1</option><option value="">CLO-1 - CLO-01</option><option value="">ESZ123 - Eslica12</option><option value="">CTH-1 - CTH-01</option><option value="HYDRO89 - HydrochL">HYDRO89 - HydrochL</option><option value="LEV2 - Levetiracetam">LEV2 - Levetiracetam</option><option value="">CPZ-1 - CPZ-01</option><option value="">MM24 - M/M</option><option value="">CLB-1 - CBN-01</option><option value="OM01 - Medoxomil">OM01 - Medoxomil</option><option value="OX12 - Oxcarbazepine1">OX12 - Oxcarbazepine1</option><option value="P101 - Pirfenidone1">P101 - Pirfenidone1</option><option value="RAN124 - Ranolazine">RAN124 - Ranolazine</option><option value="RR12 - Rivaroxaban">RR12 - Rivaroxaban</option><option value="R12 - SOP for Rosuvastatin">R12 - SOP for Rosuvastatin</option><option value="">CBN-1 - CBN-01</option><option 
                             
                             value="HCL89 - Sertraline">HCL89 - Sertraline</option><option value="SC2 - Citrate">SC2 - Citrate</option><option value="SPA12 - Sitagliptin Phosphate">SPA12 - Sitagliptin Phosphate</option><option value="SS6 - Solifenacin">SS6 - Solifenacin </option><option value="SSC12 - Succinylcholine">SSC12 - Succinylcholine </option><option value="">TA12 - TAD-01</option><option value="APB024 - SOP for Deferasirox">APB024 - SOP for Deferasirox</option><option value="VT12 - SOP for vt">VT12 - SOP for vt</option><option value="RMS-DFX-01 - Deferasirox Raw material testing specification">RMS-DFX-01 - Deferasirox Raw material testing specification</option><option value="tr12 - Ticagrelor">tr12 - Ticagrelor</option><option value="HCL123 - HCL">HCL123 - HCL</option><option value="ACC-1 - ACC-01">ACC-1 - ACC-01</option><option value="HCL10132% - Hydrochloric Acid">HCL10132% - Hydrochloric Acid</option><option value="HOS 234 - Hydraulic Oil Spec">HOS 234 - Hydraulic Oil Spec</option><option value="CHPOIL001 - CHPOIL">CHPOIL001 - CHPOIL</option><option value="MB-PM-001/01 - Microbiology">MB-PM-001/01 - Microbiology</option><option value="RPS-TSLV-00 - test">RPS-TSLV-00 - test</option><option value="rest0001 - Testamine Spec-1">rest0001 - Testamine Spec-1</option><option value="123 - test">123 - test</option><option value="FP 00055 - VAD Spec">FP 00055 - VAD Spec</option><option value="FPS-EM-01 - FPS-EM-01">FPS-EM-01 - FPS-EM-01</option><option value="plcspec - plc-spec">plcspec - plc-spec</option><option value="Tamc/01/00 - Tamc">Tamc/01/00 - Tamc</option><option value="EUR/SOP-AD-01 - EUR/SOP-AD-01">EUR/SOP-AD-01 - EUR/SOP-AD-01</option><option value="EUR/SOP-AD-04 - Eureka SPP">EUR/SOP-AD-04 - Eureka SPP</option><option value="WBL/FPS/FG/2893 - 03 - Finished Goods">WBL/FPS/FG/2893 - 03 - Finished Goods</option><option value="WBL/FPS/FG/2893-02 - FINISHED PRODUCT ">WBL/FPS/FG/2893-02 - FINISHED PRODUCT </option>
                              
                            </select>
                            </div>

                             <div className="col flex-item ">
                        <button className="border p-1 rounded" type="button" >
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


           <div className="col flex-item ">

        <button
          id="Addbtn"
          style={{marginLeft:'80px',padding:'4px',width:'160px'}}
          className="btn btn-primary text-small"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          >
          <CgAddR /> <span style={{fontSize:'14px',fontWeight:'bold'}}>Add Registration</span>
        </button>
           </div>
          </div>

        <div
          className="offcanvas offcanvas-end overflow-y-scroll w-75"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <div id="line1">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Add Test Registration
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
          <p id="line2">Add information Test Registration</p>
         
          <label className="line3" htmlFor="">
          Client
          </label>
                <Autocomplete
              disablePortal 
              id="combo-box-demo"
              options={top100Films}
              style={{width:'97%'}}
              sx={{ width: 370,margin:2 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />
          <label className="line3" htmlFor="">
          Specification ID
          </label>
                <Autocomplete
              disablePortal 
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 370,margin:2 }} style={{width:'97%'}}
              renderInput={(params) => <TextField {...params} label="" />}
            />

        <label className="line3" htmlFor="">Product/Material Name</label>
        <input className="line4" type="text" placeholder="Product/Material Name" />
       
        <label className="line3" htmlFor="">Test Name</label>
        <input className="line4" type="text" placeholder="Test Name" />
       
        <label className="line3" htmlFor="">Test Code</label>
        <input className="line4" type="text" placeholder="Test Code" />
      
        <label className="line3" htmlFor="">Method No.</label>
        <input className="line4" type="text" placeholder="Test Code" />

        
        <label className="line3" htmlFor="">Test Category</label>
            	 <select name="Specification Type" className="line4">
            		    <option value="">Select Test Category</option>
                    <option value="662a579883eaf2337f410bf7">Apperance</option><option value="65d0a59bde5392629a1ba852">QA 1</option><option value="64febeef4b131677f6617887">Auxiliary Material </option><option value="64d3325c81ca150a656986a5">test</option><option value="64bf87087dd3545dd96ff16c">New Product Category Test</option><option value="64a683c3312857560c9dd82b">Test Cat-1</option><option value="64944309f884891b8187de95">Microbiology</option><option value="649442f5f884891b8187de8c">Instrument</option><option value="649442def884891b8187de83">Chemical</option><option value="649442a6f884891b8187de7a">Physical</option><option value="648c1c5cc30b4b0cb1a453c2">Therapeutic</option>
             	 </select>

               
                <label className="line3" htmlFor="">Test Technique</label>
            	 <select name="test_technique" className="line4">
            		    <option value="">Select Test Technique</option>
                    <option value="default">Default</option><option value="663f2e8e0309b333ba3e0fdc">Description</option>
             	 </select>  
              
                <label className="line3" htmlFor="">Test Type</label>
            	 <select name="test_type" className="line4">
            		    <option value="">Select Test Type</option>
                    <option value="QUALITATIVE">Qualitative</option><option value="QUANTITATIVE">Quantitative</option><option value="QUANTITATIVE-2">Quantitative-2</option><option value="STATISTICAL-1">Statistical-1</option><option value="STATISTICAL-2">Statistical-2</option><option value="MULTI-QUALITATIVE">Multi Qualitative</option><option value="MULTI-QUANTITATIVE-FORMULAE">Multi Quantitative Formulae</option><option value="TOTAL-DISSOLVED-SOLIDS"> Total Dissolved Solids</option><option value="OIL-AND-GREASE">Oil &amp; Grease</option><option value="CHEMICAL-OXYGEN-DEMAND">Chemical Oxygen Demand</option><option value="TOTAL-SUSPENDED-SOLIDS">Total Suspended Solids</option>
             	 </select>


          <div id="line5">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              &lt; Back
            </button>
            <button style={{borderRadius:'7px',padding:'4px 11px',backgroundColor:'#0f93c3',border:'1px solid #0f93c3',color:'white'}}>Evaluate</button>
            <button >Add</button>
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
                            <th>Specification ID</th>
                            <th>Product Name</th>
                            <th>Test Name</th>
                            <th>Test Code</th>
                            <th>Method</th>
                            <th>Category</th>
                            <th>Test type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            <div className="pagination" style={{margin:'0 35px'}}>

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

<button className="btn btn-next"  onClick={nextToLastPage}> Next <FaArrowRight /></button>
</div>


    </>
  );
}
