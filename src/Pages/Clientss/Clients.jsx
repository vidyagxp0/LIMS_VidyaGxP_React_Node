import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [deleteId, setDeleteId] = useState(null);
 
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const [employees, setEmployees] = useState([
    { id: 1, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 2, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 3, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 4, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    statusFilter === '' || employee.status.toLowerCase() === statusFilter.toLowerCase()
  );
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, employees.length);

  const renderRows = () => {
    return filteredEmployees.slice(startIndex, endIndex).map((employee, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{employee.user}</td>
        <td>{employee.role}</td>
        <td>{employee.departments}</td>
        <td>{employee.joiningDate}</td>
        <td>{employee.addedBy}</td>
        <td>  <div
          className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
          style={
            employee.status === "ACTIVE" ? badgeStyle3 : badgeStyle4
          }
        >
          {employee.status}
        </div></td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/clientss/clients-details"><FontAwesomeIcon icon={faEye} /></Link>

            <div className="cursor-pointer" onClick={() => handleDeleteClick(employee.id)} >
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
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
    setCurrentPage(Math.ceil(employees.length / pageSize));
  };

  const handleDelete = () => {
    setEmployees(employees.filter(employee => employee.id !== deleteId));
    setRemoveModal(false);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setRemoveModal(true);
  };

  const StatusModal = (_props) => {
    return (
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Client</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Add information and add new Client</p>
          <CFormInput type="text" className="mb-3" label="Client Name" placeholder="Bussiness Associate Name" />
          <CFormInput type="text" className="mb-3" label="Alternate Name" placeholder="Alternate Name" />
          <CFormInput type="email" className="mb-3" label="Email" placeholder="Email" />
          <CFormInput type="number" className="mb-3" label="Phone" placeholder="Phone" />
          <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
          <CFormInput type="text" className="mb-3" label="Contact Person" placeholder="Contact Person" />
          <CFormInput type="number" className="mb-3" label="Contact Person Number" placeholder="Contact Person Number" />
          <CFormInput type="text" className="mb-3" label="Tax Number" placeholder="Tax Number" />
          <CFormInput type="text" className="mb-3" label="Fax" placeholder="Fax" />
          <CFormInput type="text" className="mb-3" label="Website" placeholder="Website" />
          <CFormInput type="text" className="mb-3" label="Name" placeholder="Name" />
          <CFormInput type="text" className="mb-3" label="Plant Code" placeholder="Plant Code" />
          <CFormInput type="text" className="mb-3" label="Address" placeholder="Address" />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={_props.closeModal}>Back</CButton>
          <CButton color="primary">Add</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const DeleteModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>
          Delete Calibration Type
          </CModalTitle>
        </CModalHeader>
        <CModalBody>

          <p className="fs-5">Do you want to delete this Client ?</p>
        </CModalBody>

        <CModalFooter>
          <CButton
            color="secondary"
            onClick={_props.closeModal}
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
            }}
          >
            Cancel
          </CButton>
          <CButton
            color="danger"
            onClick={_props.handleDelete}
            style={{
              fontWeight: "500",
              color: "white",
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <div className="m-5 px-2 d-flex flex-column gap-5">

        <div className="">
          <h5 className="fw-bold">Clients</h5>
        </div>

        <div>
          <CRow className="">
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter}
                style={{ border: "2px solid gray" }}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>Add Client</CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div className='shadow rounded border-2 bg-light border-dark-subtle'>
          <table className='table table-responsive table-striped'>
            <thead>
              <tr>
                <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
                <th style={{ background: "#3C496A", color: "white" }}>Client Name</th>
                <th style={{ background: "#3C496A", color: "white" }}>Email Address</th>
                <th style={{ background: "#3C496A", color: "white" }}>Contact Number</th>
                <th style={{ background: "#3C496A", color: "white" }}>Address</th>
                <th style={{ background: "#3C496A", color: "white" }}>Added On</th>
                <th style={{ background: "#3C496A", color: "white" }}>Status</th>
                <th style={{ background: "#3C496A", color: "white" }}>Actions </th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="pagination d-flex gap-3">
            <div className=''>
              <button className="btn" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
            </div>
            <div className="current-page-number bg-dark-subtle page-item rounded-circle">
              <button className='btn'> {currentPage} </button>
            </div>
            <div>
              <button className="btn" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>
            </div>
          </div>

          <button className="btn btn-next border-dark d-flex gap-2" onClick={nextToLastPage}> Next <FaArrowRight className="mt-1" /></button>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && <DeleteModal visible={removeModal}  closeModal={() => setRemoveModal(false)} handleDelete={handleDelete} />}

    </>
  )
}
