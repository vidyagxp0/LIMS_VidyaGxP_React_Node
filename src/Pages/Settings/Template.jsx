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
import {
	faPenToSquare,
	faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Template() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [deleteId, setDeleteId] = useState(null)
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;


	const [tableData, setTableData] = useState([
		{
			id: 1,
			groupName: "Group A",
			groupDescription: "Description of Group A",
			testTechniques: "Technique A",
			initiatedAt: "2024-05-29",
			status: "Active",
		},
		{
			id: 2,
			groupName: "Group B",
			groupDescription: "Description of Group B",
			testTechniques: "Technique B",
			initiatedAt: "2024-05-30",
			status: "Active",
		},
		{
			id: 3,
			groupName: "Group C",
			groupDescription: "Description of Group C",
			testTechniques: "Technique C",
			initiatedAt: "2024-05-31",
			status: "Active",
		},
		{
			id: 4,
			groupName: "Group D",
			groupDescription: "Description of Group D",
			testTechniques: "Technique D",
			initiatedAt: "2024-06-01",
			status: "Inactive",
		},
		{
			id: 5,
			groupName: "Group E",
			groupDescription: "Description of Group E",
			testTechniques: "Technique E",
			initiatedAt: "2024-06-02",
			status: "Active",
		},
		{
			id: 6,
			groupName: "Group F",
			groupDescription: "Description of Group F",
			testTechniques: "Technique F",
			initiatedAt: "2024-06-03",
			status: "Inactive",
		},
		{
			id: 7,
			groupName: "Group G",
			groupDescription: "Description of Group G",
			testTechniques: "Technique G",
			initiatedAt: "2024-06-04",
			status: "Active",
		},
		{
			id: 8,
			groupName: "Group H",
			groupDescription: "Description of Group H",
			testTechniques: "Technique H",
			initiatedAt: "2024-06-05",
			status: "Active",
		},
		{
			id: 9,
			groupName: "Group I",
			groupDescription: "Description of Group I",
			testTechniques: "Technique I",
			initiatedAt: "2024-06-06",
			status: "Inactive",
		},
		{
			id: 10,
			groupName: "Group J",
			groupDescription: "Description of Group J",
			testTechniques: "Technique J",
			initiatedAt: "2024-06-07",
			status: "Active",
		},
		{
			id: 11,
			groupName: "Group K",
			groupDescription: "Description of Group K",
			testTechniques: "Technique K",
			initiatedAt: "2024-06-08",
			status: "Inactive",
		},
		{
			id: 12,
			groupName: "Group L",
			groupDescription: "Description of Group L",
			testTechniques: "Technique L",
			initiatedAt: "2024-06-09",
			status: "Active",
		},
		{
			id: 13,
			groupName: "Group M",
			groupDescription: "Description of Group M",
			testTechniques: "Technique M",
			initiatedAt: "2024-06-10",
			status: "Active",
		},
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
		const matchesSearchQuery = data.groupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			data.groupDescription.toLowerCase().includes(searchQuery.toLowerCase());
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
					<h4 className="fw-bold">Analyst Template</h4>
				</div>
				<div>
					<CRow className="mt-5 mb-3">
						<CCol sm={3}>
							<CFormInput
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
									{ value: "Active", label: "Active" },
									{ value: "Inactive", label: "Inactive" },
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
									Add Analyst Template
								</CButton>
							</div>
						</CCol>
					</CRow>
				</div>
				<div
					className="rounded bg-white"
					style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', boxShadow: '5px 5px 20px #5D76A9' }}
				>          <CTable align="middle" responsive className="mb-0 rounded-lg table-responsive">
						<CTableHead>
							<CTableRow>
								<CTableHeaderCell style={{ background: "#5D76A9", color: "white" }} scope="col" className="text-center">
									<input type="checkbox" />
								</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>S No.</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>Template Name</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>Description</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>
									No. of Check Items
								</CTableHeaderCell>
								<CTableHeaderCell
									style={{ background: "#5D76A9", color: "white" }}
									scope="col"
								>
									Updated At
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
									<CTableDataCell>{index + 1}</CTableDataCell>
									<CTableDataCell>{data.groupName}</CTableDataCell>
									<CTableDataCell>{data.groupDescription}</CTableDataCell>
									<CTableDataCell>{data.testTechniques}</CTableDataCell>
									<CTableDataCell>{data.initiatedAt}</CTableDataCell>
									<CTableDataCell>
										<button
											className={`py-1 px-3 small w-50 rounded text-light d-flex justify-content-center align-items-center bg-${data.status === "Active"
													? 'green-700'
													: 'red-700'
												}`} >{data.status}
										</button>
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
				<CModalTitle>Add Analyst Template</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p className="my-3 fs-5">Add information and add new Analyst Template</p>
				<CFormInput
					className="mb-3"
					type="text"
					label={
						<>
							Analyst Template
						</>
					}
					placeholder="Analyst Template"
					required
				/>

				<CFormInput
					className="mb-3"
					type="text"
					label={
						<>
							Unique Code
						</>
					}
					placeholder="Unique Code"
					required
				/>

				<CFormInput
					className="mb-3"
					type="text"
					label="No. of Check Items"
					placeholder="No. of Check Items"
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
				<CModalTitle>Delete Analyst Template</CModalTitle>
			</CModalHeader>
			<CModalBody>
				Do you want to delete this Analyst Template <code>ARZ ENT</code>?
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

export default Template;
