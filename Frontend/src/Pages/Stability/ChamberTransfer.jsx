import { useState } from "react";
import { CButton, CCol, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React,{ useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function ChamberTransfer() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.conditionCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
   
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
    { header: "Condition Code", accessor: "conditionCode" },
    { header: "Stability Condition", accessor: "stabilityCondition" },
    { header: "Description", accessor: "description" },
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
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" />
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
    setViewModalData(false);
  };


  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };
  const StatusModal = (_props) => {
    return (
        <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal}>
            <CModalHeader>
                <CModalTitle>Stability Chamber Transfer</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CModalTitle className="mb-3">From</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder=" Storage Condition " />

                <CModalTitle className="mb-3">To</CModalTitle>
                <CFormInput className="mb-3" type="text" label="Chamber ID" placeholder="Chamber Id " />
                <CFormInput className="mb-3" type="text" label="Storage Condition" placeholder="Storage Condition " />

                <CFormSelect className="mb-3" type="select" label="Product" options={[
                    "Select...",
                    { label: "Glass" },
                    { label: "Hydraulic Oil" },
                    { label: "chpoil" },
                    { label: "Feliconar" },
                    { label: "Sacubitril" },
                    { label: "Testamine" }
                ]} placeholder=" " />
                <CFormSelect className="mb-3" type="select" label="Protocol" options={[
                    "Select...",
                    { label: "asd3454" },
                    { label: "STB2" },
                    { label: "Btc1P" },
                    { label: "Stab7654" }
                ]} placeholder=" " />
                <div className="d-flex justify-content-end">
                <CButton className="bg-info text-white mb-3">Display</CButton>
                </div>
            </CModalBody>
            <CModalFooter>
                <CButton color="light" onClick={_props.closeModal}>Back</CButton>
                <CButton className="bg-info text-white">Submit</CButton>
            </CModalFooter>
        </CModal>
    )
}

  return (
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Chamber Transfer</h4>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right">
            <ATMButton
              text="Add Chamber Transfer"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={closeModal} />}
      {viewModalData && <ViewModal visible={viewModalData} closeModal={closeViewModal} />}
    </>
  );
 
}

export default ChamberTransfer;
