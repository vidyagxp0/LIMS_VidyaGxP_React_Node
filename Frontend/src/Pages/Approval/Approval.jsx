import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CForm, CFormInput, CFormSelect } from "@coreui/react";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { BASE_URL } from "../../config.json";
import ToastContainer from "../../components/HotToaster/ToastContainer";

function Approval() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);


  const fetchApprovalData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/approval`);
      const formattedData = response?.data[0]?.approval || [];
      const updatedData = formattedData.map((item,index) => ({
        ...item,
        sno: index+1,
        checkbox: false,
      }));
      setData(updatedData);
    } catch (error) {
      console.error("Error fetching Approval data:", error);
      toast.error("Failed to fetch Approval data");
    }
  };
  useEffect(() => {
    fetchApprovalData();
  }, []);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData((prevData) => prevData.map((row) => ({ ...row, checkbox: checked })));
  };

  const handleCheckboxChange = useCallback((index) => {
    setData((prevData) =>
      prevData.map((item, i) => (i === index ? { ...item, checkbox: !item.checkbox } : item))
    );
  }, []);

  const handleDelete = async (item) => {
    console.log(item);
    
    try {
      const response = await axios.delete(`${BASE_URL}/delete-lims/approval/${item.uniqueId}`);
      if (response?.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("Data deleted successfully");
        fetchApprovalData();
      } else {
        toast.error("Failed to delete Data");
      }
    } catch (error) {
      // console.error("Error deleting Approval data:", error);
      toast.error("Error deleting Data");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    if (!newStatus) {
      console.error("New status is undefined");
      toast.error("Invalid Status update");
      return;
    }
    if (!viewModalData) {
      console.error("No data selected for update");
      toast.error("No data selected for update");
      return;
    }
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);
      
      const response = await axios.put(`${BASE_URL}/manage-lims/update/approval/${viewModalData.uniqueId}`, {
        ...dataToSend,
        status: newStatus,
      });
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId ? { ...item, status: newStatus } : item
          )
        );
        toast.success("Approval status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Approval status");
      }
    } catch (error) {
      console.error("Error updating Approval status:", error);
      toast.error("Error updating Approval status");``
    }
  };

  const addNewApproval = async (newApproval) => {
    try {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const response = await toast.promise(
        Promise.all([
          axios.post(`${BASE_URL}/manage-lims/add/approval`, newApproval),
          delay(1300),
        ]).then(([response]) => response),
        {
          loading: 'Saving...',
          success: <b>Data added successfully.</b>,
          error: <b>Couldn't add Data.</b>,
        }
      );
  
      if (response.status === 200) {
        const addedApproval = response.data;
        setData((prevData) => [
          {
            ...addedApproval,
            checkbox: false,
          },
          ...prevData,
        ]);
  
        fetchApprovalData();
      }
    } catch (error) {
      console.error("Error adding Approval:", error);
      toast.error("Failed to add Data");
    }
  
    setIsModalOpen(false);
  };
  
  
  

  const handleEditSave = async (updatedData) => {
    try {
      const {sno,...dataToSend}=updatedData;
      const response = await axios.put(`${BASE_URL}/manage-lims/update/approval/${updatedData.uniqueId}`, dataToSend);
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) => (item.uniqueId === updatedData.uniqueId ? { ...updatedData, sno: item.sno } : item))
        );
        toast.success("Data updated successfully");
      } else {
        toast.error("Failed to update Data");
      }
    } catch (error) {
      // console.error("Error updating Approval:", error);
      toast.error("Error updating Data");
    }
    setEditModalData(null);
  };


  const handleExcelDataUpload = useCallback(
    (excelData) => {
      const updatedData = excelData.map((item, index) => ({
        checkbox: false,
        sno: data.length + index + 1,
        name: item["Name"] || "",
        email: item["Email"] || "",
        role: item["Role"] || "",
        status: item["Status"] || "",
      }));
      setData((prevData) => [...prevData, ...updatedData]);
      setIsModalsOpen(false);
    },
    [data]
  );

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
    { header: "Sr No.", accessor: "sno" },
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
            onClick={() => onViewDetails(row.original)}
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
        </>
      ),
    },
  ];

  const filteredData = data.filter((row) => {
    const nameMatch = row.name ? row.name.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const emailMatch = row.email ? row.email.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const roleMatch = row.role ? row.role.toLowerCase().includes(searchQuery.toLowerCase()) : false;

    return (nameMatch || emailMatch || roleMatch) && (statusFilter === "All" || row.status === statusFilter);
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const closeViewModal = () => {
    setViewModalData(null);
  };

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };

   const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [approval, setApproval] = useState({
      name: "",
      email: "",
      role: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setApproval((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({
        ...approval,
        status: "Active",
      });
    };
    return (
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Add Approval</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              className="mb-3"
              type="text"
              label="Name"
              name="name"
              value={approval.name}
              onChange={handleInputChange}
              required
            />
            <CFormInput
              className="mb-3"
              type="email"
              label="Email"
              name="email"
              value={approval.email}
              onChange={handleInputChange}
              required
            />
            <CFormSelect
              className="mb-3"
              type="text"
              label="Role"
              name="role"
              value={approval.role}
              onChange={handleInputChange}
              required
              options={[
                "Select..",
                {label: "Admin", value: "Admin"},
                { label: "User", value: "User" },
                {label: "Manager", value: "Manager"}
              ]}

            />
            <CModalFooter>
              <CButton color="secondary" onClick={closeModal}>
                Cancel
              </CButton>
              <CButton color="primary" type="submit">
                Add Approval
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    );
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
          <CModalTitle>Edit Approval</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              className="mb-3"
              type="text"
              label="Name"
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
            />
            <CFormInput
              className="mb-3"
              type="email"
              label="Email"
              name="email"
              value={formData?.email || ""}
              onChange={handleChange}
            />
            <CFormSelect
              className="mb-3"
              type="text"
              label="Role"
              name="role"
              value={formData?.role || ""}
              onChange={handleChange}
              options={[
                {label: "Admin", value: "Admin"},
                { label: "User", value: "User" },
                {label: "Manager", value: "Manager"}
              ]}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Save Changes
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
      <div className="m-5 mt-3">
        <div><ToastContainer/></div>
        <div className="main-head">
          <h4 className="fw-bold">Approval</h4>
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
            <PDFDownload columns={columns} data={filteredData} fileName="Approval.pdf" title="Approval Data" />
            <ATMButton text="Import" color="pink" onClick={() => setIsModalsOpen(true)} />
            <ATMButton text="Add Approval" color="blue" onClick={() => setIsModalOpen(true)} />
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
      </div>

      {viewModalData && (
        <ReusableModal
          visible={viewModalData !== null}
          closeModal={closeViewModal}
          data={viewModalData}
          fields={columns
            .map((col) => ({ key: col.accessor, label: col.header }))
            .filter((field) => field.key !== "action" && field.key !== "checkbox")}
          title="Approval Details"
         updateStatus={handleStatusUpdate}
        />
      )}

      {isModalOpen && <StatusModal visible={isModalOpen} closeModal={() => setIsModalOpen(false)} onAdd={addNewApproval} />}

      {isModalsOpen && (
        <ImportModal
          initialData={filteredData}
          isOpen={isModalsOpen}
          onClose={() => setIsModalsOpen(false)}
          columns={columns}
          onDataUpload={handleExcelDataUpload}
        />
      )}

      {editModalData && (
        <EditModal visible={Boolean(editModalData)} closeModal={closeEditModal} data={editModalData} onSave={handleEditSave} />
      )}
    </>
  );
}

export default Approval;