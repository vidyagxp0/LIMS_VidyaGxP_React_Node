import React, { useState, useEffect } from "react";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import Table from "../../components/ATM components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import ClientsModal from "../Modals/ClientsModal.jsx";
import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config.json";
import ReusableModal from "../Modals/ResusableModal";


const fields = [
  { label: "S.No", key: "sno" },
  { label: "Client Name", key: "ClientName" },
  { label: "Email Address", key: "EmailAddress" },
  { label: "Contact Number", key: "phone" },
  { label: "Address", key: "Address" },
  { label: "Added On", key: "AddedOn" },
  { label: "Status", key: "status" },
];

const Clients = () => {
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

   useEffect(() => {
     fetchClientData();
   }, []);
  const fetchClientData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/client`);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.client?.map((condition,i) => ({
              checkbox: false,
              uniqueId: condition.uniqueId,
              sno: i+1,
              ClientName: condition.ClientName,
              EmailAddress: condition.EmailAddress,
              phone: condition.phone,
              Address: condition.Address,
              AddedOn: condition.AddedOn,
              status: condition.status,
            })) || []
        );
        setData(formattedData);
      }
    } catch (error) {
      toast.error(
        "Error fetching data: " + (error.response?.data || error.message)
      );
    }
  };
 

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditModalData(null);
  };
  
  const handleEditSave = async (updatedData) => {
    try {
      // const {sno,...datatosend}=updatedData;
      console.log(updatedData,"unnnn");
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/client/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("Client updated successfully.");
        setEditModalData(null);
        closeModal();
      } else {
        toast.error("Failed to update Client.");
      }
    } catch (error) {
      toast.error(
        "Error updating Client: " + (error.response?.data || error.message)
      );
    }
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
      closeModal();
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Update Client</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">Update information</p>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client Name"
            name="ClientName"
            placeholder="Client Name"
            value={formData?.ClientName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Alternate Name"
            name="alternateName"
            placeholder="Alternate Name"
            value={formData?.alternateName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="email"
            className="mb-3"
            label="Email"
            name="EmailAddress"
            placeholder="EmailAddress"
            value={formData?.EmailAddress || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            name="phone"
            label="phone"
            placeholder="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Address"
            name="Address"
            placeholder="Address"
            value={formData?.Address || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="contactPerson"
            label="Contact Person"
            placeholder="Contact Person"
            value={formData?.contactPerson || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            name="contactPersonNumber"
            label="Contact Person Number"
            placeholder="Contact Person Number"
            value={formData?.contactPersonNumber || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Tax Number"
            name="taxNumber"
            placeholder="Tax Number"
            value={formData?.taxNumber || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="number"
            className="mb-3"
            label="Fax"
            name="fax"
            placeholder="fax"
            value={formData?.fax || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Website"
            placeholder="Website"
            name="website"
            value={formData?.website || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Name"
            name="name"
            placeholder="name"
            value={formData?.name || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="plantCode"
            label="Plant Code"
            placeholder="Plant Code"
            value={formData?.plantCode || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleSave}>
            Update
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
      APPROVED: 0,
      INITIATED: 0,
      REINITIATED: 0,
      REJECTED: 0,
      DROPPED: 0,
    };

    data.forEach((item) => {
      if (item.status === "Active") counts.Active++;
      else if (item.status === "Inactive") counts.Inactive++;
    });
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
      // row.ClientName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      statusFilter === "All" || row.status === statusFilter
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
    { header: "Client Name", accessor: "ClientName" },
    { header: "Email Address", accessor: "EmailAddress" },
    { header: "Contact Number", accessor: "phone" },
    { header: "Address", accessor: "Address" },
    { header: "Added On", accessor: "AddedOn" },
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
      ClientName: item["Client Name"] || "",
      EmailAddress: item["Email Address"] || "",
      phone: item["Contact Number"] || "",
      Address: item["Address"] || "",
      AddedOn: item["Added On"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = async (newProduct) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/client`, {
        ...newProduct,
        AddedOn: new Date().toISOString().split("T")[0],
        status: newProduct.status || "Active",
      });
      if (response.status === 200) {
        toast.success("Client added successfully.");
        setIsModalOpen(false);
        fetchClientData();
      } else {
        toast.error("Failed to add Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
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

      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/client/${viewModalData.uniqueId}`,
        {
          ...dataToSend,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === viewModalData.uniqueId
              ? { ...item, status: newStatus }
              : item
          )
        );
        toast.success("Client status updated successfully");
        closeViewModal();
      } else {
        toast.error("Failed to update Client status");
      }
    } catch (error) {
      console.error("Error updating Client status:", error);
      toast.error("Error updating Client status");
    }
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
      const response = await axios.delete(
        `${BASE_URL}/delete-lims/client/${item.uniqueId}`
      );
      if (response.status === 200) {
        setData((prevData) => prevData.filter((d) => d.uniqueId !== item.uniqueId));
        toast.success("Client deleted successfully.");
        fetchClientData();
      } else {
        toast.error("Failed to delete Client.");
      }
    } catch (error) {
      toast.error(
        "Error deleting Client: " + (error.response?.data || error.message)
      );
    }
  };

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Clients</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
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
              fileName="Clients.pdf"
              title="Clients Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Clients" color="blue" onClick={openModal} />
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
        <ClientsModal
          visible={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleModalSubmit}
        />
        {isViewModalOpen && (
          <ReusableModal
            visible={isViewModalOpen}
            closeModal={closeViewModal}
            data={viewModalData}
            fields={fields}
            onClose={handleCloseModals}
            title="Test Plan Details"
            updateStatus={handleStatusUpdate}
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
export default Clients;
