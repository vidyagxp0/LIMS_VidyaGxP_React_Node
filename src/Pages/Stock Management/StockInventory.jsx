import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { Link } from 'react-router-dom';
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StockInventory() {
  const [addModal, setAddModal] = useState(false)
  const [delModal, setDelModal] = useState(false)

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
  ];

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


    const StatusModal = (_props) => {
      return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
          <CModalHeader>
            <CModalTitle>Add Inventory</CModalTitle>
          </CModalHeader>
          <CModalBody>
          <label className="mb-2" htmlFor="">Material Name</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            className="mb-3"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="" />}
          />
          <CFormInput
          label='Received Date'
          className="mb-3"
          type="date"
          placeholder="Received Date"
          />
           <label className="mb-2" htmlFor="">Supplier Name</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            className="mb-3"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="" />}
          />
           <CFormInput
          label='Truck No.'
          className="mb-3"
          type="number"
          placeholder="Truck No."
          />
          <CFormInput
          label='Ch No.'
          className="mb-3"
          type="number"
          placeholder="Ch No."
          />
          <CFormInput
          label='Invoice Number'
          className="mb-3"
          type="number"
          placeholder="Invoice Number"
          />
          <CFormInput
          label='Quantity In MT'
          className="mb-3"
          type="text"
          placeholder="Quantity In MT"
          />
          <CFormInput
          label='Remarks'
          className="mb-3"
          type="number"
          placeholder="Remarks"
          />
          <div className="d-flex gap-3 mt-">
            <CButton color="light w-50" onClick={_props.closeModal}>&lt; Back</CButton>
            <CButton color="primary w-50">Submit</CButton>
          </div>
          </CModalBody>
        </CModal>
      )
    }
    
    // const RemoveModal = (_props) => {
    //   return (
    //     <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
    //       <CModalHeader>
    //         <CModalTitle>Delete Storage Condition</CModalTitle>
    //       </CModalHeader>
    //       <CModalBody>
    //         Do you want to delete this Storage Condition <code>below 25°c (77°f) in a flammable cabinet</code>?
    //       </CModalBody>
    //       <CModalFooter>
    //         <CButton color="light" onClick={_props.closeModal}>Cancel</CButton>
    //         <CButton color="primary">Submit</CButton>
    //       </CModalFooter>
    //     </CModal>
    //   )
    // }

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'INITIATED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REJECTED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'DROPPED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
    { user: 'CHPOIL', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'REJECTED' },
    { user: 'HYO', ProdName: 'Sacubitril', SpecificID: 'ARIP0000095', SpecificName: 'test', EffectFrom: 'May 18th 24', ReviewDate: 'Aug 18th 24', status: 'APPROVED' },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredEmployees = employees.filter(employee => {
    return (
      (filterStatus === "" || employee.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (employee.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ProdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.EffectFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ReviewDate.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const deleteEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td><input type="checkbox" /></td>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.ProdName}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.SpecificID}</td>
        <td>{employee.ProdName}</td>
        <td ><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.status === "INITIATED" ? badgeStyle2 :
              employee.status === "APPROVED" ? badgeStyle3 :
              employee.status === "REJECTED" ? badgeStyle4 :
              employee.status === "REINITIATED" ? badgeStyle5 :
              employee.status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.status}
          </div></td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/stock-management/stock-inventory-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer"   onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
            <div className="cursor-pointer" onClick={() => deleteEmployee(startIndex + index)}><FontAwesomeIcon icon={faTrashCan} /></div>
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
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div id="div1">
        <h5>Inventory/Inventory Registration</h5>
      </div>
      <div id="div2" className="d-flex justify-content-between">
        <div className="d-flex gap-4 w-75">
          <div id="searchmain">
            <div id="searchicon">
              <CiSearch />
            </div>
            <div className="">
              <input 
                type="text" 
                className="w-75" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="dropdown w-25">
            <div>
              <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <select
                  id='selectOption'
                  onChange={handleFilterChange}
                  style={{ outline: 'none' }}
                >
                  <option value="">All</option>
                  <option value="initiated">Initiated</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="reinitiated">Reinitiated</option>
                  <option value="dropped">Dropped</option>
                </select>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <button
            className="btn btn-primary m-5 "
            type="button"
            onClick={() => setAddModal(true)}
          >
           <span style={{fontSize:'0.7rem',fontWeight:'bold'}}>Add Inventory Registration</span>
          </button>
        </div>
        </div>
     
      <div className='mx-3 table-responsive p-4 container1'>
        <table className='table shadow' style={{ fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Sr.no.</th>
              <th>Material Name</th>
              <th>Supplier Name</th>
              <th>Truck No.</th>
              <th>CH No.</th>
              <th>Invoice No.</th>
              <th>Quantity In Mt</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>

      <div className="pagination" style={{ margin: '0 40px' }}>
        <div className="pagination ">
          <div >
            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className='btn rounded-circle'> {currentPage} </button>
          </div>
          <div>
            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= filteredEmployees.length}>&gt;&gt;</button>
          </div>
        </div>
        <button className="btn btn-next d-flex align-items-center" onClick={nextToLastPage}> Next <FaArrowRight className="ms-2" /></button>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {/* {delModal && <RemoveModal visible={delModal} closeModal={() => setDelModal(false)} />} */}
    </>
  );
}


