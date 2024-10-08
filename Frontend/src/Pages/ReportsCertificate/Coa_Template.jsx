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
import CoaTamplateModal from "../Modals/CoaTamplateModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import { CButton, CFormInput, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    SampleType: "ST-001",
    CoaId: "COA-001",
    CoaType: "Type 1",
    UpdatedAt: "2024-06-01",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    SampleType: "ST-002",
    CoaId: "COA-002",
    CoaType: "Type 2",
    UpdatedAt: "2024-06-02",
    status: "Inactive",
  },
];

const Coa_Template = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [cardCounts, setCardCounts] = useState({
    Active: 0,
    Inactive: 0,
  });
  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

 

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  useEffect(() => {
    const counts = {
      Active: 0,
      Inactive: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
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
    const sampleType = row.SampleType ? row.SampleType.toLowerCase() : '';
    const query = searchQuery ? searchQuery.toLowerCase() : '';
  
    return (
      sampleType.includes(query) &&
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
    { header: "Sample Type", accessor: "SampleType" },
    { header: "Cao ID", accessor: "CoaId" },
    { header: "Coa Type", accessor: "CoaType" },
    { header: "Updated At", accessor: "UpdatedAt" },
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
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];
  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      SampleType: item["Sample Type"] || "",
      CoaId: item["Cao ID"] || "",
      CoaType: item["Coa Type"] || "",
      UpdatedAt: item["Updated At"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (coaData) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === coaData.sno ? coaData : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          SampleType:coaData.sampleType,
          CoaId:"COA-003",
          CoaType:coaData.coaType,
          SerialNo:coaData.serialNo,
          MaterialCaption:coaData.materialCaption,
          ReportTitle:coaData.reportTitle,
          FormatNo:coaData.formatNo,
          UpdatedAt: currentDate,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

  //************************************************************************************************ */

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

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };

  const handleEditSave = (updatedData) => {
    const updatedList = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(updatedList);
    closeEditModal();
  };
  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      setFormData(data);
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <div>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Coa Template</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>Add information and Add Coa Template</p>

            <CFormSelect
              className="mb-3"
              label="Sample Type"
              placeholder="Select..."
              options={[
                { label: "Select...", value: "" },
                { label: "Hydraulic Oil", value: "Hydraulic Oil" },
                { label: "HCL", value: "HCL" },
                { label: "Petrochemical", value: "Petrochemical" },
                { label: "Initiated Product", value: "Initiated Product" },
              ]}
              name="SampleType"
              value={formData?.SampleType || ""}
              onChange={handleChange}
            />

            <CFormSelect
              className="mb-3"
              label="Coa Type"
              placeholder="Select Coa Type"
              options={[
                { label: "Select Coa Type", value: "" },
                { label: "With Specification", value: "With Specification" },
                {
                  label: "Without Specification",
                  value: "Without Specification",
                },
                { label: "ERP", value: "ERP" },
              ]}
              name="CoaType"
              value={formData?.CoaType || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Report Title"
              placeholder="Report Title"
              name="ReportTitle"
              value={formData?.ReportTitle || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Product/Material Caption"
              placeholder="Product/Material Caption"
              name="MaterialCaption"
              value={formData?.MaterialCaption || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Serial No."
              placeholder="Serial Number"
              name="SerialNo"
              value={formData?.SerialNo || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              className="mb-3"
              label="Format No."
              placeholder="Format No."
              name="FormatNo"
              value={formData?.FormatNo || ""}
              onChange={handleChange}
            />

            <CModalTitle className="bg-light mb-3">Header</CModalTitle>

            <div className="d-flex pb-2">
              <div className="mb-3">
                <CFormInput
                  type="number"
                  label="Rows"
                  placeholder="Rows"
                  name="Rows"
                  value={formData?.Rows || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="ps-3 w-50">
                <CFormSelect
                  label="Columns"
                  placeholder="Columns"
                  options={[
                    { label: "2", value: "2" },
                    { label: "4", value: "4" },
                    { label: "6", value: "6" },
                  ]}
                  value={formData?.Columns || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <table className="table mb-3">
              <tbody>{renderTable(headerRows, headerColumns)}</tbody>
            </table> */}

            <CModalTitle className="bg-light mb-3">Footer</CModalTitle>

            <div className="d-flex pb-2">
              <div className="mb-3">
                <CFormInput
                  type="number"
                  label="Rows"
                  placeholder="Rows"
                  name="Columns"
                  value={formData?.Columns || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="ps-3 w-50">
                <CFormSelect
                  label="Columns"
                  placeholder="Columns"
                  options={[
                    { label: "2", value: "2" },
                    { label: "4", value: "4" },
                    { label: "6", value: "6" },
                  ]}
                  name="Columns"
                  value={formData?.Columns || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <table className="table mb-3">
              <tbody>{renderTable(footerRows, footerColumns)}</tbody>
            </table> */}

            <div className="d-flex">
              <div className="pe-3">
                <CFormInput
                  type="text"
                  className="mb-3"
                  placeholder="Approved By"
                  name="ApprovedBy"
                  value={formData?.ApprovedBy || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="ps-3 w-50">
                <CFormSelect
                  className="mb-3"
                  placeholder="approved_by"
                  options={[{ label: "approved_by", value: "approved_by" }]}
                  name="approved_by"
                  value={formData?.approved_by || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="pe-3">
                <CFormInput
                  type="text"
                  className="mb-3"
                  placeholder="Reviewed By"
                  name="ReviewedBy"
                  value={formData?.ReviewedBy || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="ps-3 w-50">
                <CFormSelect
                  className="mb-3"
                  placeholder="reviewed_by"
                  options={[{ label: "reviewed_by", value: "reviewed_by" }]}
                  name="reviewed_by"
                  value={formData?.reviewed_by || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="pe-3">
                <CFormInput
                  type="text"
                  className="mb-3"
                  placeholder="Checked By"
                  name="CheckedBy"
                  value={formData?.CheckedBy || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="ps-3 w-50">
                <CFormSelect
                  className="mb-3"
                  placeholder="checked_by"
                  options={[{ label: "checked_by", value: "checked_by" }]}
                  name="checked_by"
                  value={formData?.checked_by || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton color="primary" onClick={handleSave}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  return (
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Certificate of Analysis</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
        <div className="float-right flex gap-4">
        <PDFDownload columns={columns} data={filteredData} fileName="COA_Template.pdf" title="COA Template Data" />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add COA Template" color="blue" onClick={openModal} />
        </div>
      </div>
      <Table
        columns={columns}
        data={filteredData}
        onCheckboxChange={handleCheckboxChange}
        onViewDetails={onViewDetails}
        onDelete={handleDelete}
        openEditModal={openEditModal}
      />
      <CoaTamplateModal visible={isModalOpen} closeModal={closeModal} handleSubmit={handleModalSubmit} />

      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          initialData={initialData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {editModalOpen && (
        <EditModal
          visible={editModalOpen}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}
    </div></>
  );
};
export default Coa_Template;
