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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "Product 1",
    sequence: "Seq 1",
    additionalInfo: "Info 1",
    containerStart: "Start 1",
    sampleReference: "Ref 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    name: "Product 2",
    sequence: "Seq 2",
    additionalInfo: "Info 2",
    containerStart: "Start 2",
    sampleReference: "Ref 2",
    status: "DROPPED",
  },
];

const InternalRegistration = () => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

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
    const addPurityDataRow = () => {
      setFormData((prevState) => ({
        ...prevState,
        purityData: [...prevState.purityData, { purityType: "", valueUOM: "" }],
      }));
    };
    const addContainerDataRow = () => {
      setFormData((prevState) => ({
        ...prevState,
        containerData: [
          ...prevState.containerData,
          { containerNo: "", quantityInContainer: "" },
        ],
      }));
    };
    // const handlePurityDataChange = (index, field, value) => {
    //   const newPurityData = [...formData.purityData];
    //   newPurityData[index][field] = value;
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     purityData: newPurityData,
    //   }));
    // };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>New Internal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Add Information and add new Internal</p>
          <CFormSelect
            label="Lot Type"
            onChange={handleChange}
            value={formData?.lotType}
            className="mb-3"
          >
            <option value="">Select...</option>
            <option value="Internal">Internal</option>
            <option value="External">External</option>
          </CFormSelect>

          {formData?.lotType === "Internal" && (
            <>
              <CFormSelect
                label="Sample Login"
                value={formData?.sampleLogin}
                className="mb-3"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
              </CFormSelect>
              <CFormInput
                type="text"
                label="Product/Material"
                placeholder="Product/Material"
                value={formData?.productMaterial}
                onChange={handleChange}
                className="custom-placeholder mb-3"
                disabled
              />
            </>
          )}

          {formData?.lotType === "External" && (
            <>
              <CFormInput
                type="text"
                label="W.S.A.R No."
                placeholder="AR No."
                onChange={handleChange}
                value={formData?.wsarNo}
                className="custom-placeholder mb-3"
              />
            </>
          )}

          <CFormInput
            type="text"
            label="Sample Reference No."
            placeholder="Sample Reference No."
            value={formData?.sampleReferenceNo}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CForm className="mb-3">
            <CFormLabel>Container Type</CFormLabel>
            <div className="flex gap-5">
              <CFormCheck
                type="radio"
                name="containerType"
                id="bottleRadio"
                label="Bottle"
                onChange={handleChange}
                value="Bottle"
                checked={formData?.containerType === "Bottle"}
              />
              <CFormCheck
                type="radio"
                name="containerType"
                id="vialRadio"
                label="Vial"
                onChange={handleChange}
                value="Vial"
                checked={formData?.containerType === "Vial"}
              />
            </div>
          </CForm>

          <CFormInput
            type="text"
            label="Storage Condition"
            placeholder="Storage Condition"
            value={formData?.storageCondition}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="W.s Batch Quantity"
            placeholder="W.s Batch Quantity"
            onChange={handleChange}
            value={formData?.wsBatchQuantity}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            label="Available Quantity for Distribution"
            placeholder="Available Quantity"
            value={formData?.availableQuantity}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="text"
            onChange={handleChange}
            label="Lot Quantity for Distribution"
            placeholder="Lot Quantity"
            value={formData?.lotQuantity}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="date"
            onChange={handleChange}
            label="W.s Validate On"
            value={formData?.wsValidateOn}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="date"
            label="Lot Valid Upto"
            value={formData?.lotValidUpto}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CFormLabel>Usage Type</CFormLabel>
          <div className="flex gap-5">
            <CFormCheck
              type="radio"
              name="usageType"
              id="singleRadio"
              label="Single"
              onChange={handleChange}
              value="Single"
              checked={formData?.usageType === "Single"}
            />
            <CFormCheck
              type="radio"
              name="usageType"
              id="multipleRadio"
              onChange={handleChange}
              label="Multiple"
              value="Multiple"
              checked={formData?.usageType === "Multiple"}
            />
          </div>

          <CFormInput
            type="text"
            label="Direction of Usage"
            placeholder="Direction of Usage"
            onChange={handleChange}
            value={formData?.directionOfUsage}
            className="custom-placeholder mb-3"
          />

          <div className="flex gap-3">
            <CFormInput
              type="number"
              label="No. Of Purities"
              placeholder="1"
              value={formData?.noOfPurities}
              onChange={handleChange}
              className="custom-placeholder mb-3"
            />
            <span className="mt-2 w-10" onClick={addPurityDataRow}>
              <IoIosAddCircleOutline />
            </span>
          </div>

          <CFormSelect
            label="UOM"
            value={formData?.uom}
            className="custom-placeholder mb-3"
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Kg">Kg</option>
            <option value="g">g</option>
            <option value="L">L</option>
            <option value="ml">ml</option>
          </CFormSelect>

          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Purity
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Value-UOM
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData?.purityData.map((purity, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <select
                        className="form-control"
                        value={purity.purityType}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Acids">Acids</option>
                        <option value="Bases">Bases</option>
                        <option value="Salts">Salts</option>
                        <option value="Solvents">Solvents</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={purity.valueUOM}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CFormInput
            type="number"
            label="Additional Purities Information"
            placeholder="Additional Information"
            value={formData?.additionalPuritiesInformation}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Standard Type"
            placeholder="Standard Type"
            value={formData?.standardType}
            onChange={handleChange}
            className="custom-placeholder mb-3"
          />

          <CFormInput
            type="number"
            label="Source"
            placeholder="Source"
            value={formData?.source}
            onChange={handleChange}
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Comments"
            placeholder="Comments"
            value={formData?.comments}
            onChange={handleChange}
            className="mb-3"
          />

          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Container Validity Period"
              placeholder="Container Validity"
              value={formData?.containerValidityPeriod}
              onChange={handleChange}
              className="mb-3"
            />
            <span className="mt-2">Days</span>
          </div>

          <CFormInput
            type="number"
            label="Container Starting No."
            placeholder="Container No."
            value={formData?.containerStartingNo}
            onChange={handleChange}
            className="mb-3"
          />

          <CFormInput
            type="number"
            label="Minimum No. of Containers for Alert"
            placeholder="1"
            value={formData?.minimumContainersForAlert}
            onChange={handleChange}
            className="mb-3"
          />

          <div className="flex gap-2">
            <CFormInput
              type="number"
              label="No. of Containers Prepared"
              value={formData?.noOfContainersPrepared}
              onChange={handleChange}
              className="mb-3"
            />
            <span className="mt-2 w-10" onClick={addContainerDataRow}>
              <IoIosAddCircleOutline />
            </span>
          </div>

          <div className="container mt-5 mb-3">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Sno.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Container No.
                  </th>
                  <th style={{ background: "#0F93C3 ", color: "white" }}>
                    Quantity in Containers
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData?.containerData.map((container, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <select
                        className="form-control"
                        value={container.containerNo}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Acids">Acids</option>
                        <option value="Bases">Bases</option>
                        <option value="Salts">Salts</option>
                        <option value="Solvents">Solvents</option>
                      </select>
                    </td>
                    <td className="flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        value={container.quantityInContainer}
                        onChange={handleChange}
                      />
                      <span className="mt-2">kg</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 mt-4">
            <CFormInput
              type="number"
              label="Total Quantity in containers"
              placeholder="Total Quantity in containers"
              value={formData?.totalQuantityInContainers}
              onChange={handleChange}
              className="mb-3"
            />
            <span className="mt-2">Kg</span>
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
            Add
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
      row.sampleLogin.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Additional Information", accessor: "additionalInfo" },
    { header: "Container Starting No.", accessor: "containerStart" },
    { header: "Sample Reference No.", accessor: "sampleReference" },
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
  const handleModalSubmit = (newInstrument) => {
    setData((prevData) => [
      ...prevData,
      {
        checkbox: false,
        sno: prevData.length + 1,
        lotType: newInstrument.lotType,
        sampleLogin: newInstrument.sampleLogin,
        productMaterial: newInstrument.productMaterial,
        wsarNo: newInstrument.wsarNo,
        sampleReferenceNo: newInstrument.sampleReferenceNo,
        containerType: newInstrument.containerType,
        storageCondition: newInstrument.storageCondition,
        wsBatchQuantity: newInstrument.wsBatchQuantity,
        availableQuantity: newInstrument.availableQuantity,
        lotQuantity: newInstrument.lotQuantity,
        wsValidateOn: newInstrument.wsValidateOn,
        lotValidUpto: newInstrument.lotValidUpto,
        usageType: newInstrument.usageType,
        directionOfUsage: newInstrument.directionOfUsage,
        noOfPurities: newInstrument.noOfPurities,
        uom: newInstrument.uom,
        additionalPuritiesInformation:
          newInstrument.additionalPuritiesInformation,
        standardType: newInstrument.standardType,
        source: newInstrument.source,
        comments: newInstrument.comments,
        containerValidityPeriod: newInstrument.containerValidityPeriod,
        containerStartingNo: newInstrument.containerStartingNo,
        minimumContainersForAlert: newInstrument.minimumContainersForAlert,
        noOfContainersPrepared: newInstrument.noOfContainersPrepared,
        containerData: newInstrument.containerData || [
          { containerNo: "", quantityInContainer: "" },
        ],
        purityData: newInstrument.purityData || [
          { purityType: "", valueUOM: "" },
        ],
        totalQuantityInContainers: newInstrument.totalQuantityInContainers,
        status: "INITIATED",
        CalibrationStatus: "Active",
      },
    ]);
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      sequence: item["Sequence"] || "",
      additionalInfo: item["Additional Information"] || "",
      containerStart: item["Container Start"] || "",
      sampleReference: item["Sample Reference"] || "",
      status: item["Status"] || "INITIATED",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);

    setIsModalsOpen(false);
  };

  return (
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
      {isViewModalOpen && (
        <ViewModal
          visible={isViewModalOpen}
          closeModal={closeViewModal}
          data={viewModalData}
        />
      )}
      {isModalsOpen && (
        <ImportModal initialData = {filteredData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
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

export default InternalRegistration;
