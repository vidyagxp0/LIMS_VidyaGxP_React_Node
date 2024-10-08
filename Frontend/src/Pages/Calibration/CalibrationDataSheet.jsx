// const StatusModal = (_props) => {
//   return (
   
//   );
// };

// const DeleteModal = (_props) => {
//   return (
//     <CModal
//       alignment="center"
//       visible={_props.visible}
//       onClose={_props.closeModal}
//       size="lg"
//     >
//       <CModalHeader>
//         <CModalTitle>Delete User</CModalTitle>
//       </CModalHeader>
//       <CModalBody>
//         <p>Are you sure you want to delete this Data sheet name?</p>
//       </CModalBody>
//       <CModalFooter>
//         <CButton
//           color="secondary"
//           onClick={_props.closeModal}
//           style={{
//             marginRight: "0.5rem",
//             fontWeight: "500",
//           }}
//         >
//           Cancel
//         </CButton>
//         <CButton
//           color="danger"
//           onClick={_props.confirmDelete}
//           style={{
//             fontWeight: "500",
//             color: "white",
//           }}
//         >
//           Delete
//         </CButton>
//       </CModalFooter>
//     </CModal>
//   );
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
import CalibrationDatasheetModal from "../Modals/CalibrationDatasheetModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
// import "./CalibrationDatasheetModal.css";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    Uniquecode: "Product 1",
    DataSheetName: "Seq 1",
    QuantitativeParameters: "Info 1",
    QualitativeParameters: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    Uniquecode: "Product 2",
    DataSheetName: "Seq 2",
    QuantitativeParameters: "Info 2",
    QualitativeParameters: "Start 2",
    status: "INITIATED",
  },
];


const CalibrationDataSheet = () => {
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
      row.DataSheetName.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Unique code", accessor: "Uniquecode" },
    { header: "DataSheetName", accessor: "DataSheetName" },
    { header: "Quantitative Parameters", accessor: "QuantitativeParameters" },
    { header: "Qualitative Parameters", accessor: "QualitativeParameters" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      Uniquecode: item["Unique code"] || "",
      DataSheetName: item["DataSheetName"] || "",
      QuantitativeParameters: item["Quantitative Parameters"] || "",
      QualitativeParameters: item["Qualitative Parameters"] || "",
      status: item["Status"] || "",
    }));
  
    const concatenateData = [...updatedData];
setData(concatenateData ); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };
  
  const handleModalSubmit = (newInstrument) => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (editModalData) {
      const updatedList = data.map((item) =>
        item.sno === newInstrument.sno ? newInstrument : item
      );
      setData(updatedList);
    } else {
      setData((prevData) => [
        ...prevData,
        {
          checkbox: false,
          sno: prevData.length + 1,
          Uniquecode: newInstrument.Uniquecode,
          DataSheetName: newInstrument.DataSheetName,
          QuantitativeParameters: "QuantitativeParameters",
          QualitativeParameters: "QualitativeParameters",
          status: "Active",
        },
      ]);
    }
    closeModal();
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
    const [showQuantitativeFields, setShowQuantitativeFields] = useState(false);
    const [showQualitativeFields, setShowQualitativeFields] = useState(false);
    const [quantitativeParams, setQuantitativeParams] = useState("");
    const [isSetButtonEnabled, setIsSetButtonEnabled] = useState(false);
    const [isSetPointsModalVisible, setIsSetPointsModalVisible] = useState(false);
    const [numSetPoints, setNumSetPoints] = useState("");
    const [setPoints, setSetPoints] = useState([]);
    const [numQualitativeParams, setNumQualitativeParams] = useState("");
    const [qualitativeParams, setQualitativeParams] = useState([]);
  
    const handleQuantitativeCheckboxChange = () => {
      setShowQuantitativeFields(!showQuantitativeFields);
    };
  
    const handleQualitativeCheckboxChange = () => {
      setShowQualitativeFields(!showQualitativeFields);
    };
  
    const handleQuantitativeParamsChange = (e) => {
      setQuantitativeParams(e.target.value);
    };
  
    const handleAddButtonClick = () => {
      if (quantitativeParams) {
        setIsSetButtonEnabled(true);
      }
    };
  
    const handleSetButtonClick = () => {
      setIsSetPointsModalVisible(true);
    };
  
    const handleSetPointsChange = (e) => {
      setNumSetPoints(e.target.value);
    };
  
    const handleSetPointsOkClick = () => {
      const points = Array.from({ length: numSetPoints }, (_, index) => ({
        id: index + 1,
        value: "",
      }));
      setSetPoints(points);
      setIsSetPointsModalVisible(false);
    };
  
    const handleSetPointsBackClick = () => {
      setIsSetPointsModalVisible(false);
    };
  
    const handleAddQualitative = () => {
      const params = Array.from({ length: numQualitativeParams }, () => "");
      setQualitativeParams(params);
    };
  
    const handleQualitativeParamChange = (e, index) => {
      const updatedParams = [...qualitativeParams];
      updatedParams[index] = e.target.value;
      setQualitativeParams(updatedParams);
    };
    const [formData, setFormData] = useState(data);
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);

    const handleSave = () => {
      onSave(formData);
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
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
          <CModalTitle>Add Calibration Data Sheet</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            label="Name"
            className="mb-3"
            type="text"
            placeholder="Name"
            value={formData?.DataSheetName||" "}
            onChange={ handleChange}
            name="DataSheetName"
          />
          <CFormInput
            label="Unique code"
            className="mb-3"
            type="text"
            placeholder=""
            value={formData?.Uniquecode}
            onChange={ handleChange}
            name="Uniquecode"
          />
          <div className="parameter-section">
            <label className="checkbox-label">
              Quantitative Parameters &nbsp;
              <input
                type="checkbox"
                onChange={handleQuantitativeCheckboxChange}
              />
            </label>
            {showQuantitativeFields && (
              <>
                <label className="parameter-label">
                  No. of Quantitative Parameters
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Quantitative Parameters"
                    value={quantitativeParams}
                    onChange={handleQuantitativeParamsChange}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddButtonClick}
                  >
                    Add
                  </button>
                </div>

                <label className="parameter-label">
                  Parameters and No. of Set Points
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Parameters and No. of Set Points"
                  />
                  <button
                    className="btn btn-primary"
                    disabled={!isSetButtonEnabled}
                    onClick={handleSetButtonClick}
                  >
                    Set
                  </button>
                </div>
              </>
            )}
            <label className="checkbox-label">
              Qualitative Parameter &nbsp;
              <input
                type="checkbox"
                onChange={handleQualitativeCheckboxChange}
              />
            </label>
            {showQualitativeFields && (
              <>
                <label className="parameter-label">
                  No. of Qualitative Parameters
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Qualitative Parameters"
                    value={numQualitativeParams}
                    onChange={(e) => setNumQualitativeParams(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddQualitative}
                  > 
                    Add
                  </button>
                </div>
                {qualitativeParams.map((param, index) => (
                  <div key={index} className="qualitative-parameter">
                    <label>Parameter {index + 1}</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder={`Qualitative Parameter ${index + 1}`}
                      value={param}
                      onChange={(e) => handleQualitativeParamChange(e, index)}
                    />
                  </div>
                ))}
              </>
            )}
            {setPoints.map((point) => (
              <div key={point.id} className="set-point-section">
                <h5>Set Point {point.id}</h5>
                <input
                  className="form-control mb-2"
                  type="text"
                  placeholder="Enter value"
                />
                <div className="form-group">
                  <label>Type</label>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name={`type${point.id}`} /> Single
                    </label>
                    <label>
                      <input type="radio" name={`type${point.id}`} /> Multiple
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Pass Limits</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Minimum"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Maximum"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="UOM"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Pass Limit Description</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Pass Limit Description"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex gap-3 mt-3">
            <CButton color="light w-50" onClick={closeModal}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSave}>
              Submit
            </CButton>
          </div>
        </CModalBody>
      </CModal>

      <CModal
        alignment="center"
        visible={isSetPointsModalVisible}
        onClose={handleSetPointsBackClick}
      >
        <CModalHeader>
          <CModalTitle>Set Points</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table className="table">
            <thead>
              <tr>
                <th>S no.</th>
                <th>No. of Set Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="No. of Set Points"
                    value={numSetPoints}
                    onChange={handleSetPointsChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="modal-footer">
            <CButton color="light w-50" onClick={handleSetPointsBackClick}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50" onClick={handleSetPointsOkClick}>
              OK
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
  }
  return (
    <>
    <LaunchQMS/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calibration Data Sheets</h1>
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
        <PDFDownload columns={columns} data={filteredData} fileName="Calibration_Data_Sheet.pdf" title="Calibration Data Sheet Data" />
            <ATMButton 
            text="Import"
            color='pink'
            onClick={handleOpenModals}
            
             />
          <ATMButton text="Add DataSheet" color="blue" onClick={openModal} />
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
      <CalibrationDatasheetModal
        visible={isModalOpen}
        closeModal={closeModal}
        handleSubmits={handleModalSubmit}
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

{editModalData && (
        <EditModal
          visible={Boolean(editModalData)}
          closeModal={closeEditModal}
          data={editModalData}
          onSave={handleEditSave}
        />
      )}

    </div></>
  );
};

export default CalibrationDataSheet;
