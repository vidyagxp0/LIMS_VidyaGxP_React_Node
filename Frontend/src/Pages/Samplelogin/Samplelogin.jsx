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
import React, { useEffect, useState } from "react";
import "./Samplelogin.css";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "USR001",
    productMaterial: "Product 1",
    ARNo: "-01",
    genericName: "Generic 1",
    specificationCode: "Spec 001",
    attachment: "attachment",
    status: "INITIATED",
  
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "USR002",
    productMaterial: "Product 2",
    ARNo: "-02",
    genericName: "Generic 2",
    specificationCode: "Spec 002",
    attachment: "attachment",
    status: "APPROVED",
  
  },
 
];

export default function Samplelogin() {
  const [data, setData] = useState(initialData);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewModalData, setViewModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("Inactive");
  const [editModalData, setEditModalData] = useState(null)
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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
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

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
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

  const columns = [
    {
      header: <input type="checkbox" onChange={handleSelectAll} />,
      accessor: "checkbox",
    },
    { header: "SrNo.", accessor: "sno" },
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Product / Material", accessor: "productMaterial" },
    { header: "A.R. No.", accessor: "ARNo" },
    { header: "Generic Name", accessor: "genericName" },
    { header: "Specification Code", accessor: "specificationCode" },
    { header: "attachment", accessor: "attachment" },
    { header: "Status", accessor: "status" },
    {
      header: 'Actions',
      accessor: 'action',
      Cell: ({ row }) => (
        <>
          <FontAwesomeIcon icon={faEye} className="mr-2 cursor-pointer" onClick={() => onViewDetails(row.original)} />
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2 cursor-pointer"  onClick={() => openEditModal(row.original)} />
          <FontAwesomeIcon icon={faTrashCan} className="cursor-pointer" onClick={() => setDeleteId(row.original.sno)} />
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

  const handleDelete = (item) => {
    const newData = data.filter((d) => d !== item);
    setData(newData);
    console.log('Deleted item:', item);
  };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,
      sno:  index + 1,
      sampleType: item["Sample Type"] || "",
      storageCondition: item["Storage Condition"] || "",
      ARNo: item["Created At"] || "",
      genericName: item["Generic Name"] || "",
      specificationCode: item["Specification Code"] || "",
      attachment: item["Attachment"] || "", // Ensure field name matches your Excel data
      status: item["Status"] || "",
    }));

    // Concatenate the updated data with existing data
    const concatenatedData = [ ...updatedData];
    setData(concatenatedData);
setIsModalsOpen(false);; // Update data state with parsed Excel data

  };

  const StatusModal2 = (_props) => {
    return (
      <CModal
        alignment="center"
        visible={_props.visible}
        onClose={_props.closeModal2}
      >
        <CModalHeader>
          <CModalTitle>Update Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client"
            placeholder="Select..."
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Plan / Revision No."
            placeholder="Select..."
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material Code"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Specification ID"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Copy Sample from"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Certificates (If any)"
            placeholder=""
          />

          <div className="bg-white rounded border-dark-subtle border-2 ">
            <CTable align="middle" responsive className="   ">
              <thead>
                <tr>
                  <th className="bg-info text-light">Sno.</th>
                  <th className="bg-info text-light">Test Name</th>
                  <th className="bg-info text-light">Group Name</th>
                  <th className="bg-info text-light">Selection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Viscosity @40C</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Total Acid Number (TAN)</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Water Content PPM</td>
                  <td></td>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </CTable>
          </div>

          <div className="d-flex gap-3 mt-4">
            <CButton color="light w-50" onClick={_props.closeModal2}>
              &lt; Back
            </CButton>
            <CButton color="primary w-50">Update Sample</CButton>
          </div>
        </CModalBody>
      </CModal>
    );
  };

  
  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "Active" ? "Inactive" : "Active";
    setData((prevData)=>[
      ...prevData,
      {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }

  const StatusModal = ({visible , closeModal,onAdd}) => {
    const [client , setClient] = useState("");
const [testPlan, setTestPlan] = useState("");
const [productMaterial, setProductMaterial] = useState("");
const [productMaterialCode , setProductMaterialCode] = useState("");
const [genericName, setGenericName]=useState("")
  const [copySampleFrom, setCopySampleFrom] = useState("");
  const [sampleType, setSampleType]=useState("")
  const [certificates, setCertificates] = useState("")

    
    const handleAdd = ()=>{
      const newCondition = {
        sampleType:"USR00",
        productMaterial:"Product",
        genericName:"generic",
        ARNo:" 00",
        specificationCode:"000",
        addedOn: new Date().toISOString().split('T')[0],
        attachment:"attachment",
        action:[],
      }
      onAdd(newCondition)
    }
    return (
      <CModal 
        className="w-5"
        alignment="center"
        visible={visible}
        onClose={closeModal}
      >
        <CModalHeader>
          <CModalTitle>New Sample login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Client"
            placeholder="Select..."
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Test Plan / Revision No."
            placeholder="Select..."
            value={testPlan}
            onChange={(e) => setTestPlan(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material"
            placeholder=""
            value={productMaterial}
            onChange={(e) => setProductMaterial(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material Code"
            placeholder=""
            value={productMaterialCode}
            onChange={(e) => setProductMaterialCode(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            placeholder=""
            value={genericName}
            onChange={(e) => setGenericName(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Specification ID"
            placeholder=""
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Copy Sample from"
            placeholder=""
            value={copySampleFrom}
            onChange={(e) => setCopySampleFrom(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            placeholder=""
            value={sampleType}
            onChange={(e) => setSampleType(e.target.value)}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Certificates (If any)"
            placeholder=""
            value={certificates}
            onChange={(e) => setCertificates(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>Add Sample</CButton>
        </CModalFooter>
      </CModal>
    );
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
      <CModal alignment="center" visible={visible} onClose={closeModal}>
        <CModalHeader>
          <CModalTitle>Edit Sample Login</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            className="mb-3"
            label="Sample Type"
            name="sampleType"
            value={formData?.sampleType || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Product / Material"
            name="productMaterial"
            value={formData?.productMaterial || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Generic Name"
            name="genericName"
            value={formData?.genericName || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="A.R. No."
            name="ARNo"
            value={formData?.ARNo || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Specification Code"
            name="specificationCode"
            value={formData?.specificationCode || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Attachment"
            name="attachment"
            value={formData?.attachment || ""}
            onChange={handleChange}
          />
          <CFormInput
            type="text"
            className="mb-3"
            label="Status"
            name="status"
            value={formData?.status || ""}
            onChange={handleChange}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={closeModal}>
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
    <>
      <div className="m-5 mt-3">
        <div className="main-head">
          <h4 className="fw-bold">Sample Login</h4>
        </div>


        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Dropdown
              options={[
                { value: "All", label: "All" },
                { value: "INITIATED", label: "INITIATED" },
                { value: "REINITIATED", label: "REINITIATED" },
                { value: "REJECTED", label: "REJECTED" },
                { value: "APPROVED", label: "APPROVED" },
                { value: "DROPPED", label: "DROPPED" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="float-right flex gap-4">
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add Sample Log In" color="blue" onClick={openModal} />
          </div>
        </div>
        <Table columns={columns} openEditModal={openEditModal} data={filteredData} onDelete={handleDelete} onCheckboxChange={handleCheckboxChange} onViewDetails={onViewDetails} />
      </div>
      {isModalOpen && (
        <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition}/>
      )}
      {isModalOpen2 && (
        <StatusModal2
          visible={isModalOpen2}
          closeModal2={closeModal2}
        />
      )}
      {isModalsOpen && (
        <ImportModal initialData = {initialData} isOpen={isModalsOpen} onClose={handleCloseModals} columns={columns} onDataUpload={handleExcelDataUpload} />
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


