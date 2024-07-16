import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormSelect,
} from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    productName: "Product 1",
    chamberID: "CH001",
    actualQuantity: 100,
    availableQuantity: 80,
    protocolType: "Type X",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    productName: "Product 2",
    chamberID: "CH002",
    actualQuantity: 150,
    availableQuantity: 150,
    protocolType: "Type Y",
    status: "INITIATED",
  },
];

function SampleStorage() {
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
  const [lastStatus, setLastStatus] = useState("INITIATED");
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
    setViewModalData(rowData); // Set the data for ViewModal
    setIsViewModalOpen(true); // Open the ViewModal
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Product Name", accessor: "productName" },
    { header: "Chamber ID", accessor: "chamberID" },
    { header: "Actual Quantity", accessor: "actualQuantity" },
    { header: "Available Quantity", accessor: "availableQuantity" },
    { header: "Protocol Type", accessor: "protocolType" },
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
            onClick={() => openEditModal(row.original)}
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
      productName: item["Product Name"] || "",
      chamberID: item["Chamber ID"] || "",
      actualQuantity: item["Actual Quantity"] || "",
      availableQuantity: item["Available Quantity"] || "",
      protocolType: item["Protocol Type"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData) => [
      ...prevData,
      {
        ...newCondition,
        sno: prevData.length + 1,
        checkbox: false,
        status: nextStatus,
      },
    ]);
    setLastStatus(nextStatus);
    setIsModalOpen(false);
  };
  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [rows, setRows] = useState([]);
    const [specificationsID, setSpecificationsID] = useState("");
    const [protocolID, setProtocolID] = useState("");
    const [storageCondition, setStorageCondition] = useState("");
    const [chamberID, setChamberID] = useState("");
    const [actualStorageQuantity, setActualStorageQuantity] = useState("");
    const [availableStorageQuantity, setAvailableStorageQuantity] =
      useState("");
    const [numberOfStoragePosition, setNumberOfStoragePosition] = useState("");
    const [chamberDescription, setChamberDescription] = useState("");
    const [chamberLocation, setChamberLocation] = useState("");

    const handleAddRow = () => {
      const newRow = {
        id: rows.length + 1,
        rackNo: "",
        shelfNo: "",
        position: "",
        quantity: "",
        remarks: "",
      };
      setRows([...rows, newRow]);
    };

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };
    const handleAdd = () => {
      const newCondition = {
        productName: "Product",
        chamberID: chamberID,
        actualQuantity: actualStorageQuantity,
        availableQuantity: availableStorageQuantity,
        protocolType: "protocol-X",
        action: [],
      };
      onAdd(newCondition);
    };

    return (
      <>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Sample Storage</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Specification ID"
              placeholder="Select... "
              options={[
                "",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={specificationsID}
              onChange={(e) => setSpecificationsID(e.target.value)}
            />
            <CFormInput
              type="text"
              label="Product/Material Name"
              placeholder="Testamine "
              disabled
            />
            <CFormSelect
              type="text"
              label="Protocol ID"
              placeholder="select... "
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={protocolID}
              onChange={(e) => setProtocolID(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder="select... "
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={storageCondition}
              onChange={(e) => setStorageCondition(e.target.value)}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Chamber ID"
              placeholder="select... "
              value={chamberID}
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              onChange={(e) => setChamberID(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label=" Actual Storage Quantity"
              placeholder="Actual Storage Quantity "
              value={actualStorageQuantity}
              onChange={(e) => setActualStorageQuantity(e.target.value)}
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Available Storage Quantity"
              placeholder="Available Storage Quantity "
              value={availableStorageQuantity}
              onChange={(e) => setAvailableStorageQuantity(e.target.value)}
            />

            <div className="gap-4">
              <CFormInput
                className="mb-3"
                type="text"
                label="Number Of Storage Positions"
                placeholder="Number Of Positions"
                value={numberOfStoragePosition}
                onChange={(e) => setNumberOfStoragePosition(e.target.value)}
              />
              <CButton
                className="bg-primary text-white mb-4"
                onClick={handleAddRow}
              >
                Add Rows
              </CButton>
            </div>
            {rows.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Rack No.</th>
                    <th>Shelf No.</th>
                    <th>Position</th>
                    <th>Quantity (kg)</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        <select
                          value={row.rackNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].rackNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          {/* Populate options as needed */}
                          <option value="">Select..</option>
                          <option value="rack1">Rack 1</option>
                          <option value="rack2">Rack 2</option>
                          {/* Add more options */}
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Shelfs</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Positions</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="border-1 border-gray-500"
                          value={row.quantity}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].quantity = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].remarks = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Description"
              placeholder=" Chamber Description"
              value={chamberDescription}
              onChange={(e) => setChamberDescription(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Location"
              placeholder=" Chamber Location"
              value={chamberLocation}
              onChange={(e) => setChamberLocation(e.target.value)}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleAdd}>
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [rows, setRows] = useState([]);
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
      onSave(formData);
    };
    const handleAddRow = () => {
      const newRow = {
        id: rows.length + 1,
        rackNo: "",
        shelfNo: "",
        position: "",
        quantity: "",
        remarks: "",
      };
      setRows([...rows, newRow]);
    };
    return (
      <>
        <CModal
          alignment="center"
          visible={visible}
          onClose={closeModal}
          size="lg"
        >
          <CModalHeader>
            <CModalTitle>Add Sample Storage</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormSelect
              className="mb-3"
              type="select"
              label="Specification ID"
              placeholder="Select... "
              name="specificationsID"
              options={[
                "",
                { label: "HCL10132%" },
                { label: "HOS 234" },
                { label: "CHPOIL001" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={formData?.specificationsID || ""}
              onChange={handleChange}
            />
            <CFormInput
              type="text"
              label="Product/Material Name"
              placeholder="Testamine "
              disabled
            />
            <CFormSelect
              type="text"
              label="Protocol ID"
              placeholder="select... "
              name="protocolID"
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={formData?.protocolID || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Storage Conditions"
              placeholder="select... "
              name="storageCondition"
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              value={formData?.storageCondition || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="select"
              label="Chamber ID"
              placeholder="select... "
              name="chamberID"
              value={formData?.chamberID || ""}
              options={[
                "select...",
                { label: "asdf3453" },
                { label: "001" },
                { label: "STP132432" },
                { label: "MB-PM-001/01" },
                { label: "RPS-TSLV-00" },
                { label: "rest0001" },
              ]}
              onChange={(e) => setChamberID(e.target.value)}
            />
            <CFormInput
              className="mb-3"
              type="text"
              label=" Actual Storage Quantity"
              placeholder="Actual Storage Quantity "
              value={formData?.actualQuantity || ""}
              onChange={handleChange}
              name="actualQuantity"
            />

            <CFormInput
              className="mb-3"
              type="text"
              label="Available Storage Quantity"
              placeholder="Available Storage Quantity "
              value={formData?.availableQuantity || ""}
              onChange={handleChange}
              name="availableQuantity"
            />

            <div className="gap-4">
              <CFormInput
                className="mb-3"
                type="text"
                label="Number Of Storage Positions"
                placeholder="Number Of Positions"
                value={formData?.numberOfStoragePosition || ""}
                onChange={handleChange}
                name="numberOfStoragePosition"
              />
              <CButton
                className="bg-primary text-white mb-4"
                onClick={handleAddRow}
              >
                Add Rows
              </CButton>
            </div>
            {rows.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Rack No.</th>
                    <th>Shelf No.</th>
                    <th>Position</th>
                    <th>Quantity (kg)</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        <select
                          value={row.rackNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].rackNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          {/* Populate options as needed */}
                          <option value="">Select..</option>
                          <option value="rack1">Rack 1</option>
                          <option value="rack2">Rack 2</option>
                          {/* Add more options */}
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Shelfs</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <select
                          value={row.shelfNo}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].shelfNo = e.target.value;
                            setRows(updatedRows);
                          }}
                        >
                          <option value="">Positions</option>
                          <option value="shelf1">Shelf 1</option>
                          <option value="shelf2">Shelf 2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="number"
                          className="border-1 border-gray-500"
                          value={row.quantity}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].quantity = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => {
                            const updatedRows = [...rows];
                            updatedRows[index].remarks = e.target.value;
                            setRows(updatedRows);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Description"
              placeholder=" Chamber Description"
              value={formData?.chamberDescription || ""}
              onChange={handleChange}
              name="chamberDescription"
            />
            <CFormInput
              className="mb-3"
              type="text"
              label="Chamber Location"
              placeholder=" Chamber Location"
              value={formData?.chamberLocation || ""}
              onChange={handleChange}
              name="chamberLocation"
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="light" onClick={closeModal}>
              Back
            </CButton>
            <CButton className="bg-info text-white" onClick={handleSave}>
              Update
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sample Storage</h1>
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
          <PDFDownload columns={columns} data={filteredData} fileName="Sample_Storage.pdf" title="Sample Storage Data" />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Sample Storage"
              color="blue"
              onClick={openModal}
            />
          </div>
        </div>
        <Table
          columns={columns}
          data={filteredData}
          onDelete={handleDelete}
          onCheckboxChange={handleCheckboxChange}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />

        {isModalOpen && (
          <StatusModal
            visible={isModalOpen}
            closeModal={closeModal}
            onAdd={addNewStorageCondition}
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
        {editModalData && (
          <EditModal
            visible={Boolean(editModalData)}
            closeModal={closeEditModal}
            data={editModalData}
            onSave={handleEditSave}
          />
        )}
      </div>
    </>
  );
}

export default SampleStorage;
