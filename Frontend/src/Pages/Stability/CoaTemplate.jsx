import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
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
  CHeader,
  CFooter,
} from "@coreui/react";
import Card from "../../components/ATM components/Card/Card";
import SearchBar from "../../components/ATM components/SearchBar/SearchBar";
import Dropdown from "../../components/ATM components/Dropdown/Dropdown";
import ATMButton from "../../components/ATM components/Button/ATMButton";
import Table from "../../components/ATM components/Table/Table";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import CoaModal from "../Modals/CoaModal";
import ReusableModal from "../Modals/ResusableModal";



function CoaTemplate() {
  const [data, setData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusModal, setStatusModal] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState("");
  const [formData,setFormData] = useState([])
  const [cardCounts, setCardCounts] = useState({
    DROPPED: 0,
    INITIATED: 0,
    REINITIATED: 0,
    APPROVED: 0,
    REJECTED: 0,
  });
  const [lastStatus, setLastStatus] = useState("");
  const [editModalData, setEditModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [coaModal , setCoaModal] = useState(false);

  const fields = [
    { label: "S.No", key: "sno" },
    { label: "Product Name", key: "productName" },
    { label: "Unique Code", key: "uniqueCode" },
    {label:"Chamber ID,",key:"chamberId"},
    {label:"Actual Quantity",key:"actualQuantity"},
    {label:"Protocol Type",key:"protocolType"},
    { label: "Generic Name", key: "genericName" },
    { label: "Re-Testing Period ", key: "reTestingPeriod" },
    { label: "Status", key: "status" },
  ];


  const handleOpenModals = () => {
    setIsModalsOpen(true);
  };
  
  const handleCoaOpenModals = () => {
    setCoaModal(true);
  };

  const handleCoaCloseModals = () => {
    setCoaModal(false);
  };

  const handleCloseModals = () => {
    setIsModalsOpen(false);
  };

  const addCoaChamber = async (newChamber) => {
    try {
      const response = await axios.post(`http://localhost:9000/manage-lims/add/sMCOATemplate`, {
       ...newChamber,
       addDate: new Date().toISOString().split("T")[0],
       status: newChamber.status || "Active",
      }); 
  
      if (response.status === 200 || response.status === 201) {
        setData((prevData) => [...prevData, newChamber]); // Use newChamber instead of addNewCoaTemplate
      } else {
        console.error("Failed to add condition:", response.status);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error adding condition:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
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

  const onSave = (newRow) => {
    const updatedData = [...data, { ...newRow, sno: data.length + 1 }];
    setData(updatedData);
  };
  

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
            onClick={() => openEditModal(row.original.id)}
          />
          <FontAwesomeIcon 
          icon={faTrashCan}
           className="cursor-pointer"
           onClick={() => handleDelete(row.original.id)}
            />
        </>
      ),
    },
  ];


  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };

  // const handleDelete = (item) => {
  //   const newData = data.filter((d) => d !== item);
  //   setData(newData);
  //   console.log("Deleted item:", item);
  // };

  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: initialData.length + index + 1,
      productName: item["Product Name"] || "",
      chamberID: item["Chamber ID"] || "",
      actualQuantity: item["Actual Quantity"] || "",
      availableQuantity: item["Available Quantity"] || "",
      protocolType: item["Protocol Type"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); 
    setIsModalsOpen(false);
  };

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/sMCOATemplate/${item.uniqueId}`
      );
      console.log(response); 
      if (response.status === 200 || response.status === 201 ) {
        const newData = data.filter((d) => d.uniqueId !== item.uniqueId);
        setData(newData);
        toast.success("Deleted successfully"); 
      }
    } catch (error) {
      console.error("Error deleting storage condition:", error);
    }
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

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/get-all-lims/sMCOATemplate`
      );
      const fetchedData = response?.data[0]?.sMCOATemplate || [];
      
      
      const updatedData = fetchedData?.map((item, index) => ({
        sno: index + 1,
        ...item,
      }));
      setData(updatedData);  // Set fetched data in state to display in table
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData(); 
  }, []);

  const handleEditSave = async (updatedData) => {
    const { sno, checkbox, ...dataTosend } = updatedData;
    try {
      const response = await axios.put(
        `http://localhost:9000/manage-lims/update/sMCOATemplate/${updatedData.uniqueId}`,
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
  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);
      
      const response = await axios.put(`http://localhost:9000/manage-lims/update/sMCOATemplate/${viewModalData.uniqueId}`, {
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


  const StatusModal = ({ visible, closeModal, onAdd,onSave }) => {
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(1);
    const [footerColumns, setFooterColumns] = useState(1);
    const [sampleType, setSampleType] = useState("");
    const [protocolType, setProtocolType] = useState("")
    const [coaType, setCoaType] = useState("");
    const [chamberID, setChamberID] = useState("");
    const [reportTitle, setReportTitle] = useState("");
    const [productMaterialCaption, setProductMaterialCaption] = useState("");
    const [actualQuantity, setActualQuantity] = useState("")
    const [formatNo, setFormatNo] = useState("");
    const handleSave = () => {
      const newCondition = {
        productName: productMaterialCaption,
        chamberID: "",  // Use appropriate values
        actualQuantity: "",
        availableQuantity: "",
        protocolType: coaType,
        status: "active",

      };
      onSave(newCondition);
      setIsModalOpen(false); 
    }

    const handleHeaderRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setHeaderRows(value);
    };

    const handleHeaderColumnsChange = (e) => {
      setHeaderColumns(parseInt(e.target.value, 10));
    };

    const handleFooterRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setFooterRows(value);
    };

    const handleFooterColumnsChange = (e) => {
      setFooterColumns(parseInt(e.target.value, 10));
    };
    // const handleSave = () => {
    //   onSave(formData);
    //   setIsModalOpen(false)
    // };

    const renderTable = (rows, columns) => {
      if (rows <= 0) return <tr><td colSpan={columns}>No data available</td></tr>;
    
      const tableRows = [];
      for (let i = 0; i < rows; i++) {
        const tableColumns = [];
        for (let j = 0; j < columns; j++) {
          tableColumns.push(
            <td key={j}>
              <CFormInput type="text" placeholder={`Lower Count `} />
              <CFormSelect
                className="mb-2"
                options={[{ label: "Select Field", value: "1" }]}
              />
            </td>
          );
        }
        tableRows.push(<tr key={i}>{tableColumns}</tr>);
      }
      return tableRows;
    };
    


    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Coa Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Protocol Type"
            placeholder="Select..."
            options={[
              "Select...",
              { label: "HCL" },
              { label: "Hydrochrolic Acid" },
              { label: "Petrochemical" },
              { label: "Initial Product" },
            ]}
            value={protocolType}
            onChange={(e) => setProtocolType(e.target.value)}
          />
          <CFormSelect
            type="select"
            label="Coa Type"
            placeholder="Select Coa Type"
            options={[
              "Select Coa Type",
              { label: "With Specification" },
              { label: "Without Specification" },
              { label: "ERP" },
            ]}
            value={coaType}
            onChange={(e) => setCoaType(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Chamber ID"
            placeholder="Chamber ID"
            value={chamberID}
            onChange={(e) => setChamberID(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder="Product"
            value={productMaterialCaption}
            onChange={(e) =>  setProductMaterialCaption(e.target.value)}
          />
          <CFormInput
            className="mb-3"
              type="text"
            label="Actual Quantity"
            placeholder="Actual Quantity"
            value={actualQuantity}
            onChange={(e) => setActualQuantity(e.target.value)}
          />
          <CHeader className="bg-secondary text-light mb-3 p-2">Header</CHeader>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={headerRows}
                onChange={handleHeaderRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={headerColumns}
                onChange={handleHeaderColumnsChange}
              />
            </div>
          </div>

          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>
          <CFooter className="bg-secondary text-light mb-3 p-2">Footer</CFooter>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={footerRows}
                onChange={handleFooterRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={footerColumns}
                onChange={handleFooterColumnsChange}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(footerRows, footerColumns)}</tbody>
          </table>
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

  const openEditModal = (rowData) => {
    setEditModalData(rowData);
  };

  const closeEditModal = () => {
    setEditModalData(null);
  };
 

  const EditModal = ({ visible, closeModal, data, onSave }) => {
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(1);
    const [footerColumns, setFooterColumns] = useState(1);
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

    const handleHeaderRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setHeaderRows(value);
    };

    const handleHeaderColumnsChange = (e) => {
      setHeaderColumns(parseInt(e.target.value, 10));
    };

    const handleFooterRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setFooterRows(value);
    };

    const handleFooterColumnsChange = (e) => {
      setFooterColumns(parseInt(e.target.value, 10));
    };

    const renderTable = (rows, columns) => {
      if (rows <= 0 || columns <= 0) {
        return <tr><td colSpan={columns}>No data available</td></tr>;
      }
    
      const tableRows = [];
      for (let i = 0; i < rows; i++) {
        const tableColumns = [];
        for (let j = 0; j < columns; j++) {
          tableColumns.push(
            <td key={j}>
              <CFormInput type="text" placeholder={`Lower Count `} />
              <CFormSelect
                className="mb-2"
                options={[{ label: "Select Field", value: "1" }]}
              />
            </td>
          );
        }
        tableRows.push(<tr key={i}>{tableColumns}</tr>);
      }
      return tableRows;
    };
    
   

    const handleAdd = () => {
      const newCondition = {
        productName: formData?.productName || '', 
        chamberID: formData?.chamberID || '', 
        actualQuantity: formData?.actualQuantity || '',
        availableQuantity: formData?.availableQuantity || '',
        protocolType: formData?.protocolType || '',
        action: [],
      };
     
      console.log(newCondition,"==================")
      setData((prevData) => [...prevData, newCondition]);
    
      // Modal close karne ke baad form reset karo
      setFormData(null);
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
          <CModalTitle>Update Coa Template</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormSelect
            className="mb-3"
            type="select"
            label="Sample Type"
            placeholder="Select..."
            options={[
              "Select...",
              { label: "HCL" },
              { label: "Hydrochrolic Acid" },
              { label: "Petrochemical" },
              { label: "Initial Product" },
            ]}
            value={formData?.productName || ""}
            onChange={handleChange}
            name="productName"
          />
          <CFormSelect
            type="select"
            label="Coa Type"
            placeholder="Select Coa Type"
            options={[
              "Select Coa Type",
              { label: "With Specification" },
              { label: "Without Specification" },
              { label: "ERP" },
            ]}
            value={formData?.protocolType || ""}
            onChange={handleChange}
            name="protocolType"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Title"
            placeholder="Report Title"
            value={formData?.reportTitle || ""}
            onChange={handleChange}
            name="reportTitle"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder="Product"
            value={formData?.productMaterialCaption || ""}
            onChange={handleChange}
            name="productMaterialCaption"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Format No."
            placeholder="Format No."
            value={formData?.formatNo || ""}
            onChange={handleChange}
            name="formatNo"
          />
          <CHeader className="bg-secondary text-light mb-3 p-2">Header</CHeader>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={headerRows}
                onChange={handleHeaderRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={headerColumns}
                onChange={handleHeaderColumnsChange}
              />
            </div>
          </div>

          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>
          <CFooter className="bg-secondary text-light mb-3 p-2">Footer</CFooter>
          <div className="d-flex pb-2">
            <div className="mb-3">
              <CFormInput
                type="number"
                label="Rows"
                placeholder="Rows"
                value={footerRows}
                onChange={handleFooterRowsChange}
              />
            </div>
            <div className="ps-3 w-50">
              <CFormSelect
                label="Columns"
                placeholder="Columns"
                options={[
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" },
                ]}
                value={footerColumns}
                onChange={handleFooterColumnsChange}
              />
            </div>
          </div>
          <table className="table mb-3">
            <tbody>{renderTable(footerRows, footerColumns)}</tbody>
          </table>
        </CModalBody>
        <CModalFooter>
          <CButton color="light" onClick={closeModal}>
            Back
          </CButton>
          <CButton color="primary" onClick={handleAdd}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    );
  };

  return (
    <>
    <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">COA Template</h1>
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
            <SearchBar value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
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
          <ATMButton text="Print" color="red" onClick={handleCoaOpenModals} />
          <PDFDownload columns={columns} data={filteredData} fileName="Coa_Template.pdf" title="Coa Template Data" />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Coa Chamber"
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
            onAdd={addNewStorageCondition}
            closeModal={closeModal}
            onSave={addCoaChamber}
          
            
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

        {
          coaModal && (
            <CoaModal  isOpen={coaModal}
            onClose={handleCoaCloseModals}
            />
          )
        }
      </div>
    </>
  );
}

export default CoaTemplate;
