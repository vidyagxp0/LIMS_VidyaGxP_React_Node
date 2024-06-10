import {
    CButton,
    CCol,
    CFormSelect,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from "@coreui/react";
import React from 'react';
import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { PDFDownloadLink } from '@react-pdf/renderer';
import AuditTrailPDF from "./AuditTrailPDF";

function AuditTrail() {
    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("Select Product");
    const [selectedOperation, setSelectedOperation] = useState("Select Operations");
    const [selectedUser, setSelectedUser] = useState("Select Users");

    const data = [
        { id: 1, dateTime: 'Feb 11th 2023 10:12', formName: 'Category', actionRowName: '', oldAction: '-', newAction: 'Login', employeeName: 'Admin' },
        { id: 2, dateTime: 'Feb 15th 2024 18:22', formName: 'Glass', actionRowName: '', oldAction: '-', newAction: 'LogOut', employeeName: 'SuperAdmin' },
        { id: 3, dateTime: 'Mar 23rd 2024 10:50', formName: 'Hydraulic Oil', actionRowName: '', oldAction: '-', newAction: 'Category Added', employeeName: 'Admin' },
        { id: 4, dateTime: 'Apr 15th 2024 19:45', formName: 'Category', actionRowName: '', oldAction: '-', newAction: 'Product', employeeName: 'Rajesh' },
        { id: 5, dateTime: 'May 20th 2024 21:33', formName: 'Sampling Field', actionRowName: 'Room Is Clean', oldAction: 'Active', newAction: 'Updated from ACTIVE to INACTIVE', employeeName: 'Manager' },
        { id: 6, dateTime: 'May 17th 2024 09:51', formName: 'Login', actionRowName: '', oldAction: '-', newAction: 'Logged IN', employeeName: 'Admin' },
        { id: 7, dateTime: 'Feb 15th 2024 18:22', formName: 'Handling', actionRowName: '', oldAction: '-', newAction: 'Handling Added', employeeName: 'Admin' },
        { id: 8, dateTime: 'Mar 23rd 2024 10:50', formName: 'Category', actionRowName: '', oldAction: '-', newAction: 'Category Added', employeeName: 'Admin' },
        { id: 9, dateTime: 'Apr 15th 2024 19:45', formName: 'Category', actionRowName: '', oldAction: '-', newAction: 'Category Added', employeeName: 'Admin' },
    ];

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);

    const filterData = () => {
        return data.filter((item) => {
            const matchesProduct = selectedProduct === "Select Product" || item.formName.toLowerCase().includes(selectedProduct.toLowerCase());
            const matchesOperation = selectedOperation === "Select Operations" || item.newAction.toLowerCase().includes(selectedOperation.toLowerCase());
            const matchesUser = selectedUser === "Select Users" || item.employeeName.toLowerCase().includes(selectedUser.toLowerCase());
            const matchesSearch = item.employeeName.toLowerCase().includes(search.toLowerCase());
            return matchesProduct && matchesOperation && matchesUser && matchesSearch;
        });
    };

    const filteredData = filterData();

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));

    return (
        <>
            <div className="m-5 mt-3">
                    <div className="main-head">
                    <h4 className="fw-bold">Audit Trail</h4>
                    </div>
                    <div>
                        <CRow className="mb-3 mt-5">
                            <CCol sm={3}>
                                <CFormSelect
                                    style={{fontSize:'0.9rem'}}
                                    value={selectedProduct}
                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                    options={[
                                        'Select Product',
                                        { label: 'Glass' },
                                        { label: 'Hydraulic Oil' },
                                        { label: 'Apixaban' },
                                        { label: 'chpoil' },
                                        { label: 'Feliconar' },
                                        { label: 'Sulphuric Acid' }
                                    ]}
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    style={{fontSize:'0.9rem'}}
                                    value={selectedOperation}
                                    onChange={(e) => setSelectedOperation(e.target.value)}
                                    options={[
                                        'Select Operations',
                                        { label: 'Login' },
                                        { label: 'LogOut' },
                                        { label: 'Product' },
                                        { label: 'Specifications' },
                                        { label: 'Registration' },
                                        { label: 'Test Allot' }
                                    ]}
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    style={{fontSize:'0.9rem'}}
                                    value={selectedUser}
                                    onChange={(e) => setSelectedUser(e.target.value)}
                                    options={[
                                        'Select Users',
                                        { label: 'Rajesh' },
                                        { label: 'QA' },
                                        { label: 'Manager' },
                                        { label: 'Aliya' },
                                        { label: 'Admin' },
                                        { label: 'Super Admin' }
                                    ]}
                                />
                            </CCol>
                            <CCol sm={2}>

                            </CCol>
                            <CCol sm={1}>
                                <div className="d-flex justify-content-end">
                                    <PDFDownloadLink
                                        document={<AuditTrailPDF data={filteredData} />}
                                        fileName="audit_trail_report.pdf"
                                        className="btn btn-danger bg-opacity-75 rounded"
                                    >
                                        <FaDownload />
                                    </PDFDownloadLink>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className=" rounded bg-white"    style={{fontFamily:'sans-serif', fontSize:'0.9rem' ,boxShadow:'5px 5px 20px #5D76A9'}}>
                        <CTable align="middle" responsive className="  ">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Date Time</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Form Name</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Action Row Name</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Old Action</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">New Action</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Employee Name</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {filteredData.slice(startIndex, endIndex).map((item, index) => (
                                    <CTableRow key={index}>
                                        <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.dateTime}</CTableDataCell>
                                        <CTableDataCell>{item.formName}</CTableDataCell>
                                        <CTableDataCell>{item.actionRowName}</CTableDataCell>
                                        <CTableDataCell>{item.oldAction}</CTableDataCell>
                                        <CTableDataCell>{item.newAction}</CTableDataCell>
                                        <CTableDataCell>{item.employeeName}</CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </div>
                  
      <div className="d-flex justify-content-end align-items-center mt-4">
                        <div className="pagination">
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button  style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                       
                    </div> 
            </div>
        </>
    );
}

export default AuditTrail;
