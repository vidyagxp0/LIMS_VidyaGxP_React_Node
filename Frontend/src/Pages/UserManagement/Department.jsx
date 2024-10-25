import React from "react";
import "./Department.css";
import { Link } from "react-router-dom";
import { CCol, CFormSelect, CRow } from "@coreui/react";

const Department = () => {
  const [filterStatus, setFilterStatus] = React.useState("");

  const handleFilter = (event) => {
    setFilterStatus(event.target.value);
  };
  return (
    <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className="fw-bold">Department</h4>
      </div>

      <CRow className="mt-5 mb-3">
        <CCol sm={3}>
          <CFormSelect
            value={filterStatus}
            style={{ fontSize: "0.9rem" }}
            onChange={handleFilter}
            options={[
              { label: "All", value: "" },
              { label: "Active", value: "1" },
              { label: "Inactive", value: "0" },
            ]}
          />
        </CCol>
      </CRow>

      <div className="">
        <div className="card-container">
          <div className="card shadow border-secondary">
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <div className="justify-container">
                <p className="card-text mr-3"> 12 Employee</p>
                <Link to="/department/admin" className="btn btn-secondary">
                  <img src="/images/plus-icon.svg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card shadow border-danger">
            <div className="card-body">
              <h5 className="card-title">Quality Assurance</h5>
              <div className="justify-container">
                <p className="card-text">3 Employee</p>
                <Link
                  to="/department/qualityAssurance"
                  className="btn btn-danger"
                >
                  <img src="/images/plus-icon.svg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card shadow border-warning ">
            <div className="card-body">
              <h5 className="card-title">Quality Check</h5>
              <div className="justify-container">
                <p className="card-text">2 Employee</p>
                <Link to="/department/qualityCheck" className="btn btn-warning">
                  <img src="/images/plus-icon.svg" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card shadow border-secondary ">
            <div className="card-body">
              <h5 className="card-title">Store</h5>
              <div className="justify-container">
                <p className="card-text mr-14s">2 Employee</p>
                <Link to="/department/store" className="btn btn-secondary">
                  <img src="/images/plus-icon.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
