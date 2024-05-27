import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function ChamberTransfer() {
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };
    const [selectedStatus, setSelectedStatus] = useState("All");

    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const data = [
        { id: 'na-001', condition: '60°F', description: '', status: 'ACTIVE' },
        { id: 'na-002', condition: '30°C', description: '', status: 'ACTIVE' },
        { id: 'na-003', condition: '25°C', description: '', status: 'INACTIVE' },
        { id: 'na-004', condition: '20°C', description: '', status: 'ACTIVE' },
        { id: 'na-005', condition: '15°C', description: '', status: 'ACTIVE' },
        { id: 'na-006', condition: '10°C', description: '', status: 'INACTIVE' },
        { id: 'na-007', condition: '5°C', description: '', status: 'ACTIVE' },
        { id: 'na-008', condition: '0°C', description: '', status: 'INACTIVE' },
        { id: 'na-009', condition: '-5°C', description: '', status: 'ACTIVE' },
        { id: 'na-010', condition: '-10°C', description: '', status: 'INACTIVE' }
    ]

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
                        <div className="title fw-bold fs-5 py-4">Chamber Transfer</div>
                    </div>
                    <div>
                        <CRow className="mb-3">
                            <CCol sm={4}>
                                <CFormInput
                                    style={{ border: "2px solid gray" }}
                                    type="email"
                                    placeholder="Search..."
                                />
                            </CCol>
                            <CCol sm={3}>
                                <CFormSelect
                                    options={["Select Status", { label: "All", value: "All" }, { label: "Active", value: "ACTIVE" }, { label: "Inactive", value: "INACTIVE" }]}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    value={selectedStatus} style={{ border: "2px solid gray" }}
                                />
                            </CCol>
                            <CCol sm={2}></CCol>
                            <CCol sm={3}>
                                <div className="d-flex justify-content-end">
                                    <CButton color="primary" onClick={() => setAddModal(true)}>Chamber Transfer</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded py-3 px-4 mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive >
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Condition Code</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Stability Condition</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {filteredData.slice(startIndex, endIndex).map((item) => (
                                    <CTableRow key={item.id}>
                                        <CTableHeaderCell scope="row" className="text-center">
                                            <input type="checkbox" />
                                        </CTableHeaderCell>
                                        <CTableDataCell>{item.id}</CTableDataCell>
                                        <CTableDataCell>{item.condition}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                        <CTableDataCell className="d-flex">
                                            <div
                                                className="py-2 px-3 small rounded fw-bold"
                                                style={item.status === "ACTIVE" ? badgeStyle : badgeStyle2}
                                            >
                                                {item.status}
                                            </div>
                                        </CTableDataCell>
                                        <CTableDataCell>
                                            <div className="d-flex gap-3">
                                                <Link to="/approval/1321"><FontAwesomeIcon icon={faEye} /></Link>
                                                <div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
                                                <div className='cursor-pointer' onClick={() => setDeleteModal(true)} ><FontAwesomeIcon icon={faTrashCan} /></div>
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
                        <button className="btn " onClick={nextToLastPage}>
                            Next <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {addModal && <StatusModal visible={addModal} closeModal={() => setAddModal(false)} />}
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} />}
        </>
    )
}

const StatusModal = ({ visible, closeModal }) => {
    return (
        <CModal alignment="center" visible={visible} onClose={closeModal}>
            <CModalHeader>
                <CModalTitle>Stability Chamber Transfer</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CModalTitle>From</CModalTitle>
                <CFormInput type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput type="text" label="Storage Condition" placeholder=" " />

                <CModalTitle>To</CModalTitle>
                <CFormInput type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput type="text" label="Storage Condition" placeholder=" " />

                <CFormSelect type="text" label="Product" options={[
                    "",
                    { label: "Glass" },
                    { label: "Hydraulic Oil" },
                    { label: "chpoil" },
                    { label: "Feliconar" },
                    { label: "Sacubitril" },
                    { label: "Testamine" }
                ]} placeholder=" " />
                <CFormSelect type="text" label="Protocol" options={[
                    "",
                    { label: "asd3454" },
                    { label: "STB2" },
                    { label: "Btc1P" },
                    { label: "Stab7654" }
                ]} placeholder=" " />
                <CButton className="bg-info text-white">Display</CButton>
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={closeModal}>Back</CButton>
                <CButton className="bg-info text-white">Submit</CButton>
            </CModalFooter>
        </CModal>
    )
}

const DeleteModal = ({ visible, closeModal }) => {
    return (
        <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
            <CModalHeader>
                <CModalTitle>Delete Chamber Transfer</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p>Do you want to delete this Chamber Transfer ?</p>
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={closeModal}>Back</CButton>
                <CButton className="bg-info text-white">Submit</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ChamberTransfer
