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
import {
	faEye,
	faPenToSquare,
	faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ChemicalCategory() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [deleteId, setDeleteId] = useState(null)
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;

	const badgeStyle = { background: "#cdffca" };

	const [tableData, setTableData] = useState([
		{ id: 1, code: "CC-052024-0000008", name: "Iron Chelator Standard", status: "ACTIVE" },
		{ id: 2, code: "CC-052024-0000007", name: "Organic Solvent", status: "ACTIVE" },
		{ id: 3, code: "CC-052024-0000006", name: "Solvent", status: "ACTIVE" },
		{ id: 4, code: "CC-052024-0000005", name: "Organic Acid", status: "ACTIVE" },
		{ id: 5, code: "CC-052024-0000004", name: "Polymers", status: "ACTIVE" },
		{ id: 6, code: "CC-052024-0000003", name: "Biochemical Compounds", status: "ACTIVE" },
		{ id: 7, code: "CC-052024-0000002", name: "Inorganic Compounds", status: "ACTIVE" },
		{ id: 8, code: "CC-052024-0000001", name: "Organic Compounds", status: "ACTIVE" }
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
	const currentRecords = filteredData.slice(
		indexOfFirstRecord,
		indexOfLastRecord
	);
	const totalPages = Math.ceil(filteredData.length / recordsPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<div className="m-5 mt-3">
				<div className="main-head">
					<h4 className="fw-bold">Chemical Category</h4>
				</div>
				<div>
					<CRow className="mt-5 mb-3">
						<CCol sm={3}><CFormInput
							style={{ fontSize: '0.9rem' }}
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={handleSearchChange}
						/></CCol>
						<CCol sm={3}>
							<CFormSelect
								value={selectedStatus}
								style={{ fontSize: '0.9rem' }}
								onChange={handleStatusChange}
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
									className=" text-white"
									style={{ background: "#4B49B6", fontSize: '0.9rem' }}
									onClick={() => setAddModal(true)}
								>
									Add Category
								</CButton>
							</div>
						</CCol>
					</CRow>
				</div>
				<div
					className="rounded bg-white"
					style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
				>
					<CTable className="mb-0 table table-responsive" >
						<CTableHead>
							<CTableRow>
								<CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center">
									<input type="checkbox" />
								</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>Category Code</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>
									Category Name
								</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>Status</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>Actions</CTableHeaderCell>
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
										<button
											className={`py-1 px-3 small w-50 rounded text-light d-flex justify-content-center align-items-center bg-${data.status === "ACTIVE"
													? 'green-700'
													: 'red-700'
												}`} >{data.status}
										</button>
									</CTableDataCell>
									<CTableDataCell>
										<div className="d-flex gap-3">
											<Link to="/settings/bussinessAssociateDetails">
												<FontAwesomeIcon icon={faEye} />
											</Link>
											<div
												className="cursor-pointer"
												onClick={() => setAddModal(true)}
											>
												<FontAwesomeIcon icon={faPenToSquare} />
											</div>
											<div
												className="cursor-pointer"
												onClick={() => handleDeleteClick(data.id)}
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
						<button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt; &lt;</button>
						<button className="btn mr-2 bg-dark-subtle rounded-circle">{currentPage}</button>
						<button style={{ background: "#21516a", color: "white" }} className="btn mr-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>&gt; &gt;</button>
					</div>
				</div>
			</div>

			{addModal && (
				<StatusModal visible={addModal} closeModal={() => setAddModal(false)} />
			)}
			{removeModal && (
				<DeleteModel
					visible={removeModal}
					closeModal={() => setRemoveModal(false)} handleDelete={handleDelete}
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
				<CModalTitle>Add Chemical Category</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p>Add a new category.</p>
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
				<CModalTitle>Delete Chemical Category</CModalTitle>
			</CModalHeader>
			<CModalBody>
				Do you want to delete this Plant <code>Iron Chelator Standard</code> ?
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

export default ChemicalCategory;
