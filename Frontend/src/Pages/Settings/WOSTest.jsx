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
import WosTestModal from "../Modals/WosTestModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    specificationId: "SPH-001",
    productName: "Product A",
    testName: "Purity Test",
    testCode: "PT-001",
    methodNo: "M-001",
    testCategory: "Chemical",
    testTechnique: "Chromatography",
    testType: "Quantitative",
    status: "REJECTED",
  },
  {
    checkbox: false,
    sno: 2,
    specificationId: "SPH-002",
    productName: "Product B",
    testName: "Strength Test",
    testCode: "ST-002",
    methodNo: "M-002",
    testCategory: "Physical",
    testTechnique: "Tensile Testing",
    testType: "Mechanical",
    status: "APPROVED",
  },
];

const WOSTest = () => {
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

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

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
    const [formData, setformData] = useState(data);

    useEffect(() => {
      setformData(data);
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setformData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add WOS Tests</CModalTitle>
        </CModalHeader>
        <p style={{ marginLeft: "20px", marginTop: "5px" }}>
          Add information about WOS test
        </p>
        <CModalBody>
          <CFormSelect
            type="text"
            label="Specification ID"
            placeholder="Select "
            name="specificationId"
            value={formData?.specificationId || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Product/Material Name
            "
            placeholder="Select.. "
            className="custom-placeholder"
            name="productName"
            value={formData?.productName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Test Name
            "
            placeholder="Product/Material"
            className="custom-placeholder"
            name="testName"
            value={formData?.testName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Test Code
            "
            placeholder="Lot Created Date "
            className="custom-placeholder"
            name="testCode"
            value={formData?.testCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Method No.
            "
            placeholder=" "
            className="custom-placeholder"
            name="methodNo"
            value={formData?.methodNo || ""}
            onChange={handleChange}
          />
          <CFormSelect
            type="text"
            label="Copy Test From
            "
            placeholder=""
            className="custom-placeholder"
            name="copyTestFrom"
            value={formData?.copyTestFrom || ""}
            onChange={handleChange}
          />
          <CFormSelect
            type="text"
            label="Test Category
            "
            placeholder=""
            className="custom-placeholder"
            name="testCategory"
            value={formData?.testCategory || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Test Technique
            "
            placeholder=" "
            className="custom-placeholder"
            name="testTechnique"
            value={formData?.testTechnique || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text  "
            label="Test Type
            "
            placeholder=""
            className="custom-placeholder"
            name="testType"
            value={formData?.testType || ""}
            onChange={handleChange}
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton
            onClick={handleSave}
            style={{ background: "#0F93C3", color: "white" }}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  // *********************Edit ****************************

  const [isModalsOpen, setIsModalsOpen] = useState(false);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

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
      row.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      specificationId: item["Specification ID"] || "",
      productName: item["Product Name"] || "",
      testName: item["Test Name"] || "",
      testCode: item["Test Code"] || "",
      methodNo: item["Method No."] || "",
      testCategory: item["testCategory"] || "",
      testTechnique: item["Workflow"] || "",
      testType: item["testType"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Specification ID", accessor: "specificationId" },
    { header: "Product Name", accessor: "productName" },
    { header: "Test Name", accessor: "testName" },
    { header: "Test Code", accessor: "testCode" },
    { header: "Method No.", accessor: "methodNo" },
    { header: "testCategory", accessor: "testCategory" },
    { header: "Test Technique", accessor: "testTechnique" },
    { header: "testType", accessor: "testType" },
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

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = (newTechnique) => {
    // const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === newTechnique.sno ? newTechnique : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          specificationId: newTechnique.specificationId,
          productName: newTechnique.productName,
          testName: newTechnique.testName,
          testCode: newTechnique.testCode,
          methodNo: newTechnique.methodNo,
          copyTestFrom: newTechnique.copyTestFrom,
          testCategory: newTechnique.testCategory,
          testTechnique: newTechnique.testTechnique,
          testType: newTechnique.testType,
          status: "INITIATED",
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">WOS Tests</h1>
      <div className="grid grid-cols-5 gap-4 mb-4">
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
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <Dropdown
            options={[
              { value: "All", label: "All" },
              { value: "DROPPED", label: "    DROPPED" },
              { value: "INITIATED", label: "  INITIATED" },
              { value: "REINITIATED", label: "REINITIATED" },
              { value: "APPROVED", label: "   APPROVED" },
              { value: "REJECTED", label: "   REJECTED" },
            ]}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="float-right flex gap-4">
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />

          <ATMButton text="Add WOS Test" color="blue" onClick={openModal} />
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
      <WosTestModal
        visible={isModalOpen}
        handleSubmit={handleModalSubmit}
        closeModal={closeModal}
      />
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={() => setIsViewModalOpen(false)}
          data={viewModalData}
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
    </div>
  );
};

export default WOSTest;
