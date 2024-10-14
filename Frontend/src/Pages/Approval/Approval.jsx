import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../components/ATM components/Table/Table";
import Details from "./Details";
import ImportModal from "../Modals/importModal";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import {
  CButton,
  CCol,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload ";

const initialData = [
  {
    sno: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    checkbox: false,
  },
  {
    sno: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
    checkbox: false,
  },
  {
    sno: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Manager",
    status: "Active",
    checkbox: false,
  },
];

const Approval = () => {
  const [data, setData] = useState(initialData);
  const [viewModalData, setViewModalData] = useState(null);
  const [lastStatus, setLastStatus] = useState("Active");
  const [editModalData, setEditModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };
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

  const columns = [
    {
      header: (
        <input
          type="checkbox"
          checked={data.every((row) => row.checkbox)}
          onChange={handleSelectAll}
        />
      ),
      accessor: "checkbox",
    },
    { header: "S No.", accessor: "sno" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      name: item["Name"] || "",
      email: item["Email"] || "",
      role: item["Role"] || "",
      status: item["Status"] || "",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const closeViewModal = () => {
    setViewModalData(false);
  };
  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleDelete = (item) => {
    const newData = data.filter((d) => d.sno !== item.sno);
    setData(newData);
    console.log("Deleted item:", item);
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

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Update User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="User Name"
            placeholder="UserName "
            value={formData?.name || ""}
            onChange={handleChange}
            name="name"
          />
          <CFormInput
            className="mb-3"
            type="email"
            label="Gmail Address"
            placeholder="sample@gmail.com"
            value={formData?.email || ""}
            onChange={handleChange}
            name="email"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Role"
            placeholder="Role "
            value={formData?.role || ""}
            onChange={handleChange}
            name="role"
          />
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
    );
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4"></div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={initialData}
              fileName="approval.pdf"
              title="Approval Data" 
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          </div>
        </div>
        <Table
          columns={columns}
          data={data}
          onCheckboxChange={handleCheckboxChange}
          onDelete={handleDelete}
          onViewDetails={onViewDetails}
          openEditModal={openEditModal}
        />
      </div>
      {viewModalData && (
        <Details visible={viewModalData} closeModal={closeViewModal} />
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
    </>
  );
};

export default Approval;
