import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const initialData = [
  {
    checkbox: false,
    sno: 1,
    sampleType: "Type A",
    worksheetType: "Worksheet 1",
    product: "Product 1",
    reportTitle: "Report 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    sampleType: "Type B",
    worksheetType: "Worksheet 2",
    product: "Product 2",
    reportTitle: "Report 2",
    status: "INITIATED",
  },
  
];

function WorkSheetHeader() {
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
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null)

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
      row.sampleType.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "All" || row.status === statusFilter)
    );
  });

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
    { header: "Sample Type", accessor: "sampleType" },
    { header: "Worksheet Type", accessor: "worksheetType" },
    { header: "Product", accessor: "product" },
    { header: "Report Title", accessor: "reportTitle" },
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

      sno: initialData.length + index + 1,
      sampleType: item["Sample Type"] || "",
      worksheetType: item["Worksheet Type"] || "",
      product: item["Product"] || "",
      reportTitle: item["Report Title"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const addNewStorageCondition = (newCondition) => {
    const nextStatus = lastStatus === "DROPPED" ? "INITIATED" : "DROPPED";
    setData((prevData)=>[
      ...prevData,
      {...newCondition, sno: prevData.length + 1, checkbox: false,status:nextStatus},
    ])
    setLastStatus(nextStatus)
    setIsModalOpen(false);
  }

  const StatusModal = ({visible , closeModal,onAdd}) => {
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(2);
    const [footerColumns, setFooterColumns] = useState(2);
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [worksheetHeader, setWorksheetHeader] = useState({
      sampleType: "",
      worksheetType: "",
      reportTitle:"",
      productCaption:""
    });

    const handleAdd = ()=>{
      const newCondition = {
        sampleType:worksheetHeader.sampleType,
        worksheetType:worksheetHeader.worksheetType,
        reportTitle:worksheetHeader.reportTitle,
        product:worksheetHeader.productCaption,
        action:[],
      }
      onAdd(newCondition)
    }

    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleHeaderRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setHeaderRows(value);
    };
  
    const handleHeaderColumnsChange = (e) => {
      const columns = parseInt(e.target.value, 10);
      setHeaderColumns(columns);
      if (headerRows > 0) {
        setHeaderRows(0);
      }
    };
  
    const handleFooterRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setFooterRows(value);
    };
  
    const handleFooterColumnsChange = (e) => {
      const columns = parseInt(e.target.value, 10);
      setFooterColumns(columns);
      if (footerRows > 0) {
        setFooterRows(0);
      }
    };
  
    const renderTable = (rows, columns) => {
      const tableRows = [];
      for (let i = 0; i < rows; i++) {
        const tableColumns = [];
        for (let j = 0; j < columns; j++) {
          tableColumns.push(
            <td key={j} className="flex gap-4">
              <CFormInput type="text" placeholder={`Lower Count `} />
              <CFormSelect
                className="mb-2"
                options={[
                  {
                    label: "Select Field",
                    value: "1",
                  },
                ]}
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Worksheet Header</CModalTitle>
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
            value={worksheetHeader.sampleType}
        onChange={(e) => setWorksheetHeader({ ...worksheetHeader, sampleType: e.target.value })}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Worksheet Type"
            placeholder="Select Worksheet Type"
            options={[
              "Select Coa Type",
              { label: "With Specification" },
              { label: "Without Specification" },
              { label: "ERP" },
            ]}
            value={worksheetHeader.worksheetType}
        onChange={(e) => setWorksheetHeader({ ...worksheetHeader, worksheetType: e.target.value })}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Title"
            placeholder="Report Title"
            value={worksheetHeader.reportTitle}
        onChange={(e) => setWorksheetHeader({ ...worksheetHeader, reportTitle: e.target.value })}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder="Product"
            value={worksheetHeader.productCaption}
        onChange={(e) => setWorksheetHeader({ ...worksheetHeader, productCaption: e.target.value })}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Format No."
            placeholder="Format No."
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
                value={headerColumns.toString()}
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
                value={footerColumns.toString()}
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
          <CButton color="primary" onClick={handleAdd}>Submit</CButton>
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
  const handleEditSave = (updatedData) => {
    const newData = data.map((item) =>
      item.sno === updatedData.sno ? updatedData : item
    );
    setData(newData);
    setEditModalData(null);
  };
  const EditModal = ({visible , closeModal,data, onSave}) => {
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(2);
    const [footerColumns, setFooterColumns] = useState(2);
    const [formData, setFormData] = useState(data);

    useEffect(() => {
      if(data){
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


    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (!isNaN(value) && value >= 0) {
        setInputValue(value);
      }
    };

    const handleHeaderRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setHeaderRows(value);
    };
  
    const handleHeaderColumnsChange = (e) => {
      const columns = parseInt(e.target.value, 10);
      setHeaderColumns(columns);
      if (headerRows > 0) {
        setHeaderRows(0);
      }
    };
  
    const handleFooterRowsChange = (e) => {
      const value = Math.min(parseInt(e.target.value, 10) || 0, 50);
      setFooterRows(value);
    };
  
    const handleFooterColumnsChange = (e) => {
      const columns = parseInt(e.target.value, 10);
      setFooterColumns(columns);
      if (footerRows > 0) {
        setFooterRows(0);
      }
    };
  
    const renderTable = (rows, columns) => {
      const tableRows = [];
      for (let i = 0; i < rows; i++) {
        const tableColumns = [];
        for (let j = 0; j < columns; j++) {
          tableColumns.push(
            <td key={j} className="flex gap-4">
              <CFormInput type="text" placeholder={`Lower Count `} />
              <CFormSelect
                className="mb-2"
                options={[
                  {
                    label: "Select Field",
                    value: "1",
                  },
                ]}
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
        size="xl"
      >
        <CModalHeader>
          <CModalTitle>Add Worksheet Header</CModalTitle>
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
            value={formData?.sampleType||""}
            onChange={handleChange}
            name="sampleType"
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Worksheet Type"
            placeholder="Select Worksheet Type"
            options={[
              "Select Coa Type",
              { label: "With Specification" },
              { label: "Without Specification" },
              { label: "ERP" },
            ]}
            value={formData?.worksheetType||""}
            onChange={handleChange}
            name="worksheetType"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Unique Code"
            placeholder="Unique Code"
            disabled
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Title"
            placeholder="Report Title"
            value={formData?.reportTitle||""}
            onChange={handleChange}
            name="reportTitle"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder="Product"
            value={formData?.product||""}
            onChange={handleChange}
            name="product"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Format No."
            placeholder="Format No."
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
                value={headerColumns.toString()}
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
                value={footerColumns.toString()}
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
          <CButton color="primary" onClick={handleSave}>Submit</CButton>
        </CModalFooter>
      </CModal>
    );
  };
  

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Work Sheet Header</h1>
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
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton text="Add WorkSheet" color="blue" onClick={openModal} />
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
          <StatusModal visible={isModalOpen} closeModal={closeModal} onAdd={addNewStorageCondition} />
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
      </div>
    </>
  );
}



export default WorkSheetHeader;
