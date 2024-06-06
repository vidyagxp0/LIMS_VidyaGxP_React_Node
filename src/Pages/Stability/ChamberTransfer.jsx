import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function ChamberTransfer() {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const [data, setData] = useState([
        { id:'1', conditionCode: 'na-001', stabilityCondition: '60°F', description: '', status: 'ACTIVE' },
        { id:'2', conditionCode: 'na-002', stabilityCondition: '30°C', description: '', status: 'ACTIVE' },
        { id:'3', conditionCode: 'na-003', stabilityCondition: '25°C', description: '', status: 'INACTIVE' },
        { id:'4', conditionCode: 'na-004', stabilityCondition: '20°C', description: '', status: 'ACTIVE' },
        { id:'5', conditionCode: 'na-005', stabilityCondition: '15°C', description: '', status: 'ACTIVE' },
        { id:'6', conditionCode: 'na-006', stabilityCondition: '10°C', description: '', status: 'INACTIVE' },
        { id:'7', conditionCode: 'na-007', stabilityCondition: '5°C', description: '', status: 'ACTIVE' },
        { id:'8', conditionCode: 'na-008', stabilityCondition: '0°C', description: '', status: 'INACTIVE' },
        { id:'9', conditionCode: 'na-009', stabilityCondition: '-5°C', description: '', status: 'ACTIVE' },
        { id:'10', conditionCode: 'na-010', stabilityCondition: '-10°C', description: '', status: 'INACTIVE' }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const filteredData = data.filter((item) => {
        const searchFilter =
        item.conditionCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.stabilityCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const statusFilterCheck =
            statusFilter === "" || item.status === statusFilter;
        return searchFilter && statusFilterCheck;
    });

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        setData(data.filter((item) => item.id !== deleteId));
        setDeleteModal(false);
        setDeleteId(null);
    };

    return (
        <>
            <div className="m-5 mt-3">
                <div className="main-head">
                    <h4 className="fw-bold">Chamber Transfer</h4>
                </div>
                <div>
                    <CRow className="mt-5 mb-3">
                        <CCol sm={4}>
                            <CFormInput
                                style={{ fontSize: '0.9rem' }}
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </CCol>
                        <CCol sm={3}>
                            <CFormSelect
                                value={statusFilter}
                                style={{ fontSize: '0.9rem' }}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                options={[
                                    { label: "All", value: "" },
                                    { label: "Active", value: "ACTIVE" },
                                    { label: "Inactive", value: "INACTIVE" },
                                ]}
                            />
                        </CCol>
                        <CCol sm={2}></CCol>
                        <CCol sm={3}>
                            <div className="d-flex justify-content-end">
                                <CButton
                                    className=" text-white"
                                    style={{ background: "#4B49B6", fontSize: '0.9rem' }}
                                    onClick={() => setAddModal(true)}
                                >
                                    Chamber Transfer
                                </CButton>
                            </div>
                        </CCol>
                    </CRow>
                </div>
                <div
                    className=" rounded bg-white"
                    style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
                >          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Condition Code</CTableHeaderCell>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Stability Condition</CTableHeaderCell>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Description</CTableHeaderCell>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Status</CTableHeaderCell>
                                <CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col">Actions</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {filteredData.slice(startIndex, endIndex).map((item) => (
                                <CTableRow key={item.id}>
                                    <CTableHeaderCell scope="row" className="text-center">
                                        <input type="checkbox" />
                                    </CTableHeaderCell>
                                    <CTableDataCell>{item.conditionCode}</CTableDataCell>
                                    <CTableDataCell>{item.stabilityCondition}</CTableDataCell>
                                    <CTableDataCell>{item.description}</CTableDataCell>
                                    <CTableDataCell>
                                        <button
                                            className={`p-1 small w-75 rounded text-light d-flex justify-content-center align-items-center bg-${
                                                item.status === "INACTIVE"
                                                ? "red-700"
                                                : item.status === "ACTIVE"
                                                    ? "green-700"
                                                    : "white"
                                                }`} style={{ fontSize: '0.6rem' }}
                                        >
                                            {item.status}
                                        </button>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <div className="d-flex gap-3">
                                            <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                            <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() => handleDeleteClick(item.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </div>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </div>

                <div className="d-flex justify-content-end align-items-center mt-4">
                    <div className="pagination">
                        <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={prevPage} disabled={currentPage === 1}>
                            &lt;&lt;
                        </button>
                        <button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
                        <button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={nextPage} disabled={endIndex >= data.length}>
                            &gt;&gt;
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
                    handleDelete={handleDeleteClick}
                />
            )}
        </>
    )
}

const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Stability Chamber Transfer</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CModalTitle className="mb-3">From</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder=" Storage Condition " />

                <CModalTitle className="mb-3">To</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder="Storage Condition " />

                <CFormSelect className="mb-3" type="select" label="Product" options={[
                    "Select...",
                    { label: "Glass" },
                    { label: "Hydraulic Oil" },
                    { label: "chpoil" },
                    { label: "Feliconar" },
                    { label: "Sacubitril" },
                    { label: "Testamine" }
                ]} placeholder=" " />
                <CFormSelect className="mb-3" type="select" label="Protocol" options={[
                    "Select...",
                    { label: "asd3454" },
                    { label: "STB2" },
                    { label: "Btc1P" },
                    { label: "Stab7654" }
                ]} placeholder=" " />
                <div className="d-flex justify-content-end">
                <CButton className="bg-info text-white mb-3">Display</CButton>
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton className="bg-info text-white">Submit</CButton>
            </CModalFooter>
        </CModal>
    )
}
const DeleteModal = (_props) => {
    return (
        <CModal
            alignment="center"
            visible={_props.visible}
            onClose={_props.closeModal}
            size="lg"
        >
            <CModalHeader>
                <CModalTitle style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Delete Chamber Transfer
                </CModalTitle>
            </CModalHeader>
            <div
                className="modal-body"
                style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    marginBottom: "1rem",
                    columnGap: "0px",
                    border: "0px !important",
                }}
            >
                <p>Do you want to delete this Chamber Transfer { }?</p>
            </div>
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

export default ChamberTransfer
