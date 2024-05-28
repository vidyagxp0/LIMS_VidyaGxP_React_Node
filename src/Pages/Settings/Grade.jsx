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

function Grade() {
	const [addModal, setAddModal] = useState(false);
	const [removeModal, setRemoveModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const recordsPerPage = 5;

	const badgeStyle = { background: "#cdffca" };

	const tableData = [
          { code: "CC-052024-0000008", name: "Iron Chelator Standard", status: "ACTIVE" },
          { code: "CC-052024-0000007", name: "Organic Solvent", status: "ACTIVE" },
          { code: "CC-052024-0000006", name: "Solvent", status: "ACTIVE" },
          { code: "CC-052024-0000005", name: "Organic Acid", status: "ACTIVE" },
          { code: "CC-052024-0000004", name: "Polymers", status: "ACTIVE" },
          { code: "CC-052024-0000003", name: "Biochemical Compounds", status: "ACTIVE" },
          { code: "CC-052024-0000002", name: "Inorganic Compounds", status: "ACTIVE" },
          { code: "CC-052024-0000001", name: "Organic Compounds", status: "ACTIVE" }
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
			<div id="approval-page" className="h-100 mx-5">
				<div className="container-fluid my-5">
					<div className="main-head mb-4">
						<div className="title fw-bold fs-5">Grades</div>
					</div>
					<div>
						<CRow className="mb-3">
							<CCol sm={3}><CFormInput
								className="mb-3"
								type="text"
								placeholder="Search..."
								value={searchQuery}
								onChange={handleSearchChange}
							/></CCol>
							<CCol sm={3}>
								<CFormSelect
									value={selectedStatus}
									onChange={handleStatusChange}
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
										Add Grade
									</CButton>
								</div>
							</CCol>
						</CRow>
					</div>
					<div className="bg-white mt-5">
						<CTable align="middle" responsive className=" shadow">
							<CTableHead>
								<CTableRow>
									<CTableHeaderCell scope="col" className="text-center">
										<input type="checkbox" />
									</CTableHeaderCell>
									<CTableHeaderCell scope="col">Grade Code</CTableHeaderCell>
									<CTableHeaderCell scope="col">
                                             Grade Name
									</CTableHeaderCell>
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
										<CTableDataCell>{data.code}</CTableDataCell>
										<CTableDataCell>{data.name}</CTableDataCell>
										<CTableDataCell>
											<div
												className="py-2 px-3 small rounded fw-bold"
												style={badgeStyle}
											>
												{data.status}
											</div>
										</CTableDataCell>
										<CTableDataCell>
											<div className="d-flex gap-3">
                                                            <div
													className="cursor-pointer"
													onClick={() => setAddModal(true)}
												>
													<FontAwesomeIcon icon={faPenToSquare} />
												</div>
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
							<button
								className="btn mr-2"
								onClick={() => paginate(1)}
								disabled={currentPage === 1}
							>
								&lt;&lt;
							</button>
							<button
								className="btn mr-2"
								onClick={() => paginate(currentPage - 1)}
								disabled={currentPage === 1}
							>
								&lt;
							</button>
							{[...Array(totalPages)].map((_, index) => (
								<button
									key={index + 1}
									className={`btn mr-2 ${currentPage === index + 1 ? "bg-dark-subtle" : ""
										}`}
									onClick={() => paginate(index + 1)}
								>
									{index + 1}
								</button>
							))}
							<button
								className="btn mr-2"
								onClick={() => paginate(currentPage + 1)}
								disabled={currentPage === totalPages}
							>
								&gt;
							</button>
							<button
								className="btn"
								onClick={() => paginate(totalPages)}
								disabled={currentPage === totalPages}
							>
								&gt;&gt;
							</button>
						</div>
						<div className="">
							<button
								className="btn btn-next ml-2"
								onClick={() => paginate(currentPage + 1)}
								disabled={currentPage === totalPages}
							>
								{" "}
								Next <FaArrowRight />
							</button>
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
				<CButton className="bg-info text-white">Submit</CButton>
			</CModalFooter>
		</CModal>
	);
};

export default Grade;
