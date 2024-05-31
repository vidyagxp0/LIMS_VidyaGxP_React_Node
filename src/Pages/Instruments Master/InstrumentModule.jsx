import { CButton, CCol, CFormInput, CFormSelect,  CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function InstrumentModule() {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const badgeStyle = { background: "green", color: "white", width: "110px" };
    const badgeStyle2 = { background: "red", color: "white", width: "110px" };
    const [selectedStatus, setSelectedStatus] = useState("All");

    const pageSize = 5; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const [data, setData] = useState([
        { id: 1, category: 'weighing balance', module: 'Weighing', moduleId: 'wl/wb/m/001', make: 'Chemi Line', model: 'N/A', serialNo: 'N/A', suppliedBy: 'RK', installedOn: 'May 31st 23', expiresOn: 'Nov 17th 24', status: 'Active' },
        { id: 2, category: 'chromatography', module: 'Weighing', moduleId: 'wl/wb/m/002', make: 'Chemi Line', model: 'N/A', serialNo: 'N/A', suppliedBy: 'RK', installedOn: 'Oct 1st 23', expiresOn: 'June 12th 24', status: 'Active' },
        { id: 3, category: 'pressure gauge', module: 'Pressure', moduleId: 'pg/pg/m/003', make: 'Gauge Line', model: 'Model A', serialNo: 'SN123', suppliedBy: 'LK', installedOn: 'Mar 15th 23', expiresOn: 'Aug 22nd 24', status: 'Inactive' },
        { id: 4, category: 'ph meter', module: 'pH Measurement', moduleId: 'ph/ph/m/004', make: 'pH Line', model: 'Model B', serialNo: 'SN124', suppliedBy: 'MK', installedOn: 'Jan 10th 23', expiresOn: 'Sep 30th 24', status: 'Active' },
        { id: 5, category: 'balance', module: 'Balance', moduleId: 'bl/bl/m/005', make: 'Balance Line', model: 'Model C', serialNo: 'SN125', suppliedBy: 'NK', installedOn: 'Feb 20th 23', expiresOn: 'Oct 15th 24', status: 'Inactive' },
        { id: 6, category: 'scale', module: 'Scale', moduleId: 'sc/sc/m/006', make: 'Scale Line', model: 'Model D', serialNo: 'SN126', suppliedBy: 'OK', installedOn: 'Apr 25th 23', expiresOn: 'Dec 5th 24', status: 'Active' },
        { id: 7, category: 'thermometer', module: 'Temperature', moduleId: 'th/th/m/007', make: 'Thermo Line', model: 'Model E', serialNo: 'SN127', suppliedBy: 'PK', installedOn: 'May 10th 23', expiresOn: 'Jan 25th 24', status: 'Inactive' },
        { id: 8, category: 'hygrometer', module: 'Humidity', moduleId: 'hy/hy/m/008', make: 'Hygro Line', model: 'Model F', serialNo: 'SN128', suppliedBy: 'QK', installedOn: 'Jun 15th 23', expiresOn: 'Feb 20th 24', status: 'Active' },
        { id: 9, category: 'barometer', module: 'Pressure', moduleId: 'ba/ba/m/009', make: 'Baro Line', model: 'Model G', serialNo: 'SN129', suppliedBy: 'RK', installedOn: 'Jul 25th 23', expiresOn: 'Mar 30th 24', status: 'Inactive' },
        { id: 10, category: 'altimeter', module: 'Altitude', moduleId: 'al/al/m/010', make: 'Alti Line', model: 'Model H', serialNo: 'SN130', suppliedBy: 'SK', installedOn: 'Aug 30th 23', expiresOn: 'Apr 25th 24', status: 'Active' },
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
            <div  className="h-100 mx-5">
                <div className="container-fluid my-5">
                    <div className="main-head">
                        <div className="title fw-bold fs-5 py-4">Instrument Module</div>
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
                                    <CButton color="primary" onClick={() => setAddModal(true)}>Add Module</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                    <div className="bg-white rounded py-3 px-4 mt-5" style={{ boxShadow: "0px 0px 3px black" }}>
                        <CTable align="middle" responsive >
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">S NO.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Module</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Module Id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Make</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Model</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Manufacturer No.</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Supplied By</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Install On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Expires On</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                            {filteredData.slice(startIndex, endIndex).map((item) => (
                                    <CTableRow key={item.id}>
                                        <CTableDataCell>{startIndex + index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.category}</CTableDataCell>
                                        <CTableDataCell>{item.module}</CTableDataCell>
                                        <CTableDataCell>{item.moduleId}</CTableDataCell>
                                        <CTableDataCell>{item.make}</CTableDataCell>
                                        <CTableDataCell>{item.model}</CTableDataCell>
                                        <CTableDataCell>{item.serialNo}</CTableDataCell>
                                        <CTableDataCell>{item.suppliedBy}</CTableDataCell>
                                        <CTableDataCell>{item.installedOn}</CTableDataCell>
                                        <CTableDataCell>{item.expiresOn}</CTableDataCell>
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
                                                <Link to="/instrumentMaster/instrumentModuleDetails"><FontAwesomeIcon icon={faEye} /></Link>
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
            {deleteModal && <DeleteModal visible={deleteModal} closeModal={() => setDeleteModal(false)} confirmDelete={handleDeleteConfirm} />}
</>
    )
}

const StatusModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
                <CModalHeader>
                    <CModalTitle>Add Instrument Module</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Add information and Add Instrument Module</p>
                    <CFormSelect
                        type="text"
                        label="Instrument (Instrument ID)"
                        placeholder="Select... "
                        options={[
                            "Select...",
                            { label: "Weighing Balance 2" },
                            { label: "Pressure Gauge" },
                            { label: "ARZ ph Meter" },
                            { label: "Ariz Balance" },
                            { label: "Weighing Balance-1" },
                            { label: "Weighing Balance" },
                        ]}
                    />
                    <CFormInput
                        type="text"
                        label="Instruction Category"
                        placeholder="Weighing Balance"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Module"
                        placeholder="Module"
                    />
                    <CFormInput
                        type="text"
                        label="Module ID"
                        placeholder="Module ID"
                    />
                    <CFormInput
                        type="text"
                        label="Make"
                        placeholder="Shimadu"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Model"
                        placeholder="Ser33"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Manufacturer's Serial No."
                        placeholder="adf3434"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Installed On"
                        placeholder="05/10/2024"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Warranty Expires On"
                        placeholder="05/05/2023"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="Supplied By"
                        placeholder="VidyaGxP"
                        disabled
                    />
                    <CFormInput
                        type="text"
                        label="SOP No."
                        placeholder="ASTM6453"
                        disabled
                    />
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

const DeleteModal = (_props) => {
    return (
        <>
            <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
                <CModalHeader>
                    <CModalTitle>Delete Instrument Module</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Do you want to delete this instrument module <code>Weighing</code>?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                    <CButton color="primary">Submit</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default InstrumentModule
