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

function FuctionalGrouping() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;

	const badgeStyle = { background: "#cdffca" };

	const tableData = [
		{
			SNo: 1,
			groupName: "Group A",
			groupDescription: "Description of Group A",
			testTechniques: "Technique A",
			initiatedAt: "2024-05-29",
			status: "Active",
		},
		{
			SNo: 2,
			groupName: "Group B",
			groupDescription: "Description of Group B",
			testTechniques: "Technique B",
			initiatedAt: "2024-05-30",
			status: "Active",
		},
		{
			SNo: 3,
			groupName: "Group C",
			groupDescription: "Description of Group C",
			testTechniques: "Technique C",
			initiatedAt: "2024-05-31",
			status: "Active",
		},
		{
			SNo: 4,
			groupName: "Group D",
			groupDescription: "Description of Group D",
			testTechniques: "Technique D",
			initiatedAt: "2024-06-01",
			status: "Inactive",
		},
		{
			SNo: 5,
			groupName: "Group E",
			groupDescription: "Description of Group E",
			testTechniques: "Technique E",
			initiatedAt: "2024-06-02",
			status: "Active",
		},
		{
			SNo: 6,
			groupName: "Group F",
			groupDescription: "Description of Group F",
			testTechniques: "Technique F",
			initiatedAt: "2024-06-03",
			status: "Inactive",
		},
		{
			SNo: 7,
			groupName: "Group G",
			groupDescription: "Description of Group G",
			testTechniques: "Technique G",
			initiatedAt: "2024-06-04",
			status: "Active",
		},
		{
			SNo: 8,
			groupName: "Group H",
			groupDescription: "Description of Group H",
			testTechniques: "Technique H",
			initiatedAt: "2024-06-05",
			status: "Active",
		},
		{
			SNo: 9,
			groupName: "Group I",
			groupDescription: "Description of Group I",
			testTechniques: "Technique I",
			initiatedAt: "2024-06-06",
			status: "Inactive",
		},
		{
			SNo: 10,
			groupName: "Group J",
			groupDescription: "Description of Group J",
			testTechniques: "Technique J",
			initiatedAt: "2024-06-07",
			status: "Active",
		},
		{
			SNo: 11,
			groupName: "Group K",
			groupDescription: "Description of Group K",
			testTechniques: "Technique K",
			initiatedAt: "2024-06-08",
			status: "Inactive",
		},
		{
			SNo: 12,
			groupName: "Group L",
			groupDescription: "Description of Group L",
			testTechniques: "Technique L",
			initiatedAt: "2024-06-09",
			status: "Active",
		},
		{
			SNo: 13,
			groupName: "Group M",
			groupDescription: "Description of Group M",
			testTechniques: "Technique M",
			initiatedAt: "2024-06-10",
			status: "Active",
		},
	];

	const handleStatusChange = (e) => {
		setSelectedStatus(e.target.value);
		setCurrentPage(1);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
	};

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
			<div id="approval-page" className="h-100 mx-5">
				<div className="container-fluid my-5">
					<div className="main-head mb-4">
						<div className="title fw-bold fs-5">Functional Groupings</div>
					</div>
					<div>
						<CRow className="mb-3">
							<CCol sm={3}><CFormInput
								className="mb-3 border-2"
								type="text"
								placeholder="Search..."
								value={searchQuery}
								onChange={handleSearchChange}
							/></CCol>
							<CCol sm={3}>
								<CFormSelect
									value={selectedStatus}
									onChange={handleStatusChange}
									className="border-2"
									options={[
										"Select Status",
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
										Add Grouping
									</CButton>
								</div>
							</CCol>
						</CRow>
					</div>
					<div className="bg-white mt-5 border-2 rounded shadow p-3">
						<CTable align="middle" responsive className="table-responsive">
							<CTableHead>
								<CTableRow>
									<CTableHeaderCell scope="col" className="text-center">
										<input type="checkbox" />
									</CTableHeaderCell>
									<CTableHeaderCell scope="col">S No.</CTableHeaderCell>
									<CTableHeaderCell scope="col">Group Name</CTableHeaderCell>
									<CTableHeaderCell scope="col">
										Group Description
									</CTableHeaderCell>
									<CTableHeaderCell scope="col">
										Test Techniques
									</CTableHeaderCell>
									<CTableHeaderCell scope="col">Initiated At </CTableHeaderCell>
									<CTableHeaderCell scope="col">Status</CTableHeaderCell>
									<CTableHeaderCell scope="col">Actions</CTableHeaderCell>
								</CTableRow>
							</CTableHead>
							<CTableBody>
								{currentRecords.map((data, index) => (
									<CTableRow key={index}>
										<CTableHeaderCell scope="row" className="text-center">
											<input type="checkbox" />
										</CTableHeaderCell>
										<CTableDataCell>{data.SNo}</CTableDataCell>
										<CTableDataCell>{data.groupName}</CTableDataCell>
										<CTableDataCell>{data.groupDescription}</CTableDataCell>
										<CTableDataCell>{data.testTechniques}</CTableDataCell>
										<CTableDataCell>{data.initiatedAt}</CTableDataCell>
										<CTableDataCell>
											<div className=" w-75">
												<div className={`p-2 small rounded fw-bold text-light d-flex justify-content-center align-items-center bg-${data.status === 'Active' ? 'green-700'
													: 'red-700'}`} >{data.status.toUpperCase()}</div>
											</div>
										</CTableDataCell>
										<CTableDataCell>
											<div className="d-flex gap-3">
												<Link to="/settings/bussinessAssociateDetails">
													<FontAwesomeIcon icon={faEye} />
												</Link>
												<div
													className="cursor-pointer"
													onClick={() => setRemoveModal(true)}
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
					closeModal={() => setRemoveModal(false)}
				/>
			)}
		</>
	);
}

const StatusModal = (_props) => {

	const [leftArray, setLeftArray] = useState([
		"Description",
		"CAPA",
	]);

	const [rightArray, setRightArray] = useState([]);

	const moveRight = () => {
		let leftElement = document.getElementsByClassName("check-left");
		for (let index = 0; index < leftElement.length; index++) {
			if (leftElement[index].checked) {
				let data = leftElement[index].value;
				let left = leftArray.filter((value) => value !== data);
				setLeftArray(left);
				rightArray.push(data);
				setRightArray(rightArray);
				break; // Important
			}
		}
	};

	const moveLeft = () => {
		let rightElement = document.getElementsByClassName("check-right");
		for (let index = 0; index < rightElement.length; index++) {
			if (rightElement[index].checked) {
				let data = rightElement[index].value;
				let right = rightArray.filter((value) => value !== data);
				setRightArray(right);
				leftArray.push(data);
				setLeftArray(leftArray);
				break; // Important
			}
		}
	};

	const clicked = () => {
		let checkboxes = document.querySelectorAll(".check-left, .check-right");
		checkboxes.forEach((checkbox) => {
			checkbox.checked = false;
		});
		let allLabels = document.querySelectorAll(".labels");
		allLabels.forEach((label) => {
			label.classList.remove("clicked");
		});

		let label = event.target;
		label.classList.add("clicked");
		label.checked = true;
	};

	return (
		<CModal
			alignment="center"
			visible={_props.visible}
			onClose={_props.closeModal}
			size="lg"
		>
			<CModalHeader>
				<CModalTitle>Add Functional Groupings</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p>Add information and add new Functional Grouping</p>
				<CFormInput
					className="mb-3"
					type="text"
					label="Group Name"
					placeholder="Group Name"
					required
				/>

				<CFormInput
					className="mb-3"
					type="text"
					label="Group Description"
					placeholder="Group Description"
					required
				/>

				<label htmlFor="drag-drop" className="mb-2">Available Technologies</label>
				<div className="d-flex" id="drag-drop">
					<div className="w-100 m-3">
						<h5>Available</h5>
						<div
							className="shadow p-2 rounded border overflow-y-auto"
							style={{ height: "350px" }}
						>
							<ul className="list-group">
								{leftArray.map((data) => (
									<li
										key={data}
										className="bg-light rounded my-1 px-3 py-1 text-dark"
									>
										<input
											type="checkbox"
											value={data}
											id={data}
											className="check-left d-none"
										/>
										<label
											className="labels cursor-pointer bg-light"
											htmlFor={data}
											onClick={clicked}
										>
											{data}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="m-auto justify-content-center">
						<button
							className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
							onClick={() => moveRight()}
						>
							<TiArrowRightThick />
						</button>
						<button
							className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
							onClick={() => moveLeft()}
						>
							<TiArrowLeftThick />
						</button>
					</div>
					<div className="w-100 m-3">
						<h5>Selected</h5>
						<div
							className="shadow p-2 rounded border overflow-y-auto"
							style={{ height: "350px" }}
						>
							<ul className="list-group">
								{rightArray.map((data) => (
									<li
										key={data}
										className="bg-light rounded my-1 px-3 py-1 text-dark"
									>
										<input
											type="checkbox"
											value={data}
											id={data}
											className="check-right d-none"
										/>
										<label
											className="labels cursor-pointer bg-light"
											htmlFor={data}
											onClick={clicked}
										>
											{data}
										</label>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
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
				<CModalTitle>Delete Functional Groupings</CModalTitle>
			</CModalHeader>
			<CModalBody>
				Do you want to delete this Functional Groupings <code>ARZ ENT</code>?
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

export default FuctionalGrouping;
