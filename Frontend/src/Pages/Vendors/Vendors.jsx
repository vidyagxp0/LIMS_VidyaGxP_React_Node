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
import VendorModal from "../Modals/VendorModal.jsx";
import ReusableModal from "../Modals/ResusableModal";
// import ViewModal from "../Modals/ViewModal";
import ImportModal from "../Modals/importModal.jsx";
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
import PDFDownload from "../PDFComponent/PDFDownload .jsx";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config.json";

const Vendors = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);

  // *********************Edit ****************************
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

  const fields = [
    { label: "S.No", key: "sno" },
    { label: "Product Name", key: "productName" },
    { label: "Unique Code", key: "UniqueCode" },
    { label: "Vendor Name", key: "vendorName" },
    { label: "Qualification Criteria", key: "QualificationCriteria" },
    { label: "Comments", key: "Comments" },
    { label: "Status", key: "status" },
  ];

  useEffect(() => {
    fetchVendorData();
  }, []);
  const fetchVendorData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-lims/vendor`);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.flatMap(
          (item) =>
            item?.vendor?.map((condition, i) => ({
              checkbox: false,
              uniqueId: condition.uniqueId,
              sno: i + 1,
              productName: condition.productName,
              UniqueCode: condition.UniqueCode,
              vendorName: condition.vendorName,
              QualificationCriteria: condition.QualificationCriteria,
              Comments: condition.Comments,
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
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update/vendor/${updatedData.uniqueId}`,
        updatedData
      );
      if (response.status === 200) {
        setData((prevData) =>
          prevData.map((item) =>
            item.sno === updatedData.sno ? updatedData : item
          )
        );
        toast.success("vendor updated successfully.");
        setEditModalData(null);
        closeEditModal();
        // setIsModalOpen(false);
      } else {
        toast.error("Failed to update vendor.");
      }
    } catch (error) {
      toast.error(
        "Error updating vendor: " + (error.response?.data || error.message)
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
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Edit Approved Vendor</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="mb-3 fw-bold">
            Edit information and update approved vendor
          </p>
          <label>Product/Material Name</label>
          <CFormSelect
            className="mb-3"
            name="productName"
            options={[
              { value: "Tadalafil", label: "Tadalafil" },
              { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
              {
                value: "Diclofenac Sodium (BromineFree)",
                label: "Diclofenac Sodium (BromineFree)",
              },
            ]}
            value={formData?.productName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Unique Code"
            name="UniqueCode"
            placeholder="Unique Code"
            value={formData?.UniqueCode || ""}
            onChange={handleChange}
          />
          <label>Vendor Name</label>
          <CFormSelect
            className="mb-3"
            name="vendorName"
            options={[
              {
                value: "Aavis Pharmaceuticals",
                label: "Aavis Pharmaceuticals",
              },
              { value: "Diclofenac Resinate", label: "Diclofenac Resinate" },
              {
                value: "Diclofenac Sodium (BromineFree)",
                label: "Diclofenac Sodium (BromineFree)",
              },
            ]}
            value={formData?.vendorName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Qualification Criteria"
            name="QualificationCriteria"
            placeholder="Qualification Criteria"
            value={formData?.QualificationCriteria || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            name="Comments"
            label="Comments If Any"
            placeholder="Comments If Any"
            value={formData?.Comments || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
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
      if (item.status === "INITIATED") counts.INITIATED++;
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
      // row.UniqueCode.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Product Name", accessor: "productName" },
    { header: "Unique Code", accessor: "UniqueCode" },
    { header: "Vendor Name", accessor: "vendorName" },
    { header: "Qualification Criteria", accessor: "QualificationCriteria" },
    { header: "Comments", accessor: "Comments" },
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
            onClick={() => openEditModal(row)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            key="delete"
            className="cursor-pointer"
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ];

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno: index + 1,
      productName: item["Product Name"] || "",
      UniqueCode: item["Unique Code"] || "",
      vendorName: item["Vendor Name"] || "",
      QualificationCriteria: item["Qualification Criteria"] || "",
      Comments: item["Comments"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData);
    setIsModalsOpen(false);
  };

  //********************************Fetch data from Modal and added to the new row**************************************************************** */
  const handleModalSubmit = async (newVendor) => {
    try {
      const response = await axios.post(`${BASE_URL}/manage-lims/add/vendor`, {
        ...newVendor,
        status: newVendor.status || "INITIATED",
      });
      if (response.status === 200) {
        toast.success("Vendor added successfully.");
        setIsModalOpen(false);
        fetchVendorData();
      } else {
        toast.error("Failed to add Vendor.");
      }
    } catch (error) {
      toast.error(
        "Error adding Vendor: " + (error.response?.data || error.message)
      );
    }
  };

   const handleDelete = async (item) => {
     try {
       const response = await axios.delete(
         `${BASE_URL}/delete-lims/vendor/${item.uniqueId}`
       );
       if (response.status === 200) {
         setData((prevData) =>
           prevData.filter((d) => d.uniqueId !== item.uniqueId)
         );
         toast.success("vendor deleted successfully.");
         fetchVendorData();
       } else {
         toast.error("Failed to delete vendor.");
       }
     } catch (error) {
       toast.error(
         "Error deleting vendor: " + (error.response?.data || error.message)
       );
     }
   };
  //************************************************************************************************ */

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
         `${BASE_URL}/manage-lims/update/vendor/${viewModalData.uniqueId}`,
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
         toast.success("Vendor status updated successfully");
         closeViewModal();
       } else {
         toast.error("Failed to update Vendor status");
       }
     } catch (error) {
       console.error("Error updating Vendor status:", error);
       toast.error("Error updating Vendor status");
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

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Approved Vendors</h1>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "REJECTED", label: "REJECTED" },
                { value: "DROPPED", label: "DROPPED" },
                { value: "APPROVED", label: "APPROVED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Vendors.pdf"
              title="Vendors Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Approved Vendors"
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
        <VendorModal
          visible={isModalOpen}
          closeModal={closeModal}
          handleSubmit={handleModalSubmit}
        />
        {isViewModalOpen && (
          <ReusableModal
            visible={isViewModalOpen}
            fields={fields}
            closeModal={closeViewModal}
            data={viewModalData}
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
export default Vendors;
