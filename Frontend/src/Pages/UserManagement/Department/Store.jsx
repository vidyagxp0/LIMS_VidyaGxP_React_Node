// import React, { useEffect, useState } from "react";
// import "./Admin.css";
// import { FaArrowRight } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faTrashCan,
//   faEye,
// } from "@fortawesome/free-regular-svg-icons";
// import {
//   CButton,
//   CCol,
//   CFormInput,
//   CFormSelect,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import Dropdown from "../../../components/ATM components/Dropdown/Dropdown";
// import ATMButton from "../../../components/ATM components/Button/ATMButton";
// import Table from "../../../components/ATM components/Table/Table";
// import ImportModal from "../../Modals/importModal";
// import PDFDownload from "../../PDFComponent/PDFDownload ";

// const initialData = [
//   {
//     checkbox: false,
//     sno: 1,
//     employeeId: "EMP001",
//     storageName: "Analyst 1",
//     role: "Role 1",
//     email: "analyst1@example.com",
//     addedOn: "2024-01-01",
//     attachment: "attachment",
//     status: "Active",
//     action: [],
//   },
//   {
//     checkbox: false,
//     sno: 2,
//     employeeId: "EMP002",
//     storageName: "Analyst 2",
//     role: "Role 2",
//     email: "analyst2@example.com",
//     addedOn: "2024-01-02",
//     attachment: "attachment",
//     status: "Inactive",
//     action: [],
//   },
//   {
//     checkbox: false,
//     sno: 3,
//     employeeId: "EMP003",
//     storageName: "Analyst 3",
//     role: "Role 3",
//     email: "analyst3@example.com",
//     addedOn: "2024-01-03",
//     attachment: "attachment",
//     status: "Active",
//     action: [],
//   },
// ];

// const Store = () => {
//   const [data, setData] = useState(initialData);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [isModalsOpen, setIsModalsOpen] = useState(false);
//   const [lastStatus, setLastStatus] = useState("Inactive");
//   const [editModalData, setEditModalData] = useState(null);
//   const handleCheckboxChange = (index) => {
//     const newData = [...data];
//     newData[index].checkbox = !newData[index].checkbox;
//     setData(newData);
//   };

//   const handleOpenModals = () => {
//     setIsModalsOpen(true);
//   };

//   const handleCloseModals = () => {
//     setIsModalsOpen(false);
//   };

//   const onViewDetails = (rowData) => {
//     setViewModalData(rowData);
//   };

//   const handleSelectAll = (e) => {
//     const checked = e.target.checked;
//     const newData = data.map((row) => ({ ...row, checkbox: checked }));
//     setData(newData);
//   };

//   const filteredData = data.filter((row) => {
//     return (
//       row.storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (statusFilter === "All" || row.status === statusFilter)
//     );
//   });

//   const columns = [
//     {
//       header: <input type="checkbox" onChange={handleSelectAll} />,
//       accessor: "checkbox",
//     },
//     { header: "SrNo.", accessor: "sno" },
//     { header: "Employee ID", accessor: "employeeId" },
//     { header: "Analyst Name.", accessor: "storageName" },
//     { header: "Role", accessor: "role" },
//     { header: "Email.", accessor: "email" },
//     { header: "Added On.", accessor: "addedOn" },
//     { header: "attachment", accessor: "attachment" },
//     { header: "Status", accessor: "status" },
//     {
//       header: "Actions",
//       accessor: "action",
//       Cell: ({ row }) => (
//         <>
//           <FontAwesomeIcon
//             icon={faEye}
//             className="mr-2 cursor-pointer"
//             onClick={() => onViewDetails(row)}
//           />
//           <FontAwesomeIcon
//             icon={faPenToSquare}
//             className="mr-2 cursor-pointer"
//           />
//           <FontAwesomeIcon
//             icon={faTrashCan}
//             className="cursor-pointer"
//             onClick={() => onDeleteItem(row)}
//           />
//         </>
//       ),
//     },
//   ];

//   const handleDelete = (item) => {
//     const newData = data.filter((d) => d !== item);
//     setData(newData);
//     console.log("Deleted item:", item);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleExcelDataUpload = (excelData) => {
//     const updatedData = excelData.map((item, index) => ({
//       checkbox: false,
//       sno: index + 1,
//       employeeId: item["Employee Id"] || "",
//       storageName: item["Storage Name"] || "",
//       role: item["Role"] || "",
//       email: item["Email"] || "",
//       addedOn: item["Added On"] || "",
//       attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
//       status: item["Status"] || "",
//     }));

//     // Concatenate the updated data with existing data
//     const concatenatedData = [...updatedData];
//     setData(concatenatedData);
//     setIsModalsOpen(false); // Update data state with parsed Excel data
//   };

//   const addNewStorageCondition = (newCondition) => {
//     const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
//     setData((prevData) => [
//       ...prevData,
//       {
//         ...newCondition,
//         sno: prevData.length + 1,
//         checkbox: false,
//         status: nextStatus,
//       },
//     ]);
//     setLastStatus(nextStatus);
//     setIsModalOpen(false);
//   };
//   const StatusModal = ({ visible, closeModal, onAdd }) => {
//     const [name, setName] = useState("");
//     const [contact, setContact] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");

//     const handleAdd = () => {
//       const newCondition = {
//         employeeId: "EMP00",
//         storageName: name,
//         role: "Role 00",
//         email: email,
//         addedOn: new Date().toISOString().split("T")[0],
//         attachment: "attachment",
//         action: [],
//       };
//       onAdd(newCondition);
//     };
//     return (
//       <CModal alignment="center" visible={visible} onClose={closeModal}>
//         <CModalHeader>
//           <CModalTitle>Add User</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>Please Add User To fill This Details</p>
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="User Name"
//             placeholder="UserName "
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <CFormInput
//             className="mb-3"
//             type="number"
//             label="Contact Number"
//             placeholder="+91 0000000000 "
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//           <CFormInput
//             className="mb-3"
//             type="email"
//             label="Gmail Address"
//             placeholder="sample@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Address"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={closeModal}>
//             Back
//           </CButton>
//           <CButton color="primary" onClick={handleAdd}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     );
//   };

//   const openEditModal = (rowData) => {
//     setEditModalData(rowData);
//   };

//   const closeEditModal = () => {
//     setEditModalData(null);
//   };
//   const handleEditSave = (updatedData) => {
//     const newData = data.map((item) =>
//       item.sno === updatedData.sno ? updatedData : item
//     );
//     setData(newData);
//     setEditModalData(null);
//   };

//   const EditModal = ({ visible, closeModal, data, onSave }) => {
//     const [formData, setFormData] = useState(data);
//     useEffect(() => {
//       if (data) {
//         setFormData(data);
//       }
//     }, [data]);

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//       onSave(formData);
//     };

//     return (
//       <CModal alignment="center" visible={visible} onClose={closeModal}>
//         <CModalHeader>
//           <CModalTitle>Update User</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="User Name"
//             placeholder="UserName "
//             value={formData?.storageName || ""}
//             onChange={handleChange}
//             name="storageName"
//           />
//           <CFormInput
//             className="mb-3"
//             type="number"
//             label="Contact Number"
//             placeholder="+91 0000000000 "
//             value={formData?.contact || ""}
//             onChange={handleChange}
//             name="contact"
//           />
//           <CFormInput
//             className="mb-3"
//             type="email"
//             label="Gmail Address"
//             placeholder="sample@gmail.com"
//             value={formData?.email || ""}
//             onChange={handleChange}
//             name="email"
//           />
//           <CFormInput
//             className="mb-3"
//             type="text"
//             label="Address"
//             placeholder="Address "
//             value={formData?.address || ""}
//             onChange={handleChange}
//             name="address"
//           />
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="light" onClick={closeModal}>
//             Back
//           </CButton>
//           <CButton color="primary" onClick={handleSave}>
//             Submit
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     );
//   };


//   return (
//     <div className="m-5 mt-3">
//       <div className="main-head">
//         <h4 className=" fw-bold">Store / Employees</h4>
//       </div>
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex space-x-4">
//           <Dropdown
//             options={[
//               { value: "All", label: "All" },
//               { value: "Active", label: "Active" },
//               { value: "Inactive", label: "Inactive" },
//             ]}
//             value={statusFilter}
//             onChange={setStatusFilter}
//           />
//         </div>
//         <div className="float-right flex gap-4">
//         <PDFDownload columns={columns} data={filteredData} fileName="User_Store.pdf" title="User Management Store Data" />
//           <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
//           <ATMButton text="Add User" color="blue" onClick={openModal} />
//         </div>
//       </div>
//       <Table
//         columns={columns}
//         data={filteredData}
//         onDelete={handleDelete}
//         onCheckboxChange={handleCheckboxChange}
//         onViewDetails={onViewDetails}
//         openEditModal={openEditModal}
//       />

//       {isModalOpen && (
//         <StatusModal
//           visible={isModalOpen}
//           closeModal={closeModal}
//           onAdd={addNewStorageCondition}
//         />
//       )}
//       {isModalsOpen && (
//         <ImportModal
//           initialData={filteredData}
//           isOpen={isModalsOpen}
//           onClose={handleCloseModals}
//           columns={columns}
//           onDataUpload={handleExcelDataUpload}
//         />
//       )}

//       {editModalData && (
//         <EditModal
//           visible={Boolean(editModalData)}
//           closeModal={closeEditModal}
//           data={editModalData}
//           onSave={handleEditSave}
//         />
//       )}
//     </div>
//   );
// };

// export default Store;












import React, { useEffect, useState } from "react";
import "./Admin.css";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../../components/ATM components/SearchBar/SearchBar";
import ATMButton from "../../../components/ATM components/Button/ATMButton";
import Table from "../../../components/ATM components/Table/Table";
import ImportModal from "../../Modals/importModal";
import PDFDownload from "../../PDFComponent/PDFDownload ";
import ReusableModal from "../../Modals/ResusableModal";
import axios from "axios";
import { BASE_URL } from "../../../config.json";
import { toast } from "react-toastify";

const fields = [
  { label: "Employee ID", key: "employeeId" },
  { label: "Analyst Name", key: "storageName" },
  { label: "Role", key: "role" },
  { label: "Email", key: "email" },
  { label: "Added On", key: "addedOn" },
  { label: "Attachment", key: "attachment" },
  { label: "Status", key: "status" },
];

const Store = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const fetchStoreData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/departmentStore`);
      const formattedData = response.data[0]?.departmentStore || [];
      const updatedData = formattedData.map((item, index) => ({
        ...item,
        sno: index + 1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Store data:", error);
      toast.error("Failed to fetch Store data");
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };

  const handleCloseModals = () => {
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

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/departmentStore/${item.uniqueId}`);
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Store employee deleted successfully");
        fetchStoreData();
      }
    } catch (error) {
      console.error("Error deleting Store employee:", error);
      toast.error("Failed to delete Store employee");
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newData = data.map((row) => ({ ...row, checkbox: checked }));
    setData(newData);
  };

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.checkbox}
          onChange={() => handleCheckboxChange(row.index)}
        />
      ),
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Analyst Name", accessor: "storageName" },
    { header: "Role", accessor: "role" },
    { header: "Email", accessor: "email" },
    { header: "Added On", accessor: "addedOn" },
    {
      header: "Attachment",
      accessor: "attachment",
      Cell: ({ row }) => {
        const attachment = row.original.attachment;
        return attachment ? (
          <a href={attachment} target="_blank" rel="noopener noreferrer">
            View Attachment
          </a>
        ) : (
          "No Attachment"
        );
      },
    },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      accessor: "action",
      Cell: ({ row }) => (
        <div className="flex space-x-2">
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
          <FontAwesomeIcon
            icon={faTrashCan}
            className="cursor-pointer"
            onClick={() => handleDelete(row.original)}
          />
        </div>
      ),
    },
  ];

  const filteredData = Array.isArray(data)
    ? data.filter((row) => {
        const storageName = row.storageName || "";
        return (
          storageName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (statusFilter === "All" || row.status === statusFilter)
        );
      })
    : [];

  const onViewDetails = (rowData) => {
    if (isViewModalOpen && viewModalData?.sno === rowData.sno) {
      setIsViewModalOpen(false);
      setViewModalData(null);
    } else {
      setViewModalData(rowData);
      setIsViewModalOpen(true);
    }
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      employeeId: item["Employee ID"] || "",
      storageName: item["Analyst Name"] || "",
      role: item["Role"] || "",
      email: item["Email"] || "",
      addedOn: item["Added On"] || new Date().toISOString().split("T")[0],
      attachment: item["Attachment"] || "",
      status: item["Status"] || "Active",
    }));

    const concatenatedData = [...updatedData];
    setData(concatenatedData);
    setIsModalsOpen(false);
  };

  const addNewStore = async (newStore) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/departmentStore`, newStore);
      if (response.status === 200) {
        const addedStore = response.data.addLIMS;
        setData((prevData) => [
          ...prevData,
          {
            ...addedStore,
            sno: addedStore.uniqueId,
            checkbox: false,
          },
        ]);
        closeModal();
        fetchStoreData();
        toast.success("Store employee added successfully");
      }
    } catch (error) {
      console.error("Error adding Store employee:", error);
      toast.error("Failed to add Store employee");
    }
  };

  // const handleStatusUpdate = (store, newStatus) => {
  //   const updatedData = data.map((item) =>
  //     item.employeeId === store.employeeId ? { ...item, status: newStatus } : item
  //   );
  //   setData(updatedData);
  // };
  
  
  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      toast.error("Invalid Status update");
      console.log("New status is undefined");
      return;
    }
    if (!viewModalData || !viewModalData.uniqueId) {
      console.log("No valid store data selected for update");
      toast.error("No valid data selected for update");
      return;
    }
    try {
      const response = await axios.put(`${BASE_URL}/manage-lims/update/departmentStore/${viewModalData.uniqueId}`, { status: newStatus });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        
        toast.success("Status updated successfully");
        fetchStoreData();
        closeViewModal(); // Make sure this function is defined to close the view modal
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [employeeId, setEmployeeId] = useState("");
    const [storageName, setStorageName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    const handleAdd = () => {
      const newStore = {
        employeeId,
        storageName,
        role,
        email,
        addedOn: new Date().toISOString().split("T")[0],
        attachment: "",
        status: "Active",
      };
      onAdd(newStore);
    };

    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>New Store Employee</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Employee ID"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Analyst Name"
            placeholder="Analyst Name"
            value={storageName}
            onChange={(e) => setStorageName(e.target.value)}
          />
          <CFormInput
            type="text"
            label="Role"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <CFormInput
            type="email"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

  const handleEditSave = async (updatedData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/departmentStore/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId ? { ...item, ...updatedData } : item
        );
        setData(newData);
        toast.success("Store employee updated successfully");
      }
    } catch (error) {
      console.error("Error updating Store employee:", error);
      toast.error("Failed to update Store employee");
    } finally {
      setEditModalData(null);
    }
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
          <CModalTitle>Edit Store Employee</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Employee ID"
            placeholder="Employee ID"
            value={formData?.employeeId || ""}
            onChange={handleChange}
            name="employeeId"
          />
          <CFormInput
            type="text"
            label="Analyst Name"
            placeholder="Analyst Name"
            value={formData?.storageName || ""}
            onChange={handleChange}
            name="storageName"
          />
          <CFormInput
            type="text"
            label="Role"
            placeholder="Role"
            value={formData?.role || ""}
            onChange={handleChange}
            name="role"
          />
          <CFormInput
            type="email"
            label="Email"
            placeholder="Email"
            value={formData?.email || ""}
            onChange={handleChange}
            name="email"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className="fw-bold">Store/Employee</h4>
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
        <div className="float-right flex gap-4">
          <PDFDownload
            columns={columns}
            data={filteredData}
            fileName="User_Store.pdf"
            title="User Management Store Data"
          />
          <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
          <ATMButton text="Add User" color="blue" onClick={openModal} />
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

      {isModalOpen && (
        <StatusModal
          visible={isModalOpen}
          closeModal={closeModal}
          onAdd={addNewStore}
        />
      )}
      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={fields}
          title="Store Employee Details"
          updateStatus={handleStatusUpdate}
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
      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={handleCloseModals}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}
    </div>
  );
};

export default Store;