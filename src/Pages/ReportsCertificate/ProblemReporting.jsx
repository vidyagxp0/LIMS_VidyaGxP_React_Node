import {
    CButton,
    CCol,
    CFormCheck,
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
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from "@coreui/react";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProblemReporting() {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("All");

    const pageSize = 3; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const [data, setData] = useState([
        { id: 1, instrument: "chroma", category: "chromatography", supplier: "SHMDZ", problemID: "AL001", brief: "Test", details: "Test", occurredOn: "Nov 17th 23" },
        { id: 2, instrument: "Test", category: "chromatography", supplier: "hplc", problemID: "AL002", brief: "Test", details: "Test", occurredOn: "Oct 15th 23" },
        { id: 3, instrument: "abc", category: "category1", supplier: "supplier1", problemID: "AL003", brief: "Brief 3", details: "Details 3", occurredOn: "Sep 10th 23" },
        { id: 4, instrument: "def", category: "category2", supplier: "supplier2", problemID: "AL004", brief: "Brief 4", details: "Details 4", occurredOn: "Aug 5th 23" },
        { id: 5, instrument: "ghi", category: "category3", supplier: "supplier3", problemID: "AL005", brief: "Brief 5", details: "Details 5", occurredOn: "Jul 1st 23" },
        { id: 6, instrument: "jkl", category: "category4", supplier: "supplier4", problemID: "AL006", brief: "Brief 6", details: "Details 6", occurredOn: "Jun 25th 23" }
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
            return data;
        }
        return data.filter((item) => item.status === selectedStatus);
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setData(data.filter((item) => item.id !== deleteId));
        setDeleteModal(false);
    };

    return (
        <>
            <div className="h-100 mx-5">
                <div className="container-fluid my-5">
                    <div className="main-head">
                        <div className="title fw-bold fs-5 py-4">Problem Reporting</div>
                    </div>

                    <div>
                        <CRow className="mb-3">
                            <CCol sm={3}>
                                <CFormSelect
                                    options={["Select Status", { label: "All" }, { label: "Active" }, { label: "Inactive" }]}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    value={selectedStatus}
                                    style={{ border: "2px solid gray" }}
                                />
                            </CCol>
                            <CCol sm={6}></CCol>
                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton className="bg-info text-white" onClick={() => setAddModal(true)}>Add Problem</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded py-3 px-4 mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Instrument Category</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Supplied By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem ID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Brief</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Problem In Details</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Occurred On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {paginatedData.map((item, index) => (
                                    <CTableRow key={item.id}>
                                        <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.instrument}</CTableDataCell>
                                        <CTableDataCell>{item.category}</CTableDataCell>
                                        <CTableDataCell>{item.supplier}</CTableDataCell>
                                        <CTableDataCell>{item.problemID}</CTableDataCell>
                                        <CTableDataCell>{item.brief}</CTableDataCell>
                                        <CTableDataCell>{item.details}</CTableDataCell>
                                        <CTableDataCell>{item.occurredOn}</CTableDataCell>
                                        <CTableDataCell>
                                            <div className="d-flex gap-3">
                                                <Link to="/reportsCertificate/problemReportingDetails"><FontAwesomeIcon icon={faEye} /></Link>
                                                <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                <div className="cursor-pointer" onClick={() => handleDeleteClick(item.id)}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </div>
                                            </div>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="pagination">
                            <button className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                                &lt;&lt;
                            </button>
                            <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                            <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                                &gt;&gt;
                            </button>
                        </div>
                        <button className="btn btn-next" onClick={nextToLastPage}>
                            Next <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
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

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Problem Reporting</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and Add Problem Reporting</p>
                    <CFormSelect
                        type="text"
                        label="Instrument (Instrument ID)"
                        options={[
                            "Select...",
                            { label: "eqi/eng/163" },
                            { label: "arzph001" },
                            { label: "arz003" },
                            { label: "qc/bal/0011" },
                            { label: "hplc" },
                            { label: "qc/bal/02" }
                        ]}
                        placeholder="Select... "
                    />
                    <CFormInput
                        type="text"
                        label="Instrument Category"
                        placeholder="weighing balance "
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Supplied By"
                        placeholder="Supplied By "
                    />
                    <CFormInput
                        type="text"
                        label="Problem ID"
                        placeholder="Problem ID"
                    />
                    <label>Problem In</label>
                    <CFormCheck
                        type="radio"
                        id="ProblemInInstrument"
                        name="ProblemIn"
                        label="Instrument"
                    />
                    <CFormCheck
                        type="radio"
                        id="ProblemInModule"
                        name="ProblemIn"
                        label="Module"
                    />
                    <CFormInput
                        type="text"
                        label="Problem In Brief"
                        placeholder=" Problem In Brief"
                    />
                    <CFormInput
                        type="file"
                        label="Reference Document"
                        placeholder=" choose file"
                    />
                    <CFormInput
                        type="date"
                        label="Occurred On"
                        placeholder=" "
                    />
                    <CFormInput
                        type="date"
                        label="Reported On"
                        placeholder=" "
                    />
                    <CFormInput
                        type="text"
                        label="Problem In Details"
                        placeholder=" Problem In Details"
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Back
                    </CButton>
                    <CButton className="bg-info text-white">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

const DeleteModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                <CModalHeader>
                    <CModalTitle>Delete Problem Reporting</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Do you want to delete this problem reporting <code>AL001</code>?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton className="bg-info text-white" onClick={_props.confirmDelete}>Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default ProblemReporting;
