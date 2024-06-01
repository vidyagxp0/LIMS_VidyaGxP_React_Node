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
	CTableRow,
} from "@coreui/react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Grade() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [deleteId, setDeleteId] = useState(null)
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;

	const [tableData, setTableData] = useState([
		{ id: 1, code: "CC-052024-0000008", name: "Iron Chelator Standard", status: "ACTIVE" },
		{ id: 2, code: "CC-052024-0000007", name: "Organic Solvent", status: "ACTIVE" },
		{ id: 3, code: "CC-052024-0000006", name: "Solvent", status: "ACTIVE" },
		{ id: 4, code: "CC-052024-0000005", name: "Organic Acid", status: "ACTIVE" },
		{ id: 5, code: "CC-052024-0000004", name: "Polymers", status: "ACTIVE" },
		{ id: 6, code: "CC-052024-0000003", name: "Biochemical Compounds", status: "ACTIVE" },
		{ id: 7, code: "CC-052024-0000002", name: "Inorganic Compounds", status: "ACTIVE" },
		{ id: 8, code: "CC-052024-0000001", name: "Organic Compounds", status: "ACTIVE" },
	]);

	const handleStatusChange = (e) => {
		setSelectedStatus(e.target.value);
		setCurrentPage(1);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
	};

	const handleDelete = () => {
		setTableData((prevData) => prevData.filter((item) => item.id !== deleteId));
		setRemoveModal(false);
		setDeleteId(null)
	  }
	
	  const handleDeleteClick = (id) => {
		setDeleteId(id);
		setRemoveModal(true);
	  }

	const filteredData = tableData.filter((data) => {
		const matchesStatus = selectedStatus === "All" || data.status === selectedStatus;
		const matchesSearchQuery = data.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
			data.name.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesStatus && matchesSearchQuery;
	});

	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
	const totalPages = Math.ceil(filteredData.length / recordsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	return (
		<>
			<div id="approval-page" className="h-100 mx-5">
				<div className="container-fluid my-5">
					<div className="main-head mb-4">
						<div className="title fw-bold fs-5">Grades</div>
					</div>
					<div>
						<CRow className="mb-3">
							<CCol sm={3}>
								<CFormInput
									className="mb-3 border-dark-subtle border-2"
									type="text"
									placeholder="Search..."
									value={searchQuery}
									onChange={handleSearchChange}
								/>
							</CCol>
							<CCol sm={3}>
								<CFormSelect
									value={selectedStatus}
									onChange={handleStatusChange}
									className="border-dark-subtle border-2"
									options={[
										{ value: "All", label: "All" },
										{ value: "ACTIVE", label: "Active" },
										{ value: "INACTIVE", label: "Inactive" },
									]}
								/>
							</CCol>
							<CCol sm={3}></CCol>
							<CCol sm={3}>
								<div className="d-flex justify-content-end">
									<CButton
										className="bg-info text-white"
										onClick={() => setAddModal(true)}
									>
										Add Grade
									</CButton>
								</div>
							</CCol>
						</CRow>
					</div>
					<div className="bg-white mt-5 border-dark-subtle border-2 rounded shadow">
						<CTable align="middle" responsive className="table-responsive table-striped">
							<CTableHead>
								<CTableRow>
									<CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col" className="text-center">
										<input type="checkbox" />
									</CTableHeaderCell>
									<CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Grade Code</CTableHeaderCell>
									<CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Grade Name</CTableHeaderCell>
									<CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Status</CTableHeaderCell>
									<CTableHeaderCell style={{background:"#3C496A", color:"white"}} scope="col">Actions</CTableHeaderCell>
								</CTableRow>
							</CTableHead>
							<CTableBody>
								{currentRecords.map((data, index) => (
									<CTableRow key={index}>
										<CTableHeaderCell scope="row" className="text-center">
											<input type="checkbox" />
										</CTableHeaderCell>
										<CTableDataCell>{data.code}</CTableDataCell>
										<CTableDataCell>{data.name}</CTableDataCell>
										<CTableDataCell>
											<div className=" w-75">
												<div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'ACTIVE' ? 'green-700'
													: 'red-700'}`} >{data.status}</div>
											</div>
										</CTableDataCell>
										<CTableDataCell>
											<div className="d-flex gap-3">
												<div className="cursor-pointer" onClick={() => setAddModal(true)}>
													<FontAwesomeIcon icon={faPenToSquare} />
												</div>
												<div className="cursor-pointer" onClick={() => handleDeleteClick(data.id)}>
													<FontAwesomeIcon icon={faTrashCan} />
												</div>
											</div>
										</CTableDataCell>
									</CTableRow>
								))}
							</CTableBody>
						</CTable>
					</div>
					<div className="pagination my-3 d-flex justify-content-between">
						<div className="d-flex gap-2">
							<CButton onClick={handlePreviousPage} disabled={currentPage === 1}>&lt;&lt;</CButton>
							<CButton className="btn bg-dark-subtle">{currentPage}</CButton>
							<CButton onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;&gt;</CButton>
						</div>
						<div>
							<CButton onClick={handleNextPage} className='d-flex gap-2 border-dark' disabled={currentPage === totalPages}>
								Next <FaArrowRight className="mt-1" />
							</CButton>
						</div>
					</div>
				</div>
			</div>

			{addModal && (
				<StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
			)}
			{removeModal && (
				<DeleteModel
					visible={removeModal}
					closeModal={() => setRemoveModal(false)}  handleDelete={handleDelete}
				/>
			)}
		</>
	);
}

const StatusModal = (_props) => {
	return (
		<CModal
			alignment="center"
			visible={_props.visible}
			onClose={_props.closeModal}
			size="lg"
		>
			<CModalHeader>
				<CModalTitle>Add Grades</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p>Add a new Grade.</p>
				<CFormInput
					className="mb-3"
					type="text"
					label="Name"
					placeholder="Name"
					required
				/>
			</CModalBody>
			<CModalFooter>
				<CButton color="light" onClick={_props.closeModal}>
					Back
				</CButton>
				<CButton className="bg-info text-white">Submit</CButton>
			</CModalFooter>
		</CModal>
	);
};

const DeleteModel = (_props) => {
	return (
		<CModal
			alignment="center"
			visible={_props.visible}
			onClose={_props.closeModal}
		>
			<CModalHeader>
				<CModalTitle>Delete Grades</CModalTitle>
			</CModalHeader>
			<CModalBody>
				Do you want to delete this Grade <code>HPLC Grade</code>?
			</CModalBody>
			<CModalFooter>
				<CButton color="light" onClick={_props.closeModal}>
					Back
				</CButton>
				<CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
			</CModalFooter>
		</CModal>
	);
};

export default Grade;
