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
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function TrainingConfirmation() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [deleteId, setDeleteId] = useState(null)
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;

	const badgeStyle = { background: "#cdffca" };

	const [tableData, setTableData] = useState([
		{ id: 1, analyst: "John Doe", testTechnique: "Technique A", trainingDetails: "Completed on Jan 1, 2024", remarks: "Excellent", addedOn: "May 22, 2024", status: "Active" },
		{ id: 2, analyst: "Jane Smith", testTechnique: "Technique B", trainingDetails: "Completed on Feb 5, 2024", remarks: "Good", addedOn: "May 23, 2024", status: "Active" },
		{ id: 3, analyst: "Alice Johnson", testTechnique: "Technique C", trainingDetails: "Completed on Mar 10, 2024", remarks: "Satisfactory", addedOn: "May 24, 2024", status: "Inactive" },
		{ id: 4, analyst: "Bob Brown", testTechnique: "Technique D", trainingDetails: "Completed on Apr 15, 2024", remarks: "Needs Improvement", addedOn: "May 25, 2024", status: "Active" },
		{ id: 5, analyst: "Carol White", testTechnique: "Technique E", trainingDetails: "Completed on May 20, 2024", remarks: "Excellent", addedOn: "May 26, 2024", status: "Active" },
		{ id: 6, analyst: "David Green", testTechnique: "Technique F", trainingDetails: "Completed on Jun 25, 2024", remarks: "Good", addedOn: "May 27, 2024", status: "Inactive" },
		{ id: 7, analyst: "Eve Black", testTechnique: "Technique G", trainingDetails: "Completed on Jul 30, 2024", remarks: "Satisfactory", addedOn: "May 28, 2024", status: "Active" },
		{ id: 8, analyst: "Frank Blue", testTechnique: "Technique H", trainingDetails: "Completed on Aug 5, 2024", remarks: "Needs Improvement", addedOn: "May 29, 2024", status: "Active" }
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
		const matchesSearchQuery = data.analyst.toLowerCase().includes(searchQuery.toLowerCase()) ||
			data.testTechnique.toLowerCase().includes(searchQuery.toLowerCase());
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
			<div id="approval-page" className="h-100 mx-5">
				<div className="container-fluid my-5">
					<div className="main-head mb-4">
						<div className="title fw-bold fs-5">Training Confirmations</div>
					</div>
					<div>
						<CRow className="mb-3">
							<CCol sm={3}><CFormInput
								className="mb-3 border-dark-subtle border-2"
								type="text"
								placeholder="Search..."
								value={searchQuery}
								onChange={handleSearchChange}
							/></CCol>
							<CCol sm={3}>
								<CFormSelect
									value={selectedStatus}
									style={{fontSize:'0.9rem'}}
									onChange={handleStatusChange}
									options={[
										{ value: "All", label: "All" },
										{ value: "Active", label: "Active" },
										{ value: "Inactive", label: "Inactive" },
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
										Add Confirmations
									</CButton>
								</div>
							</CCol>
						</CRow>
					</div>
					<div className="bg-white mt-5 border-dark-subtle border-2 rounded shadow">
						<CTable align="middle" responsive className="table-responsive   ">
							<CTableHead>
								<CTableRow>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col" className="text-center"><input type="checkbox" /></CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Id</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Analyst</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Test Technique</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Training Details</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Remarks</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Added On</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Status</CTableHeaderCell>
									<CTableHeaderCell style={{ background: "#5D76A9", color: "white"}} scope="col">Actions</CTableHeaderCell>
								</CTableRow>
							</CTableHead>
							<CTableBody>
								{currentRecords.map((data, index) => (
									<CTableRow key={index}>
										<CTableHeaderCell scope="row" className="text-center">
											<input type="checkbox" />
										</CTableHeaderCell>
										<CTableDataCell>{index + 1}</CTableDataCell>
										<CTableDataCell>{data.analyst}</CTableDataCell>
										<CTableDataCell>{data.testTechnique}</CTableDataCell>
										<CTableDataCell>{data.trainingDetails}</CTableDataCell>
										<CTableDataCell>{data.remarks}</CTableDataCell>
										<CTableDataCell>{data.addedOn}</CTableDataCell>
										<CTableDataCell>
											<div className=" w-75">
												<div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'Active' ? 'green-700'
													: 'red-700'}`} >{data.status.toUpperCase()}</div>
											</div>
										</CTableDataCell>
										<CTableDataCell>
											<div className="d-flex gap-3">
												<div className="cursor-pointer" onClick={() => setAddModal(true)}><FontAwesomeIcon icon={faPenToSquare} /></div>
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
					<div className="pagination my-3 d-flex justify-content-between">
						<div className="d-flex gap-2">
							<button className="btn mr-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt; &lt;</button>
							<button className="btn mr-2 bg-dark-subtle">{currentPage}</button>
							<button className="btn mr-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>&gt; &gt;</button>
						</div>
						<div className="">
							<button className="d-flex btn btn-next ml-2 gap-2" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}> Next <FaArrowRight className="mt-1" /></button>
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
				<CModalTitle>Add Training Confirmations</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p className="my-3 fs-5">Add information about Training Confirmation</p>
				<CFormSelect
					type="text"
					className="mb-3"
					label="Analyst"
					placeholder="Select..."
					options={[
						"Select...",
						{ label: "No Options" }
					]}
				/>
				<CFormInput
					type="text"
					className="mb-3"
					label="Employee Id"
					placeholder="Employee Id"
					disabled
				/>
				<CFormInput
					type="text"
					className="mb-3"
					label="Role/Title"
					placeholder="Role/Title"
					disabled
				/>
				<CFormSelect
					type="text"
					className="mb-3"
					label="Test Technique"
					placeholder="Select..."
					options={[
						"Select...",
						{ label: "Description" }
					]}
				/>
				<CFormInput
					type="text"
					className="mb-3"
					label="Training Details"
					placeholder="Training Details"
				/>
				<CFormInput
					type="text"
					className="mb-3"
					label="Training Details"
					placeholder="Training Details"
				/>
				<CFormInput
					type="file"
					className="mb-3"
					label="Browse"
					placeholder="Choose File"
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
				<CModalTitle>Delete Training Confirmations</CModalTitle>
			</CModalHeader>
			<CModalBody>
				Do you want to delete this Training Confirmations <code>ARZ ENT</code>?
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

export default TrainingConfirmation;
