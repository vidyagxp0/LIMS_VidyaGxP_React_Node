import React, { useState } from 'react'
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from '../../components/ATM components/SearchBar/SearchBar';
import Dropdown from '../../components/ATM components/Dropdown/Dropdown';
import ATMButton from '../../components/ATM components/Button/ATMButton';
import Table from '../../components/ATM components/Table/Table';
import { useNavigate } from 'react-router-dom';

const initialData = [
  {
    checkbox: false,
    sno: 1,
    testName: "Test Name 1",
    testCode: "T001",
    testType: "Type A",
    addedOn: "2024-01-01",
    action: [
      <FontAwesomeIcon icon={faEye} key="view1" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit1" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete1" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 2,
    testName: "Test Name 2",
    testCode: "T002",
    testType: "Type B",
    addedOn: "2024-01-02",
    action: [
      <FontAwesomeIcon icon={faEye} key="view2" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit2" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete2" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 3,
    testName: "Test Name 3",
    testCode: "T003",
    testType: "Type A",
    addedOn: "2024-01-03",
    action: [
      <FontAwesomeIcon icon={faEye} key="view3" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit3" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete3" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 4,
    testName: "Test Name 4",
    testCode: "T004",
    testType: "Type C",
    addedOn: "2024-01-04",
    action: [
      <FontAwesomeIcon icon={faEye} key="view4" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit4" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete4" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 5,
    testName: "Test Name 5",
    testCode: "T005",
    testType: "Type A",
    addedOn: "2024-01-05",
    action: [
      <FontAwesomeIcon icon={faEye} key="view5" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit5" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete5" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 6,
    testName: "Test Name 6",
    testCode: "T006",
    testType: "Type B",
    addedOn: "2024-01-06",
    action: [
      <FontAwesomeIcon icon={faEye} key="view6" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit6" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete6" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 7,
    testName: "Test Name 7",
    testCode: "T007",
    testType: "Type C",
    addedOn: "2024-01-07",
    action: [
      <FontAwesomeIcon icon={faEye} key="view7" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit7" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete7" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 8,
    testName: "Test Name 8",
    testCode: "T008",
    testType: "Type A",
    addedOn: "2024-01-08",
    action: [
      <FontAwesomeIcon icon={faEye} key="view8" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit8" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete8" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 9,
    testName: "Test Name 9",
    testCode: "T009",
    testType: "Type B",
    addedOn: "2024-01-09",
    action: [
      <FontAwesomeIcon icon={faEye} key="view9" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit9" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete9" className="cursor-pointer" />,
    ],
  },
  {
    checkbox: false,
    sno: 10,
    testName: "Test Name 10",
    testCode: "T010",
    testType: "Type C",
    addedOn: "2024-01-10",
    action: [
      <FontAwesomeIcon icon={faEye} key="view10" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faPenToSquare} key="edit10" className="mr-2 cursor-pointer" />,
      <FontAwesomeIcon icon={faTrashCan} key="delete10" className="cursor-pointer" />,
    ],
  },
];

const InvestigationL2 = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);

  const navigate = useNavigate()

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.testName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    navigate("/testResultsDetails");

  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Test Type", accessor: "testType" },
    { header: "Added On", accessor: "addedOn" },
    { header: "Actions", accessor: "action",
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() =>{ onViewDetails(row), navigate("/testResultsDetails")}} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer" />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
        </>
      ),
     },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
       <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Test Result QA</h4>
        </div>
     

      <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <Dropdown 
          options={[
            { value: 'All', label: 'All' },
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
           
          ]}
          value={statusFilter}
          onChange={setStatusFilter}
        />
          </div>
          <div className="float-right">
            <ATMButton text="Add investigation L2 In" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} data={filteredData} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
        </div>
    </>
  )
}
export default InvestigationL2