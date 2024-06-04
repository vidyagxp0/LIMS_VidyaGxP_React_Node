import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FaArrowRight } from 'react-icons/fa';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./StocksVerification.css";
import { Link } from "react-router-dom";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"

export default function StocksVerification() {
  const [currentPage, setCurrentPage] = useState(1);
  const [addModal, setAddModal] = useState(false)

  const itemsPerPage = 5;

    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: "#2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };


    const steps = [
        "Material Sample received by QC:YES Updated On:12th Oct 2023 11:39 Updated By:QC ",
        'Sample analyzed by QC departement:YES Updated On: 12th Oct 2023 11: 39 Updated By: QC',
        'Material comply the in house specification:YES Updated On:12th Oct 2023 11:39 Updated By:QC',
        'Sample analyzed by QC departement:YES Updated On: 12th Oct 2023 11: 39 Updated By: QC',
    ];

    const StatusModal = (_props) => {
      return (
        <CModal  alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
          <CModalHeader>
            <CModalTitle>View Stock Verification</CModalTitle>
          </CModalHeader>
          <CModalBody>
          
          <div className="offcanvas-body">
            <div className="d-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="MaterialName" className="form-label">
                  Material Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="MaterialName"
                  defaultValue={"Polycaprolactone New"}
                  placeholder="Material NameSodium Propyl Paraben IP"
                  disabled
                />
              </div>
              <div className="w-100">
                <label htmlFor="InvoiceDate" className="form-label">
                  Invoice Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={"2024-05-24"}
                  id="InvoiceDate"
                  disabled
                />
              </div>
              <div className="w-100">
                <label htmlFor="InvoiceNumber" className="form-label">
                  Invoice Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InvoiceNumber"
                  defaultValue="INC3434"
                  placeholder="Invoice Number"
                  disabled
                />
              </div>
            </div>
            <div className="d-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="SupplierName" className="form-label">
                  Supplier Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="SupplierName"
                  defaultValue={"uc"}
                  placeholder="Supplier Name"
                  disabled
                />
              </div>
              <div className="w-100">
                <label htmlFor="VendorCode" className="form-label">
                  Vendor code of supplier
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="VendorCode"
                  defaultValue={"uc"}
                  placeholder="Vendor code of supplier"
                  disabled
                />
              </div>
              <div className="w-100">
                <label htmlFor="Quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Quantity"
                  defaultValue={2}
                  placeholder="Quantity"
                  disabled
                />
              </div>
            </div>
            <div className="d-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="TruckNumber" className="form-label">
                  Truck Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="TruckNumber"
                  defaultValue={"DF4353D"}
                  placeholder="Truck Number"
                  disabled
                />
              </div>
              <div className="w-100">
                <label htmlFor="ChNumber" className="form-label">
                  Ch No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ChNumberv"
                  defaultValue={5354}
                  placeholder="Ch No."
                  disabled
                />
              </div>
              <div className="w-100 d-flex justify-content-between align-items-center mt-4">
                <label className="form-check-label" htmlFor="apporved">
                  Supplier apporved by QA department(Yes/No)
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="apporved"
                  checked
                  disabled
                />
              </div>
            </div>
            <div className="d-flex gap-4 mb-3">
              <div className="w-75">
                <label htmlFor="StockRegistrationRemark" className="form-label">
                  Stock Registration Remark
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="StockRegistrationRemark"
                  defaultValue={"na"}
                  placeholder="Stock Registration Remark"
                  disabled
                />
              </div>
              <div className="w-25 d-flex justify-content-between align-items-center mt-4">
                <label className="form-check-label" htmlFor="coa">
                  COA of material received(Yes/No)
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="coa"
                  checked
                  disabled
                />
              </div>
            </div>

            <div className="timelines mb-4">
              <div className="horizontaltimline my-4">
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
              <div className="vertical-timelines">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon={<VaccinesIcon />}
                  >
                    <h6 className="vertical-timeline-element-title  text-dark mb-2">
                      Material sample received by QC departement: YES
                    </h6>
                    <h6 className="vertical-timeline-element-subtitle">
                      Updated On: 5th May 2024 21:28
                    </h6>
                    <p>Updated By: QC</p>
                    <p>5th May 2024 21:28</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<VaccinesIcon />}
                  >
                    <h6 className="vertical-timeline-element-title  text-dark mb-2">
                      Material sample received by QC departement: YES
                    </h6>
                    <h6 className="vertical-timeline-element-subtitle">
                      Updated On: 5th May 2024 21:28
                    </h6>
                    <p>Updated By: QC</p>
                    <p>5th May 2024 21:28</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon={<VaccinesIcon />}
                  >
                    <h6 className="vertical-timeline-element-title  text-dark mb-2">
                      Material sample received by QC departement: YES
                    </h6>
                    <h6 className="vertical-timeline-element-subtitle">
                      Updated On: 5th May 2024 21:28
                    </h6>
                    <p>Updated By: QC</p>
                    <p>5th May 2024 21:28</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={<VaccinesIcon />}
                  >
                    <h6 className="vertical-timeline-element-title  text-dark mb-2">
                      Material sample received by QC departement: YES
                    </h6>
                    <h6 className="vertical-timeline-element-subtitle">
                      Updated On: 5th May 2024 21:28
                    </h6>
                    <p>Updated By: QC</p>
                    <p>5th May 2024 21:28</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon={<VaccinesIcon />}
                  >
                    <h6 className="vertical-timeline-element-title  text-dark mb-2">
                      Material sample received by QC departement: YES
                    </h6>
                    <h6 className="vertical-timeline-element-subtitle">
                      Updated On: 5th May 2024 21:28
                    </h6>
                    <p>Updated By: QC</p>
                    <p>5th May 2024 21:28</p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>

            <table className="table table-bordered border-dark table-responsive">
              <tbody>
                <tr>
                  <td className="text-light bg-info">A.R No.</td>
                  <td>ARFP0000011 </td>
                  <td className="text-light bg-info">Registered On</td>
                  <td>05/05/2024</td>
                </tr>
                <tr>
                  <td className="text-light bg-info">Specification ID </td>
                  <td>648c1904c30b4b0cb1a4534e</td>
                  <td className="text-light bg-info">Sample Type </td>
                  <td>Finished Product</td>
                </tr>
              </tbody>
            </table>
            <p className="fs-5 fw-bold mt-4 mb-0">Tests</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Test Category</th>
                  <th>Test Name</th>
                  <th>Test Technique</th>
                  <th>Execution Values</th>
                  <th>Execution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Physical</td>
                  <td>Color Test </td>
                  <td>Default</td>
                  <td>-</td>
                  <td>
                    <div className="btn btn-primary">Execute</div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Physical</td>
                  <td>Infrared spectrum</td>
                  <td>Default</td>
                  <td>-</td>
                  <td>
                    <div className="btn btn-primary">Execute</div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Physical</td>
                  <td>Appearance (Form) </td>
                  <td>Default</td>
                  <td>-</td>
                  <td>
                    <div className="btn btn-primary">Execute</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mb-3">
              <label className="form-label">
                Sample analyzed by QC department
              </label>
              <div className="d-flex flex-row gap-4">
                <div>
                  <input
                    type="radio"
                    className="form-check-input mx-3"
                    name="CheckPointPassed"
                    id="yes"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    className="form-check-input mx-3"
                    name="CheckPointPassed"
                    id="no"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="StockVerificationRemark" className="form-label">
                Stock Verification Remark
              </label>
              <input
                type="text"
                className="form-control"
                id="StockVerificationRemark"
                placeholder="Stock Verification Remark"
              />
            </div>
            <div className="d-flex my-4 gap-4">
              <div
                className="btn btn-secondary px-4"
                data-bs-dismiss="offcanvas"
                onClick={_props.closeModal}
              >
                Back
              </div>
              <div className="btn btn-primary px-4">Submit</div>
            </div>
          </div>
          </CModalBody>
        </CModal>
      )
    }

    const employees = [
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'APPROVED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
        { user: 'test Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'INITIATED' },
        { user: 'test Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'INITIATED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
        { user: 'test2 Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
        { user: 'test2 Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
        { user: 'test2 Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'APPROVED' },
        { user: 'test1 Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'PENDING', DayComplete: '10', Status: 'DROPPED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'REINITIATED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
        { user: 'test1 Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'DROPPED' },
        { user: 'Initiated Product', invoiceNumber: 'INC-343', Date: 'May 17th 24 14:34', veriStatus: 'VERIFIED', DayComplete: '10', Status: 'APPROVED' },
    ];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEmployees = employees.slice(startIndex, endIndex);
  
    const nextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(employees.length / itemsPerPage)));
    };
  
    const prevPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
  
    const nextToLastPage = () => {
      setCurrentPage(Math.ceil(employees.length / itemsPerPage));
    };

    const renderRows = () => {
        return currentEmployees.map((employee, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{employee.user}</td>
                <td>{employee.invoiceNumber}</td>
                <td>{employee.DayComplete}</td>
                <td>{employee.DayComplete}</td>
                <td  ><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.veriStatus === "VERIFIED" ? badgeStyle3 :
              employee.veriStatus === "PENDING" ? badgeStyle4 :
              badgeStyle
            }
          >
            {employee.veriStatus}
          </div></td>
                <td>{employee.DayComplete}</td>
               
                <td  ><div
            className="d-flex justify-content-center py-2 px-3 small rounded fw-bold"
            style={
              employee.Status === "INITIATED" ? badgeStyle2 :
              employee.Status === "APPROVED" ? badgeStyle3 :
              employee.Status === "REJECTED" ? badgeStyle4 :
              employee.Status === "REINITIATED" ? badgeStyle5 :
              employee.Status === "DROPPED" ? badgeStyle6 :
              badgeStyle
            }
          >
            {employee.Status}
          </div></td>
                <td>
                    <div className="d-flex gap-3">
                        <Link to="/stock-management/stock-onboarding-details"><FontAwesomeIcon icon={faEye} /></Link>
                        <div  onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                    </div>
                </td>
            </tr>
        ));
    };

  return (
    <>
      <div id="div1">
        <h5>Stocks</h5>
      </div>

        <div
          className=" rounded bg-white"
          style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}
        >
        <table
          className="table table-responsive text-xs"
          
        >
          <thead>
            <tr>
              <th style={{ background: "#5D76A9", color: "white"}}>Sr.no.</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Material Type</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Invoice Number</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Supplier Name</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Supplier approved by QA</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Verification Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Stock Type</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Status</th>
              <th style={{ background: "#5D76A9", color: "white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
        </div>

      <div className="pagination mx-5" >
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}  className="btn  mr-2" >&lt;&lt;</button>
          <div className="current-page-number mr-2 bg-dark-subtle page-item">
         <button className='btn rounded-circle'> {currentPage}  </button></div>
          
          <button onClick={nextPage} disabled={currentPage === Math.ceil(employees.length / itemsPerPage)} className="btn mr-2">&gt;&gt;</button>
          
        </div>

          <button onClick={nextPage} disabled={currentPage === Math.ceil(employees.length / itemsPerPage)} className="btn btn-next d-flex align-items-center" >Next <FaArrowRight className="ms-2" /></button>
        </div>
        
      {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
    </>
  );
}
