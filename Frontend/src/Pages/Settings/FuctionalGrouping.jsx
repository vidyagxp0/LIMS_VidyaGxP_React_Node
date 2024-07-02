// const StatusModal = (_props) => {

// 	const [leftArray, setLeftArray] = useState([
// 		"Description",
// 		"CAPA",
// 	]);

// 	const [rightArray, setRightArray] = useState([]);

// 	const moveRight = () => {
// 		let leftElement = document.getElementsByClassName("check-left");
// 		for (let index = 0; index < leftElement.length; index++) {
// 			if (leftElement[index].checked) {
// 				let data = leftElement[index].value;
// 				let left = leftArray.filter((value) => value !== data);
// 				setLeftArray(left);
// 				rightArray.push(data);
// 				setRightArray(rightArray);
// 				break; // Important
// 			}
// 		}
// 	};

// 	const moveLeft = () => {
// 		let rightElement = document.getElementsByClassName("check-right");
// 		for (let index = 0; index < rightElement.length; index++) {
// 			if (rightElement[index].checked) {
// 				let data = rightElement[index].value;
// 				let right = rightArray.filter((value) => value !== data);
// 				setRightArray(right);
// 				leftArray.push(data);
// 				setLeftArray(leftArray);
// 				break; // Important
// 			}
// 		}
// 	};

// 	const clicked = () => {
// 		let checkboxes = document.querySelectorAll(".check-left, .check-right");
// 		checkboxes.forEach((checkbox) => {
// 			checkbox.checked = false;
// 		});
// 		let allLabels = document.querySelectorAll(".labels");
// 		allLabels.forEach((label) => {
// 			label.classList.remove("clicked");
// 		});

// 		let label = event.target;
// 		label.classList.add("clicked");
// 		label.checked = true;
// 	};

// 	return (
// 		<CModal
// 			alignment="center"
// 			visible={_props.visible}
// 			onClose={_props.closeModal}
// 			size="lg"
// 		>
// 			<CModalHeader>
// 				<CModalTitle>Add Functional Groupings</CModalTitle>
// 			</CModalHeader>
// 			<CModalBody>
// 				<p>Add information and add new Functional Grouping</p>
// 				<CFormInput
// 					className="mb-3"
// 					type="text"
// 					label="Group Name"
// 					placeholder="Group Name"
// 					required
// 				/>

// 				<CFormInput
// 					className="mb-3"
// 					type="text"
// 					label="Group Description"
// 					placeholder="Group Description"
// 					required
// 				/>

// 				<label htmlFor="drag-drop" className="mb-2">Available Technologies</label>
// 				<div className="d-flex" id="drag-drop">
// 					<div className="w-100 m-3">
// 						<h5>Available</h5>
// 						<div
// 							className="shadow p-2 rounded border overflow-y-auto"
// 							style={{ height: "350px" }}
// 						>
// 							<ul className="list-group">
// 								{leftArray.map((data) => (
// 									<li
// 										key={data}
// 										className="bg-light rounded my-1 px-3 py-1 text-dark"
// 									>
// 										<input
// 											type="checkbox"
// 											value={data}
// 											id={data}
// 											className="check-left d-none"
// 										/>
// 										<label
// 											className="labels cursor-pointer bg-light"
// 											htmlFor={data}
// 											onClick={clicked}
// 										>
// 											{data}
// 										</label>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="m-auto justify-content-center">
// 						<button
// 							className="btn shadow py-1 px-3 mt-5 text-warning fs-4"
// 							onClick={() => moveRight()}
// 						>
// 							<TiArrowRightThick />
// 						</button>
// 						<button
// 							className="btn shadow py-1 px-3 mt-2 text-warning fs-4"
// 							onClick={() => moveLeft()}
// 						>
// 							<TiArrowLeftThick />
// 						</button>
// 					</div>
// 					<div className="w-100 m-3">
// 						<h5>Selected</h5>
// 						<div
// 							className="shadow p-2 rounded border overflow-y-auto"
// 							style={{ height: "350px" }}
// 						>
// 							<ul className="list-group">
// 								{rightArray.map((data) => (
// 									<li
// 										key={data}
// 										className="bg-light rounded my-1 px-3 py-1 text-dark"
// 									>
// 										<input
// 											type="checkbox"
// 											value={data}
// 											id={data}
// 											className="check-right d-none"
// 										/>
// 										<label
// 											className="labels cursor-pointer bg-light"
// 											htmlFor={data}
// 											onClick={clicked}
// 										>
// 											{data}
// 										</label>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</CModalBody>
// 			<CModalFooter>
// 				<CButton color="light" onClick={_props.closeModal}>
// 					Back
// 				</CButton>
// 				<CButton className="bg-info text-white">Submit</CButton>
// 			</CModalFooter>
// 		</CModal>
// 	);
// };

// const DeleteModel = (_props) => {
// 	return (
// 		<CModal
// 			alignment="center"
// 			visible={_props.visible}
// 			onClose={_props.closeModal}
// 		>
// 			<CModalHeader>
// 				<CModalTitle>Delete Functional Groupings</CModalTitle>
// 			</CModalHeader>
// 			<CModalBody>
// 				Do you want to delete this Functional Groupings <code>ARZ ENT</code>?
// 			</CModalBody>
// 			<CModalFooter>
// 				<CButton color="light" onClick={_props.closeModal}>
// 					Back
// 				</CButton>
// 				<CButton className="bg-danger text-white" onClick={_props.handleDelete}>Delete</CButton>
// 			</CModalFooter>
// 		</CModal>
// 	);
// };

import React, { useState, useEffect } from "react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import InternalRegistrationModal from "../Modals/InternalRegistrationModal";
import ViewModal from "../Modals/ViewModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    GroupName: "Associate 1",
    GroupDescription: "BA-001",
    TestTechniques: "City A",
    InitiatedAt: "State A",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    GroupName: "Associate 2",
    GroupDescription: "BA-002",
    TestTechniques: "City B",
    InitiatedAt: "State B",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 3,
    GroupName: "Associate 3",
    GroupDescription: "BA-003",
    TestTechniques: "City C",
    InitiatedAt: "State C",
    status: "REINITIATED",
  },
  {
    checkbox: false,
    sno: 4,
    GroupName: "Associate 4",
    GroupDescription: "BA-004",
    TestTechniques: "City D",
    InitiatedAt: "State D",
    status: "APPROVED",
  },
  {
    checkbox: false,
    sno: 5,
    GroupName: "Associate 5",
    GroupDescription: "BA-005",
    TestTechniques: "City E",
    InitiatedAt: "State E",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 6,
    GroupName: "Associate 6",
    GroupDescription: "BA-006",
    TestTechniques: "City F",
    InitiatedAt: "State F",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 7,
    GroupName: "Associate 7",
    GroupDescription: "BA-007",
    TestTechniques: "City G",
    InitiatedAt: "State G",
    status: "INITIATED",
  },
  {
    checkbox: false,
    sno: 8,
    GroupName: "Associate 8",
    GroupDescription: "BA-008",
    TestTechniques: "City H",
    InitiatedAt: "State H",
    status: "REINITIATED",
  },
];

const FuctionalGrouping = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });

  useEffect(() => {
    const counts = {
      DROPPED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    data.forEach((item) => {
      if (item.status === "DROPPED") counts.DROPPED++;
      else if (item.status === "INITIATED") counts.INITIATED++;
      else if (item.status === "REINITIATED") counts.REINITIATED++;
      else if (item.status === "APPROVED") counts.APPROVED++;
      else if (item.status === "REJECTED") counts.REJECTED++;
    });

    setCardCounts(counts);
  }, [data]);

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.GroupName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Group Name", accessor: "GroupName" },
    { header: "Group Description", accessor: "GroupDescription" },
    { header: "Test Techniques", accessor: "TestTechniques" },
    { header: "Initiated At", accessor: "InitiatedAt" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon
            icon={faEye}
            className="mr-2 cursor-pointer"
            onClick={() => onViewDetails(row)}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-2 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
          />
        </>
      ),
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log("Deleted item:", item);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Functional Groupings</h1>
      {/* <div className="grid grid-cols-5 gap-4 mb-4">
        <Card
          title="DROPPED"
          count={cardCounts.DROPPED}
          color="pink"
          onClick={() => handleCardClick("DROPPED")}
        />
        <Card
          title="INITIATED"
          count={cardCounts.INITIATED}
          color="blue"
          onClick={() => handleCardClick("INITIATED")}
        />
        <Card
          title="REINITIATED"
          count={cardCounts.REINITIATED}
          color="yellow"
          onClick={() => handleCardClick("REINITIATED")}
        />
        <Card
          title="APPROVED"
          count={cardCounts.APPROVED}
          color="green"
          onClick={() => handleCardClick("APPROVED")}
        />
        <Card
          title="REJECTED"
          count={cardCounts.REJECTED}
          color="red"
          onClick={() => handleCardClick("REJECTED")}
        />
      </div> */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "DROPPED" },
              { value: "INITIATED", label: "INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "APPROVED" },
              { value: "REJECTED", label: "REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right">
          <ATMButton text="Add Grouping" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
      />
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
    </div>
  );
};

export default FuctionalGrouping;
