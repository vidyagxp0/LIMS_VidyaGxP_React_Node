import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/ATM components/Table/Table";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    name: "Test Name 1",
    standardProtocolId: "T001",
    standardProtocolDescription: "Type A",
    status: "Active",
  },
  {
    checkbox: false,
    sno: 2,
    name: "Test Name 2",
    standardProtocolId: "T002",
    standardProtocolDescription: "Type B",
    status: "Inactive",
  },
];

function StandardProtocol() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/get-all-lims/sMStandardProtocol`
      );
      const fetchedData = response?.data[0]?.sMStandardProtocol || [];

      const updatedData = fetchedData.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));

      setData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

  const onViewDetails = (rowData) => {
    setViewModalData(rowData);
  };

  const handleCheckboxChange = (index) => {
    const newData = [...data];
    newData[index].checkbox = !newData[index].checkbox;
    setData(newData);
  };
  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Standard Protocol Name", accessor: "name" },
    { header: "Standard Protocol Id", accessor: "standardProtocolId" },
    {
      header: "Standard Protocol Description",
      accessor: "standardProtocolDescription",
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
            onClick={() => {
              onViewDetails(row), navigate("/testResultsDetails");
            }}
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

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: initialData.length + index + 1,
      name: item["Standard Protocol Name"] || "",
      standardProtocolId: item["Standard Protocol Id"] || "",
      standardProtocolDescription: item["Standard Protocol Description"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const addNewStandardProtocol = (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    setData((prevData)=>[
      ...prevData,
      {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }
  const handleDelete = async (item) => {
    console.log(item);

    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/sMStandardProtocol/${item.uniqueId}`
      );
      if (response.status === 200) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Data deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete investigation:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting investigation:", error);
    }
  };


  const handleAdd = async (newProduct) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/manage-lims/add/sMStandardProtocol`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        fetchData();
        setIsModalOpen(false);
      } else {
        toast.error("Failed to adsd Product.");
      }
    } catch (error) {
      toast.error(
        "Error adding product: " + (error.response?.data || error.message)
      );
    }
  };

  const StatusModal = ({visible , closeModal,onAdd}) => {
    const [standardProtocolName , setStandardProtocolName] = useState('')
    const [standardProtocolId, setStandardProtocolId] = useState('')
    const [description, setDescription] = useState('')

    

    const handleAdd = ()=>{
      const newCondition ={
        name: standardProtocolName,
        standardProtocolId: standardProtocolId,
        standardProtocolDescription: description,
        action:[],
      }
      onAdd(newCondition)
    }
    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>Standard Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Protocol Name"
            value={standardProtocolName}
            onChange={(e)=>setStandardProtocolName(e.target.value)}
            placeholder=""
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Protocol Id"
            placeholder=""
            value={standardProtocolId}
            onChange={(e)=>setStandardProtocolId(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder=""
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton className="bg-info text-white" onClick={handleAdd}>Add</CButton>
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
    const { sno, checkbox, ...dataTosend } = updatedData;
    try {
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/sMStandardProtocol/${updatedData.uniqueId}`,
        dataTosend
      );
      if (response.status === 200) {
        const newData = data.map((item) =>
          item.uniqueId === updatedData.uniqueId
            ? { ...item, ...response.data }
            : item
        );
        setData(newData);
        closeEditModal();
        toast.success("Data updated successfully");
        fetchData();
      } else {
        console.error("Failed to update investigation:", response.statusText);
        toast.error("Failed to update investigation");
      }
    } catch (error) {
      console.error("Error updating investigation:", error);
      toast.error("Error updating investigation");
    }
  };
  // const handleStatusUpdate = (samplingConfiguration, newStatus) => {
  //   const updatedData = data.map((item) =>
  //     item.samplingID === samplingConfiguration.samplingID
  //       ? { ...item, status: newStatus }
  //       : item
  //   );
  //   setData(updatedData);
  // };

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [formData , setFormData] = useState(data)
    useEffect(() => {
      setFormData(data)
    } , [data])
    const handleChange = (e)=>{
      const {name , value} = e.target;
      setFormData({...formData , [name]:value})
    }
const handleSave = ()=>{
  onSave(formData)
}
    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>Standard Protocol</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Protocol Name"
            name="name"
            placeholder=""
            value={formData?.name || ""}
            onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Standard Protocol Id"
            placeholder=""
           name="standardProtocolId"
           value={formData?.standardProtocolId || ""}
           onChange={handleChange}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Description"
            placeholder=""
            name="standardProtocolDescription"
            value={formData?.standardProtocolDescription || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Cancel
          </CButton>
          <CButton className="bg-info text-white" onClick={handleSave}>Update</CButton>
        </CModalFooter>
      </CModal>
    );
  };
  

  return (
    <>
    <LaunchQMS />
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Standard Protocol</h4>
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
          <PDFDownload columns={columns} data={filteredData} fileName="Standard_Protocol.pdf" title="Standard Protocol Data" />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Standard Protocol"
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
      </div>

      {isModalOpen && (
        <StatusModal
         onAdd={handleAdd}
          visible={isModalOpen}
           closeModal={closeModal} 
         
           />
          )}
           {viewModalData && (
            <ReusableModal
              visible={viewModalData !== null}
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
}


export default StandardProtocol;
