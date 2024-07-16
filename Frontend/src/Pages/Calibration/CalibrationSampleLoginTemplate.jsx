//   const StatusModal = (_props) => {
//     return (

//     )
//   }

//   const DeleteModal = (_props) => {
//     return (
//         <CModal alignment="center" visible={_props.visible} onClose={_props.closeModal} size="lg">
//             <CModalHeader>
//                 <CModalTitle>Delete User</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
//                 <p>Are you sure you want to delete this sample login template?</p>
//             </CModalBody>
//             <CModalFooter>
//                 <CButton
//                     color="secondary"
//                     onClick={_props.closeModal}
//                     style={{
//                         marginRight: "0.5rem",
//                         fontWeight: "500",
//                     }}
//                 >
//                     Cancel
//                 </CButton>
//                 <CButton
//                     color="danger"
//                     onClick={_props.confirmDelete}
//                     style={{
//                         fontWeight: "500",
//                         color: "white",
//                     }}
//                 >
//                     Delete
//                 </CButton>
//             </CModalFooter>
//         </CModal>
//     );
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
import CalibrationSampleLoginTemplateModal from "../Modals/CalibrationSampleLoginTemplateModal.jsx";
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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleLogintemplate: "Product 1",
    testPlan: "Seq 1",
    QuantitativeParameters: "Info 1",
    AutoSampleAllotmentRequired: "Start 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleLogintemplate: "Product 2",
    testPlan: "Seq 2",
    QuantitativeParameters: "Info 2",
    AutoSampleAllotmentRequired: "Start 2",
    status: "INITIATED",
  },
];

const CalibrationSampleLoginTemplate = () => {
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
    const storedData = localStorage.getItem("calibrationData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(initialData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calibrationData", JSON.stringify(data));
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
      row.sampleLogintemplate
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
    { header: "Sample Login template", accessor: "sampleLogintemplate" },
    { header: "Test Plan", accessor: "testPlan" },
    {
      header: "Auto Sample Allotment Required",
      accessor: "AutoSampleAllotmentRequired",
    },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      sampleLogintemplate: item["Sample Login template"] || "",
      testPlan: item["Test Plan"] || "",
      AutoSampleAllotmentRequired: item["Auto Sample Allotment Required"] || "",
      status: item["Status"] || "",
    }));
    const concatenateData = [...updatedData];
    setData(concatenateData);
    setIsModalsOpen(false);
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
          sampleLogintemplate: newInstrument.sampleLogintemplate,
          testPlan: newInstrument.testPlan,
          AutoSampleAllotmentRequired: newInstrument.genericName,
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
    const top100Films = [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "The Godfather", year: 1972 },
      { title: "The Godfather: Part II", year: 1974 },
      { title: "Pulp Fiction", year: 1994 },
      { title: "The Dark Knight", year: 2008 },
      { title: "12 Angry Men", year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: "The Lord of the Rings: The Return of the King", year: 2003 },
      { title: "Fight Club", year: 1999 },
      { title: "Star Wars: Episode IV - A" },
    ];
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
            <CModalTitle>Add Sample Login Template</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormInput
              label="Sample Login Template"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.sampleLogintemplate || ""}
              onChange={handleChange}
              name="sampleLogintemplate"
            />
            <div>
              <label htmlFor="testPlan">Test Plan / Revision No.</label>
              <select
                name="testPlan"
                id="testPlan"
                className="mb-3 form-select"
                value={formData?.testPlan || ""}
                onChange={handleChange}
              >
                <option value="">Select a film</option>
                {top100Films.map((film, index) => (
                  <option key={index} value={film.title}>
                    {film.title} ({film.year})
                  </option>
                ))}
              </select>
            </div>

            <CFormInput
              label="Product / Material"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.productMaterial || ""}
              onChange={handleChange}
              name="productMaterial"
            />
            <CFormInput
              label="Product / Material Code"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.productMaterialCode || ""}
              onChange={handleChange}
              name="productMaterialCode"
            />
            <CFormInput
              label="Generic Name"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.AutoSampleAllotmentRequired || ""}
              onChange={handleChange}
              name="AutoSampleAllotmentRequired"
            />
            <CFormInput
              label="Specification ID"
              className="mb-3"
              type="text"
              placeholder=""
              value={formData?.specificationId || ""}
              onChange={handleChange}
              name="specificationId"
            />
            <div className="d-flex gap-3 mt-4">
              <CButton color="light w-50" onClick={closeModal}>
                &lt; Back
              </CButton>
              <CButton color="primary w-50" onClick={handleSave}>
                Add
              </CButton>
            </div>
          </CModalBody>
        </CModal>
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sample Login Template</h1>

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
          <ATMButton
            text="Add Login Template"
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
      <CalibrationSampleLoginTemplateModal
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
        <ImportModal
          initialData={filteredData}
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
  );
};

export default CalibrationSampleLoginTemplate;
