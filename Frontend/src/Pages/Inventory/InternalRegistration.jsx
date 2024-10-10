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
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import ReusableModal from "../Modals/ResusableModal";

const initialData = JSON.parse(localStorage.getItem("internalRegistration")) || [];


const generateRandomSymbolCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "SYM-";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const InternalRegistration = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);


  useEffect(() => {
    localStorage.setItem("internalRegistration", JSON.stringify(data));
  }, [data]);

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
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Information and add new Internal</p>
          <CFormSelect
            label="Lot Type"
            value={formData?.lotType || ""}
            name="lotType"
            onChange={handleChange}
            className="mb-3"
            options={[
              { value: "", label: "Select..." },
              { value: "Internal", label: "Internal" },
              { value: "External", label: "External" },
            ]}
          />
          {formData?.lotType === "Internal" && (
            <>
              <CFormSelect
                label="Sample Login"
                className="mb-3"
                value={formData?.sampleLogin || ""}
                name="sampleLogin"
                onChange={handleChange}
                options={[
                  { value: "Option 1", label: "Option 1" },
                  { value: "Option 2", label: "Option 2" },
                  { value: "Option 3", label: "Option 3" },
                  { value: "Option 4", label: "Option 4" },
                  { value: "Option 5", label: "Option 5" },
                ]}
              />
              <CFormInput
                type="text"
                label="Product/Material"
                placeholder="Product/Material"
                className="custom-placeholder mb-3"
                disabled
                value={formData?.productMaterial || ""}
                name="productMaterial"
                onChange={handleChange}
              />
            </>
          )}
          {formData?.lotType === "External" && (
            <>
              <CFormInput
                type="text"
                label="W.S.A.R No."
                className="custom-placeholder mb-3"
                placeholder="AR No."
                value={formData?.wsarNo || ""}
                name="wsarNo"
                onChange={handleChange}
              />
            </>
          )}
          <CFormInput
            type="text"
            label="Sample Reference No."
            placeholder="Sample Reference No."
            className="custom-placeholder mb-3"
            value={formData?.sampleReferenceNo || ""}
            name="sampleReferenceNo"
            onChange={handleChange}
          />
          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div className="flex gap-5">
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="bottleRadio"
                label="Bottle"
                value="Bottle"
                checked={formData?.containerType === "Bottle" || ""}
                onChange={handleChange}
              />
              <CFormCheck
                type="radio"
                name="sampleRadio"
                id="vialRadio"
                label="Vial"
                value="Vial"
                checked={formData?.containerType === "Vial" || ""}
                onChange={handleChange}
              />
            </div>
          </CForm>
          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            className="custom-placeholder mb-3"
            value={formData?.storageCondition || ""}
            name="storageCondition"
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity"
            className="custom-placeholder mb-3"
            value={formData?.wsBatchQuantity || ""}
            name="wsBatchQuantity"
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity"
            className="custom-placeholder mb-3"
            value={formData?.availableQuantity || ""}
            name="availableQuantity"
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity"
            className="custom-placeholder mb-3"
            value={formData?.lotQuantity || ""}
            name="lotQuantity"
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            label="W.s Validate On"
            className="custom-placeholder mb-3"
            value={formData?.wsValidateOn || ""}
            name="wsValidateOn"
            onChange={handleChange}
          />
          <CFormInput
            type="date"
            label="Lot Valid Upto"
            className="custom-placeholder mb-3"
            value={formData?.lotValidUpto || ""}
            name="lotValidUpto"
            onChange={handleChange}
          />
          <CFormLabel>Usage Type</CFormLabel>
          <div className="flex gap-5">
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="singleRadio"
              label="Single"
              value="Single"
              checked={formData?.usageType === "Single" || ""}
              onChange={handleChange}
            />
            <CFormCheck
              type="radio"
              name="usageRadio"
              id="multipleRadio"
              label="Multiple"
              value="Multiple"
              checked={formData?.usageType === "Multiple" || ""}
              onChange={handleChange}
            />
          </div>
          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            className="custom-placeholder mb-3"
            value={formData?.directionOfUsage || ""}
            name="directionOfUsage"
            onChange={handleChange}
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              className="custom-placeholder mb-3"
              value={formData?.noOfPurities || ""}
              name="noOfPurities"
              onChange={handleChange}
            />
            <span className="mt-2 w-10">
              <IoIosAddCircleOutline />
            </span>
          </div>
          <CFormSelect
            label="UOM"
            className="mb-3"
            value={formData?.uom || ""}
            name="uom"
            onChange={handleChange}
            options={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
              { value: "Option 4", label: "Option 4" },
              { value: "Option 5", label: "Option 5" },
            ]}
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="S.No"
              className="custom-placeholder mb-3"
              // value={formData?.purityDetails. || ""}
              name="purityDetails"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Purity"
              placeholder="Purity"
              className="custom-placeholder mb-3"
              // value={formData?.purityDetails.purity || ""}
              name="purityDetails"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Value/UOM"
              placeholder="Value/UOM"
              className="custom-placeholder mb-3"
              // value={formData?.purityDetails.valueUom || ""}
              name="purityDetails"
              onChange={handleChange}
            />
          </div>
          <CFormInput
            type="text"
            label="Additional Purities Information"
            placeholder="Additional Purities Information"
            className="custom-placeholder mb-3"
            value={formData?.additionalPuritiesInformation || ""}
            name="additionalPuritiesInformation"
            onChange={handleChange}
          />
          <CFormSelect
            label="Standard Type"
            className="mb-3"
            value={formData?.standardType || ""}
            namestandardType
            onChange={handleChange}
            options={[
              { value: "Option 1", label: "Option 1" },
              { value: "Option 2", label: "Option 2" },
              { value: "Option 3", label: "Option 3" },
              { value: "Option 4", label: "Option 4" },
              { value: "Option 5", label: "Option 5" },
            ]}
          />
          <CFormInput
            type="text"
            label="Source"
            placeholder="Source"
            className="custom-placeholder mb-3"
            value={formData?.source}
            name="source"
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Comments"
            placeholder="Comments"
            className="custom-placeholder mb-3"
            value={formData?.comments || ""}
            name="comments"
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            label="Container Validity Period"
            placeholder="Container Validity Period"
            className="custom-placeholder mb-3"
            value={formData?.containerValidityPeriod || ""}
            name="containerValidityPeriod"
            onChange={handleChange}
          />
          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="S.No"
              className="custom-placeholder mb-3"
              // value={formData?.containerDetails[0].sno || ""}
              name="containerDetails"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Container No."
              placeholder="Container No."
              className="custom-placeholder mb-3"
              // value={formData?.containerDetails[0].containerNo || ""}
              name="containerDetails"
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Quantity in Containers"
              placeholder="Quantity in Containers"
              className="custom-placeholder mb-3"
              // value={formData?.containerDetails[0].quantityInContainers || ""}
              name="containerDetails"
              onChange={handleChange}
            />
          </div>
          <CFormInput
            type="text"
            label="Total Quantity in Containers"
            placeholder="Total Quantity in Containers"
            className="custom-placeholder mb-3"
            value={formData?.totalQuantityInContainers || ""}
            name="totalQuantityInContainers"
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  // *********************Edit ****************************

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

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const filteredData = data.filter((row) => {
    return (
      row?.additionalPuritiesInformation
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
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
    { header: "Product Name", accessor: "name" },
    { header: "Sequence No.", accessor: "sequence" },
    {
      header: "Additional Information",
      accessor: "additionalPuritiesInformation",
    },
    { header: "Container Starting No.", accessor: "containerStartingNo" },
    { header: "Sample Reference No.", accessor: "sampleReferenceNo" },
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
          lotType: newTechnique.lotType,
          sampleLogin: newTechnique.sampleLogin,
          productMaterial: newTechnique.productMaterial,
          wsarNo: newTechnique.wsarNo,
          sampleReferenceNo: newTechnique.sampleReferenceNo,
          containerType: newTechnique.containerType,
          name: generateRandomSymbolCode(),
          storageCondition: newTechnique.storageCondition,
          wsBatchQuantity: newTechnique.wsBatchQuantity,
          availableQuantity: newTechnique.availableQuantity,
          lotQuantity: newTechnique.lotQuantity,
          sequence: generateRandomSymbolCode(),
          wsValidateOn: newTechnique.wsValidateOn,
          lotValidUpto: newTechnique.lotValidUpto,
          usageType: newTechnique.usageType,
          directionOfUsage: newTechnique.directionOfUsage,
          noOfPurities: newTechnique.noOfPurities,
          additionalPuritiesInformation:
            newTechnique.additionalPuritiesInformation,
          standardType: newTechnique.standardType,
          source: newTechnique.source,
          comments: newTechnique.comments,
          containerValidityPeriod: newTechnique.containerValidityPeriod,
          containerStartingNo: newTechnique.containerStartingNo,
          minNoOfContainersForAlert: newTechnique.minNoOfContainersForAlert,
          noOfContainersPrepared: newTechnique.noOfContainersPrepared,
          totalQuantityInContainers: newTechnique.totalQuantityInContainers,
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

  const fields = [
    { label: "Sno", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Sequence", key: "sequence" },
    { label: "Additional Purities Information", key: "additionalPuritiesInformation" },
    { label: "Container Starting No", key: "containerStartingNo" },
    { label: "Sample Reference No", key: "sampleReferenceNo" },
    { label: "Status", key: "status" }
    
  ];
  a

  const handleStatusUpdate = (internalReg, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.internalReg === internalReg ? { ...row, status: newStatus } : row
      )
    );
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      sequence: item["Sequence"] || "",
      additionalPuritiesInformation: item["Additional Information"] || "",
      containerStartingNo: item["Container Start"] || "",
      sampleReferencesampleReferenceNo: item["Sample Reference"] || "",
      status: item["Status"] || "INITIATED",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);

    setIsModalsOpen(false);
  };

  return (
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Working Standard Internal</h1>
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
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add Internal" color="blue" onClick={openModal} />
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
      <InternalRegistrationModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleModalSubmit}
      />
      
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
     {viewModalData && (
        <ReusableModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="InstrumentMasterReg."
          updateStatus={handleStatusUpdate}
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

export default InternalRegistration;
