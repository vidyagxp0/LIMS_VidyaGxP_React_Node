import {
  CButton,
  CCol,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CFormInput,
} from "@coreui/react";
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Vendors() {
  const [addModal, setAddModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      productName: "Product A",
      uniqueCode: "UA123",
      vendorName: "Vendor 1",
      qualificationCriteria: "ISO Certified",
      comments: "High quality",
      status: "APPROVED"
    },
    {
      id: 2,
      productName: "Product B",
      uniqueCode: "UB456",
      vendorName: "Vendor 2",
      qualificationCriteria: "CE Mark",
      comments: "Meets standards",
      status: "APPROVED"
    },
    {
      id: 3,
      productName: "Product C",
      uniqueCode: "UC789",
      vendorName: "Vendor 3",
      qualificationCriteria: "ISO Certified",
      comments: "Reliable vendor",
      status: "PENDING"
    },
    {
      id: 4,
      productName: "Product D",
      uniqueCode: "UD012",
      vendorName: "Vendor 4",
      qualificationCriteria: "RoHS Compliant",
      comments: "Environment-friendly",
      status: "APPROVED"
    },
    {
      id: 5,
      productName: "Product E",
      uniqueCode: "UE345",
      vendorName: "Vendor 5",
      qualificationCriteria: "CE Mark",
      comments: "High demand",
      status: "REJECTED"
    },
    {
      id: 6,
      productName: "Product F",
      uniqueCode: "UF678",
      vendorName: "Vendor 6",
      qualificationCriteria: "ISO Certified",
      comments: "Excellent performance",
      status: "APPROVED"
    },
    {
      id: 7,
      productName: "Product G",
      uniqueCode: "UG901",
      vendorName: "Vendor 7",
      qualificationCriteria: "RoHS Compliant",
      comments: "Good quality",
      status: "PENDING"
    },
    {
      id: 8,
      productName: "Product H",
      uniqueCode: "UH234",
      vendorName: "Vendor 8",
      qualificationCriteria: "CE Mark",
      comments: "New arrival",
      status: "APPROVED"
    },
    {
      id: 9,
      productName: "Product I",
      uniqueCode: "UI567",
      vendorName: "Vendor 9",
      qualificationCriteria: "ISO Certified",
      comments: "Popular choice",
      status: "APPROVED"
    },
    {
      id: 10,
      productName: "Product J",
      uniqueCode: "UJ890",
      vendorName: "Vendor 10",
      qualificationCriteria: "CE Mark",
      comments: "High ratings",
      status: "PENDING"
    },
    {
      id: 11,
      productName: "Product K",
      uniqueCode: "UK123",
      vendorName: "Vendor 11",
      qualificationCriteria: "RoHS Compliant",
      comments: "Cost-effective",
      status: "APPROVED"
    },
    {
      id: 12,
      productName: "Product L",
      uniqueCode: "UL456",
      vendorName: "Vendor 12",
      qualificationCriteria: "ISO Certified",
      comments: "Trusted vendor",
      status: "REJECTED"
    }
  ]);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTableData = statusFilter === 'All' ? data : data.filter(data => data.status === statusFilter);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredTableData.length);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setRemoveModal(true);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter((item) => item.id !== deleteId));
    setRemoveModal(false);
  };

  const renderRows = () => {
    return filteredTableData.slice(startIndex, endIndex).map((data, index) => (
      <tr key={startIndex + index}>
        <td>{startIndex + index + 1}</td>
        <td>{data.productName}</td>
        <td>{data.uniqueCode}</td>
        <td>{data.vendorName}</td>
        <td>{data.qualificationCriteria}</td>
        <td>{data.comments}</td>
        <td>
          <div className="w-75">
            <div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'INITIATED' ? 'blue-700'
              : data.status === "APPROVED"
                ? 'green-700'
                : data.status === "REJECTED"
                  ? 'red-700'
                  : data.status === "REINITIATED"
                    ? 'yellow-500'
                    : data.status === "PENDING"
                      ? 'info'
                      : 'white'}`}>
              {data.status}
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex gap-3">
            <Link to="/vendors/vendor-details"><FontAwesomeIcon icon={faEye} /></Link>
            <div className="cursor-pointer" onClick={() => handleDeleteClick(data.id)}>
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
    setCurrentPage(Math.ceil(filteredTableData.length / pageSize));
  };

  const StatusModal = (_props) => {
    return (
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
        <CModalHeader>
          <CModalTitle>Add Approved Vendor</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Add information and add new approved vendor</p>
          <CFormSelect className="mb-3"
            label='Product/Material Name'
            placeholder="Select product"
            options={[
              { value: "Tadalafil", label: "Tadalafil" },
              { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
              { value: "Diclofenac Sodium (BromineFree)", label: "Diclofenac Sodium (BromineFree)" },
            ]}
          />
          <CFormInput type="text" className="mb-3" label="Unique Code" placeholder="Product Code" />
          <CFormSelect className="mb-3"
            label='Vendor Name'
            placeholder="Select vender"
            options={[
              { value: "Aavis Pharmaceuticals", label: "Aavis Pharmaceuticals" },
              { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
              { value: "Diclofenac Sodium (BromineFree)", label: "Diclofenac Sodium (BromineFree)" },
            ]}
          />
          <CFormInput type="text" className="mb-3" label="Qualification Criteria" placeholder="Qualification Criteria" />
          <CFormInput type="text" className="mb-3" label="Comments If Any" placeholder="Comments If Any" />
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
      <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
        <CModalHeader>
          <CModalTitle>Delete Approved Vendor</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="fs-5">Do you want to delete this Approved Vendor?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={_props.closeModal} style={{ marginRight: "0.5rem", fontWeight: "500" }}>Cancel</CButton>
          <CButton color="danger" onClick={_props.confirmDelete} style={{ fontWeight: "500", color: "white" }}>Delete</CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <div className="m-5 px-2 d-flex flex-column gap-5">
        <div className="">
          <h5 className="fw-bold">Approved Vendors</h5>
        </div>

        <div>
          <CRow className="">
            <CCol sm={3}>
              <CFormSelect
                value={statusFilter}
                className="border-dark-subtle border-2"
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'INITIATED', label: 'Initiated' },
                  { value: 'APPROVED', label: 'Approved' },
                  { value: 'REJECTED', label: 'Rejected' },
                  { value: 'REINITIATED', label: 'Reinitiated' },
                  { value: 'PENDING', label: 'Pending' },
                  { value: 'DROPPED', label: 'Dropped' }
                ]}
              />
            </CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}></CCol>
            <CCol sm={3}>
              <div className="d-flex justify-content-end">
                <CButton color="primary" onClick={() => setAddModal(true)}>Add Approved Vendor</CButton>
              </div>
            </CCol>
          </CRow>
        </div>

        <div className='shadow rounded border-2 bg-light border-dark-subtle'>
          <table className='table table-responsive table-striped'>
            <thead>
              <tr>
                <th style={{ background: "#3C496A", color: "white" }}>Sr.no.</th>
                <th style={{ background: "#3C496A", color: "white" }}>Product Name</th>
                <th style={{ background: "#3C496A", color: "white" }}>Unique Code</th>
                <th style={{ background: "#3C496A", color: "white" }}>Vendor Name</th>
                <th style={{ background: "#3C496A", color: "white" }}>Qualification Criteria</th>
                <th style={{ background: "#3C496A", color: "white" }}>Comments</th>
                <th style={{ background: "#3C496A", color: "white" }}>Status</th>
                <th style={{ background: "#3C496A", color: "white" }}>Actions</th>
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
              <button className="btn" onClick={nextPage} disabled={endIndex >= filteredTableData.length}>&gt;&gt;</button>
            </div>
          </div>
          <button className="btn btn-next border-dark d-flex gap-2" onClick={nextToLastPage}>Next <FaArrowRight className="mt-1" /></button>
        </div>
      </div>

      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
      {removeModal && <DeleteModal visible={removeModal} closeModal={() => setRemoveModal(false)} confirmDelete={handleDeleteConfirm} />}
    </>
  );
}
