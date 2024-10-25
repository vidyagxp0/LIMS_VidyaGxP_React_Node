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
import LotRegistrationModal from "../Modals/LotRegistrationModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    chemicalReagentName: "code1",
    ChemicalRegeantLotNo: "code1",
    noOfContainers: "material 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    chemicalReagentName: "code2",
    ChemicalRegeantLotNo: "lot2",
    noOfContainers: "material 2",
    status: "INITIATED",
  },
];

const generateRandomSymbolCode = () => {
  const characters = "abc0123456789";
  let result = "	CHL-072024-";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const LotRegistration = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
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

  // ************************************************************************************************
  const [editModalData, setEditModalData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

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
            <CModalTitle>Lot Registration</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>Add information</p>
            <p style={{ fontWeight: "700", fontSize: "19px" }}>
              Registration Initiation
            </p>
            <CFormSelect
              label="Chemical / Reagent Name"
              placeholder="Chemical / Reagent Name"
              className="custom-placeholder mb-3"
              name="chemicalReagentName"
              value={formData?.chemicalReagentName || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="CAS / CAT No"
              placeholder="CAS / CAT No"
              className="custom-placeholder mb-3"
              name="casNumber"
              value={formData?.casNumber || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="text"
              label="Delivery Receipt No"
              placeholder="Delivery Receipt No"
              className="custom-placeholder mb-3"
              name="deliveryReceiptNo"
              value={formData?.deliveryReceiptNo || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Certificate"
              placeholder="Certificate"
              className="custom-placeholder mb-3"
              name="certificate"
              value={formData?.certificate || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="No. Of Containers"
              placeholder="No. Of Containers"
              className="custom-placeholder mb-3"
              name="noOfContainers"
              value={formData?.noOfContainers || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Lot Quantity Received"
              placeholder="Lot Quantity Received"
              className="custom-placeholder mb-3"
              name="lotQuantityReceived"
              value={formData?.lotQuantityReceived || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Usage Quantity"
              placeholder="Usage Quantity"
              className="custom-placeholder mb-3"
              name="usageQuantity"
              value={formData?.usageQuantity || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Received by"
              placeholder="Received by"
              className="custom-placeholder mb-3"
              name="receivedBy"
              value={formData?.receivedBy || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Received On"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="receivedOn"
              value={formData?.receivedOn || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="number"
              label="Supplied by"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="suppliedBy"
              value={formData?.suppliedBy || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Manufactured By"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="manufacturedBy"
              value={formData?.manufacturedBy || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Manufacture's Batch No / Lot No."
              placeholder="select"
              className="custom-placeholder mb-3"
              name="manufactureBatchNo"
              value={formData?.manufactureBatchNo || ""}
              onChange={handleChange}
            />

            <CFormSelect
              label="Storage Location"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="storageLocation"
              value={formData?.storageLocation || ""}
              onChange={handleChange}
            />

            <CFormInput
              type="date"
              onFocus={(e) => e.target.showPicker()}
              label="Expiry Date"
              placeholder="select"
              className="custom-placeholder mb-3"
              name="expiryDate"
              value={formData?.expiryDate || ""}
              onChange={handleChange}
            />

            <div className="flex gap-5 items-center justify-center mb-4">
              <CFormInput
                type="text"
                label="Potency"
                placeholder="select"
                className="custom-placeholder mb-3"
                name="potency"
                value={formData?.potency || ""}
                onChange={handleChange}
              />
              <CFormSelect
                label="UOM"
                placeholder="select"
                className="custom-placeholder mb-3"
                name="potencyUOM"
                value={formData?.potencyUOM || ""}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-5 items-center justify-center mb-4">
              <CFormInput
                type="text"
                label="Water Content"
                placeholder="select"
                className="custom-placeholder mb-3"
                name="waterContent"
                value={formData?.waterContent || ""}
                onChange={handleChange}
              />
              <CFormSelect
                label="UOM"
                placeholder="select"
                className="custom-placeholder mb-3"
                name="waterContentUOM"
                value={formData?.waterContentUOM || ""}
                onChange={handleChange}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <label>Comments</label>
              <textarea
                name="comments"
                id="comments"
                className="form-control"
                value={formData?.comments || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Cancel
            </CButton>
            <CButton
              onClick={handleSave}
              style={{ background: "#0F93C3", color: "white" }}
            >
              Add Lot
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  };

  // ************************************************************************************************

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row.chemicalReagentName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
    setIsViewModalOpen(true);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      chemicalReagentName: item["Chemical / Regeant Name"] || "",
      ChemicalRegeantLotNo: item["Chemical / Regeant Lot No"] || "",
      noOfContainers: item["No of Containers"] || "",
      status: item["Status"] || "INITIATED",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data

    setIsModalsOpen(false); // Close the import modal after data upload
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Chemical / Regeant Name", accessor: "chemicalReagentName" },
    { header: "Chemical / Regeant Lot No", accessor: "ChemicalRegeantLotNo" },
    { header: "No of Containers", accessor: "noOfContainers" },
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

  const handleModalSubmit = (requalification) => {
    // const currentDate = new Date().toISOString().split("T")[0];

    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === requalification.sno ? requalification : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          chemicalReagentName: requalification.chemicalReagentName,
          casNumber: requalification.casNumber,
          deliveryReceiptNo: requalification.deliveryReceiptNo,
          ChemicalRegeantLotNo: generateRandomSymbolCode(),
          certificate: requalification.certificate,
          noOfContainers: requalification.noOfContainers,
          lotQuantityReceived: requalification.lotQuantityReceived,
          usageQuantity: requalification.usageQuantity,
          receivedBy: requalification.receivedBy,
          receivedOn: requalification.receivedOn,
          suppliedBy: requalification.suppliedBy,
          manufacturedBy: requalification.manufacturedBy,
          manufactureBatchNo: requalification.manufactureBatchNo,
          storageLocation: requalification.storageLocation,
          expiryDate: requalification.expiryDate,
          potency: requalification.potency,
          potencyUOM: requalification.potencyUOM,
          waterContent: requalification.waterContent,
          waterContentUOM: requalification.waterContentUOM,
          comments: requalification.comments,
          status: "Active",
        },
      ]);
    }
    closeModal();
  };

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
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Chemical Lot Registration</h1>
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
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Group_Name.pdf"
              title="Group Name Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Lot Registration"
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
          openEditModal={openEditModal}
        />
        <LotRegistrationModal
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
            initialData={filteredData}
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
      </div>
    </>
  );
};

export default LotRegistration;
