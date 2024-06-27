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

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [employees, setEmployees] = useState([
    { id: 1, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 2, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 3, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 4, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 5, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'INACTIVE' },
    { id: 6, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
    { id: 7, user: 'Initiated Product', role: 'Sacubitril', departments: 'ARIP0000095', joiningDate: 'N/A', addedBy: 'RPS-TSLV-00', status: 'ACTIVE' },
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
        <td>  <button
              style={{
                background:
                  employee.status === "ACTIVE" ? "#15803d" : "#b91c1c",
                color: "white",
                width: "80%",
                fontSize: "0.6rem",
                padding: "2px 7px",
                borderRadius: "7px",
              }}
            >
              {employee.status}
            </button></td>
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
      <div className="m-5 mt-3">
        <div className="">
          <h4 className="fw-bold">Clients</h4>
        </div>

          <CRow className="mt-5 mb-3">
            <CCol sm={3}>
              <CFormSelect
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter}
                style={{fontSize:'0.9rem'}}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </CFormSelect>
            </CCol>
            <CCol sm={3}></CCol>
            <CCol sm={2}></CCol>
            <CCol sm={4}>
              <div className="d-flex justify-content-end">
                <CButton style={{fontSize:'0.9rem'}} color="primary" onClick={() => setAddModal(true)}>Add Client</CButton>
              </div>
            </CCol>
          </CRow>

        <div className='rounded bg-white'
         style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}>
          <table className='table table-responsive   '>
            <thead>
              <tr>
                <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Client Name</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Email Address</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Contact Number</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Address</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Added On</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
                <th style={{ background: "#5D76A9", color: "white"}}>Actions </th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && <DeleteModal visible={removeModal}  closeModal={() => setRemoveModal(false)} handleDelete={handleDelete} />}

    </>
  )
}
