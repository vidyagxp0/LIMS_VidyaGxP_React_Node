import { CButton, CCol, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ReleasedCoa() {
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const badgeStyle = { background: "gray", color: "white", width: "110px" };
    const badgeStyle2 = { background: " #2A5298", color: "white", width: "110px" };
    const badgeStyle3 = { background: "green", color: "white", width: "110px" };
    const badgeStyle4 = { background: "red", color: "white", width: "110px" };
    const badgeStyle5 = { background: "orange", color: "white", width: "110px" };
    const badgeStyle6 = { background: "purple", color: "white", width: "110px" };

    const pageSize = 5; // Number of items per page
    const [data, setData] = useState([
        {
            id: 1,
            sampleType: "Petrochemical",
            productMaterial: "Hydraulic Oil",
            arNo: "ARPC0000001",
            genericName: "hyo",
            specificationCode: "HOS 234",
            status: "APPROVED",
        },
        {
            id: 2,
            sampleType: "Petrochemical",
            productMaterial: "Sacubitril",
            arNo: "ARPC0000002",
            genericName: "Polycaprolactone",
            specificationCode: "RPS-TSLV-00",
            status: "APPROVED",
        },
        {
            id: 3,
            sampleType: "Petrochemical",
            productMaterial: "Hydraulic Oil",
            arNo: "ARPC0000003",
            genericName: "hyo",
            specificationCode: "HOS 234",
            status: "DROPPED",
        },
        {
            id: 4,
            sampleType: "Petrochemical",
            productMaterial: "Sacubitril",
            arNo: "ARPC0000004",
            genericName: "Polycaprolactone",
            specificationCode: "RPS-TSLV-00",
            status: "INITIATED",
        },
        {
            id: 5,
            sampleType: "Petrochemical",
            productMaterial: "Hydraulic Oil",
            arNo: "ARPC0000005",
            genericName: "hyo",
            specificationCode: "HOS 234",
            status: "REJECTED",
        },
        {
            id: 6,
            sampleType: "Petrochemical",
            productMaterial: "Sacubitril",
            arNo: "ARPC0000006",
            genericName: "Polycaprolactone",
            specificationCode: "RPS-TSLV-00",
            status: "REINITIATED",
        },
       
    ]);

    const startIndex = (currentPage - 1) * pageSize;
    const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
   
    return (
        <>
            <div  className="h-100 mx-5">
                <div className="container-fluid my-5">
                    <div className="main-head">
                        <div className="title fw-bold fs-5 py-4">Released Coa</div>
                    </div>
                    <div className="d-flex gap-4 "></div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={2}>
                                <CFormSelect style={{ border: "2px solid gray" }}>
                                    <option value="Ar No.">Ar No.</option>
                                    <option value="ARPC0000001">ARPC0000001</option>
                                    <option value="ARPC0000002">ARPC0000002</option>
                                    <option value="ARPC0000003">ARPC0000003</option>
                                </CFormSelect>
                            </CCol>
                            <CCol sm={3}>
                            <CFormSelect
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    value={selectedStatus} style={{ border: "2px solid gray" }}
                                options={[
                                    "All",                                
                                { label: "Initiated" ,value: "INITIATED"},
                                { label: "Approved" ,value: "APPROVED"},
                                { label: "Rejected" ,value: "REJECTED"},
                                { label: "Reinitiated" ,value: "REINITIATED"},
                                { label: "Dropped" ,value: "DROPPED"},
                            ]}
                                />
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded mt-5 border-2 border-dark-subtle" >
                        <CTable align="middle" responsive className="table-striped">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Sample Type</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Product / Material</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">A.R No.</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Generic Name</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Specification Code</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell style={{ background: "#3C496A", color: "white" }} scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                            {filteredData.slice(startIndex, endIndex).map((item, index) => (
                                    <CTableRow key={item.id}>
                                        <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.sampleType}</CTableDataCell>
                                        <CTableDataCell>{item.productMaterial}</CTableDataCell>
                                        <CTableDataCell>{item.arNo}</CTableDataCell>
                                        <CTableDataCell>{item.genericName}</CTableDataCell>
                                        <CTableDataCell>{item.specificationCode}</CTableDataCell>
                                        <CTableDataCell className="d-flex" >
                                            <div className="py-2 px-3 small rounded fw-bold" style={
                                                item.status === "INITIATED"
                                                    ? badgeStyle2
                                                    : item.status === "APPROVED"
                                                        ? badgeStyle3
                                                        : item.status === "REJECTED"
                                                            ? badgeStyle4
                                                            : item.status === "REINITIATED"
                                                                ? badgeStyle5
                                                                : item.status === "DROPPED"
                                                                    ? badgeStyle6
                                                                    : badgeStyle
                                            }>{item.status}</div>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="d-flex gap-3">
                                                <Link to="/stability/sample_LoginDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                            </div>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>

                    </div>
                    <div className="pagination d-flex justify-content-between align-items-center mt-4">
                        <div className="pagination">
                            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>&gt;&gt;</button>
                        </div>
                        <button className="btn border-dark d-flex gap-2" onClick={nextToLastPage}>Next <FaArrowRight className="mt-1"/></button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReleasedCoa;
