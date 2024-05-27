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
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function InstrumentCategory() {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };
    const [selectedStatus, setSelectedStatus] = useState("All");

    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const [data, setData] = useState([
        { id: 1, categoryName: "Chromatography", description: "Chroma", addedOn: "Nov 17th 24", status: "Active" },
        { id: 2, categoryName: "Weighing balance", description: "EQI", addedOn: "Jan 5th 24", status: "Active" },
        { id: 3, categoryName: "Weighing balance", description: "ARZPH001", addedOn: "09-may-2024", status: "Inactive" },
        { id: 4, categoryName: "Spectroscopy", description: "Spec", addedOn: "Feb 14th 24", status: "Inactive" },
        { id: 5, categoryName: "Microscopy", description: "Micro", addedOn: "Mar 3rd 24", status: "Active" },
        { id: 6, categoryName: "Thermal Analysis", description: "Thermal", addedOn: "Apr 8th 24", status: "Inactive" },
        { id: 7, categoryName: "Electrochemistry", description: "Electro", addedOn: "Jun 1st 24", status: "Active" },
        { id: 8, categoryName: "Chromatography", description: "Chroma", addedOn: "Jul 9th 24", status: "Inactive" },
        { id: 9, categoryName: "Weighing balance", description: "EQI", addedOn: "Aug 21st 24", status: "Active" },
        { id: 10, categoryName: "Spectroscopy", description: "Spec", addedOn: "Oct 13th 24", status: "Inactive" },
    ]);
    const startIndex = (currentPage - 1) * pageSize;
    const filteredData = selectedStatus === 'All' ? data : data.filter(item => item.status === selectedStatus);
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
    const nextToLastPage = () => setCurrentPage(Math.ceil(filteredData.length / pageSize));
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
                        <div className="title fw-bold fs-5 py-4">Instrument Category</div>
                    </div>
                    <div className="d-flex gap-4"></div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={3}>
                                <CFormSelect
                                    options={["Select Status", { label: "All" }, { label: "Active" }, { label: "Inactive" }]}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    value={selectedStatus} style={{ border: "2px solid gray" }}
                                />
                            </CCol>
                            <CCol sm={6}></CCol>
                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton color="primary" onClick={() => setAddModal(true)}>
                                        Instrument Category
                                    </CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded py-3 px-4 mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive >
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Added On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {filteredData.slice(startIndex, endIndex).map((item) => (
                                    <CTableRow key={item.id}>
                                        <CTableDataCell>{item.id}</CTableDataCell>
                                        <CTableDataCell>{item.categoryName}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                        <CTableDataCell>{item.addedOn}</CTableDataCell>
                                        <CTableDataCell >
                                            <div
                                                className="py-2 px-3 small rounded fw-bold"
                                                style={item.status === "Active" ? badgeStyle : badgeStyle2}
                                            >
                                                {item.status}
                                            </div>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="d-flex gap-3">
                                                <div className="cursor-pointer" onClick={() => setAddModal(true)}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </div>
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
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
        </>
    );
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Category</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and add new Instrument Category</p>
                    <CFormInput type="text" label="Category Name" placeholder="Category Name" />
                    <CFormInput type="text" label="Description" placeholder="Description" />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Back
                    </CButton>
                    <CButton color="primary">Submit</CButton>
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
                    <CModalTitle>Delete Instrument Category</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>
                        Do you want to delete this Instrument Category <code>thermal analysis</code>?
                    </p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>
                        Back
                    </CButton>
                    <CButton color="primary">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default InstrumentCategory;
