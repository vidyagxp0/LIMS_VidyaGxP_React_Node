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



    const pageSize = 3; // Number of items per page

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
        // Add more data items here as needed
    ]);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    const paginatedData = data.slice(startIndex, endIndex);

    const nextPage = () => {
        if (endIndex < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(data.length / pageSize));
    };

    const filterData = () => {
        if (selectedStatus === "All") {
            return paginatedData;
        }

        return paginatedData.filter((item) => item.status.toUpperCase() === selectedStatus.toUpperCase());
    };



    return (
        <>
            <div id="approval-page" className="h-100 mx-5">
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
                                <CFormSelect onChange={(e) => setSelectedStatus(e.target.value)} value={selectedStatus} style={{ border: "2px solid gray" }}>

                                    <option value="All">All</option>
                                    <option value="Initiated">Initiated</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Reinitiated">Reinitiated</option>
                                    <option value="Dropped">Dropped</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded py-3 px-4  mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive className="">
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Sample Type</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Product / Material</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">A.R No.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Generic Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Specification Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {filterData().map((item, index) => (
                                    <CTableRow key={index}>
                                        <CTableDataCell>{item.id}</CTableDataCell>
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
                        <button className="btn btn-next" onClick={nextToLastPage}>Next <FaArrowRight /></button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReleasedCoa;
