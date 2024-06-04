import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CFormCheck,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

export default function StocksOnboarding() {
  const [storageName, setStorageName] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const badgeStyle = { background: "gray", color: "white", width: "110px" };
  const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
  const badgeStyle3 = { background: "green", color: "white", width: "110px" };
  const badgeStyle4 = { background: "red", color: "white", width: "110px" };
  const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
  const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

  const StatusModal = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal}
      >
        <CModalHeader>
          <CModalTitle>Stock Registration</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormCheck
            type="radio"
            name="options"
            value="rm-stock"
            label="RM Stock"
          />
          <CFormCheck
            type="radio"
            name="options"
            value="pm-stock"
            label="PM Stock"
          />
          <CFormCheck
            type="radio"
            name="options"
            value="chemical-stock"
            label=" Chemical Stock"
          />

          <div className="d-flex gap-3 mt-5">
            <CButton color="light w-50" onClick={_props.closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Next</CButton>
          </div>
        </CModalBody>
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
          <CModalTitle>Delete User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Are you sure you want to delete this material?</p>
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
            onClick={_props.confirmDelete}
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

  const [employees, setEmployees] = useState([
    {
      id: 1,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 2,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 3,
      user: "CHPOIL",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INITIATED",
    },
    {
      id: 4,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "INITIATED",
    },
    {
      id: 5,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "REJECTED",
    },
    {
      id: 6,
      user: "PM-001",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "REINITIATED",
    },
    {
      id: 7,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "REJECTED",
    },
    {
      id: 8,
      user: "TSTvl",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 9,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
    {
      id: 10,
      user: "HYO",
      ProdName: "Sacubitril",
      SpecificID: "ARIP0000095",
      SpecificName: "test",
      EffectFrom: "May 18th 24",
      ReviewDate: "Aug 18th 24",
      status: "APPROVED",
    },
  ]);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== deleteId)
    );
    setDeleteModal(false);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      (filterStatus === "" ||
        employee.status.toLowerCase() === filterStatus.toLowerCase()) &&
      (employee.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ProdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SpecificName.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        employee.EffectFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.ReviewDate.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredEmployees.length);

  const renderRows = () => {
    return filteredEmployees
      .slice(startIndex, endIndex)
      .map((employee, index) => (
        <tr key={employee.id}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{startIndex + index + 1}</td>
          <td>{employee.user}</td>
          <td>{employee.ProdName}</td>
          <td>{employee.SpecificID}</td>
          <td>{employee.SpecificName}</td>
          <td>{employee.EffectFrom}</td>
          <td>{employee.ReviewDate}</td>
          <td>
            <div
              className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
              style={
                employee.status === "INITIATED"
                  ? badgeStyle2
                  : employee.status === "APPROVED"
                  ? badgeStyle3
                  : employee.status === "REJECTED"
                  ? badgeStyle4
                  : employee.status === "REINITIATED"
                  ? badgeStyle5
                  : employee.status === "DROPPED"
                  ? badgeStyle6
                  : badgeStyle
              }
            >
              {employee.status}
            </div>
          </td>
          <td>{employee.EffectFrom}</td>
          <td>
            <div className="d-flex gap-3">
              <Link to="/stock-management/stock-onboarding-details">
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <div
                className="cursor-pointer"
                onClick={() => handleDeleteClick(employee.id)}
              >
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
    setCurrentPage(Math.ceil(filteredEmployees.length / pageSize));
  };

  return (
    <>
      <div id="div1">
        <h5>Stock Registration</h5>
      </div>

      <div className="d-flex m-4 mt-5 justify-content-around">
        <CCol sm={4}>
          <CFormInput
            type="text"
            placeholder="Search..."
            style={{fontSize:'0.9rem'}}
            className="border-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CCol>

        <CCol sm={3}>
          <CFormSelect
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border-2"
            style={{fontSize:'0.9rem'}}
            options={[
              { label: "All", value: "" },
              { label: "Initiated", value: "initiated" },
              { label: "Approved", value: "approved" },
              { label: "Rejected", value: "rejected" },
              { label: "Reinitiated", value: "reinitiated" },
              { label: "Dropped", value: "dropped" },
            ]}
          />
        </CCol>

        <CCol sm={3}>
          <div className="d-flex justify-content-end">
            <CButton color="primary" onClick={() => setAddModal(true)}>
              Add Stock
            </CButton>
          </div>
        </CCol>
      </div>

        <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <table className="table table-responsive text-xs">
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}>
                <input type="checkbox" />
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Material Type
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Material Name
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Invoice No.
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Supplier Name
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Vendor Code
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Approved By
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>
                Location
              </th>
              <th style={{ background: "#5D76A9", color: "white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>

      <div className="pagination mx-5">
        <div className="pagination">
          <div>
            <button
              className="btn  mr-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &lt;&lt;
            </button>
          </div>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
            <button className="btn rounded-circle"> {currentPage} </button>
          </div>
          <div>
            <button
              className="btn mr-2"
              onClick={nextPage}
              disabled={endIndex >= filteredEmployees.length}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
        <button
          className="btn btn-next d-flex align-items-center"
          onClick={nextToLastPage}
        >
          {" "}
          Next <FaArrowRight className="ms-2" />
        </button>
      </div>

      {addModal && (
        <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
      )}

      {deleteModal && (
        <DeleteModal
          visible={deleteModal}
          closeModal={() => setDeleteModal(false)}
          confirmDelete={handleDeleteConfirm}
        />
      )}
    </>
  );
}
