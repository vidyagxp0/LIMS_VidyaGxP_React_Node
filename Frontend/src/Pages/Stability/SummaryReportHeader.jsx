import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
import ReusableModal from "../Modals/ResusableModal";
import ImportModal from "../Modals/importModal";
import PDFDownload from "../PDFComponent/PDFDownload ";
import LaunchQMS from "../../components/ReusableButtons/LaunchQMS";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const fields = [
  { label: "Product Caption", key: "productCaption" },
  { label: "Report Title", key: "reportTitle" },
  { label: "Format No", key: "formatNo" },
  { label: "Status", key: "status" },
];
const initialData = [
  {
    checkbox: false,
    sno: 1,
    productCaption: "Product Caption 1",
    reportTitle: "Report 1",
    status: "DROPPED",
  },
  {
    checkbox: false,
    sno: 2,
    productCaption: "Product Caption 2",
    reportTitle: "Report 2",
    status: "INITIATED",
  },
];

function SummaryReportHeader() {
  const [data, setData] = useState([]);
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
  const [lastStatus, setLastStatus] = useState("INITIATED");
  const [editModalData, setEditModalData] = useState(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/get-all-lims/sMSummaryReportHeader`
      );
      const fetchedData = response?.data[0]?.sMSummaryReportHeader || [];

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
  const closeViewModal = () => {
    setIsViewModalOpen(false);
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


  const handleStatusUpdate = async (newStatus) => {
    try {
      const { sno, ...dataToSend } = viewModalData;
      console.log(viewModalData);

      const response = await axios.put(`http://localhost:9000/manage-lims/update/sMStandardProtocol/${viewModalData.uniqueId}`, {
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
      toast.error("Error updating Approval status"); ``
    }
  };


  const filteredData = data.filter((row) => {
    return (
      row.reportTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
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
    { header: "Product Caption", accessor: "productCaption" },
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (status) => {
    setStatusFilter(status);
  };



  const handleExcelDataUpload = (excelData) => {
    const updatedData = excelData.map((item, index) => ({
      checkbox: false,

      sno: data.length + index + 1,
      productCaption: item["Product Caption"] || "",
      reportTitle: item["Report Title"] || "",
      status: item["Status"] || "",
    }));

    const concatenateData = [...updatedData];
    setData(concatenateData); // Update data state with parsed Excel data
    setIsModalsOpen(false); // Close the import modal after data upload
  };

  const handleModalSubmit = async (newProduct) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/manage-lims/add/sMSummaryReportHeader`,
        {
          ...newProduct,
          status: newProduct.status || "INITIATED",
        }
      );
      if (response.status === 200) {
        toast.success("Summary Report Header added successfully.");
        setIsModalOpen(false);
        fetchSummarReportHeaderData();
      } else {
        toast.error("Failed to add Summary Report Header.");
      }
    } catch (error) {
      toast.error(
        "Error adding Summary Report Header: " +
        (error.response?.data || error.message)
      );
    }
  };

  const handleDelete = async (item) => {
    console.log(item);

    try {
      const response = await axios.delete(
        `http://localhost:9000/delete-lims/sMSummaryReportHeader/${item.uniqueId}`
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
        `http://localhost:9000/manage-lims/add/sMSummaryReportHeader`,
        {
          ...newProduct,
          addDate: new Date().toISOString().split("T")[0],
          status: newProduct.status || "Active",
        }
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        setViewModalData(null);
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

  const StatusModal = ({ visible, closeModal, onAdd }) => {
    const [headerRows, setHeaderRows] = useState(0);
    const [footerRows, setFooterRows] = useState(0);
    const [headerColumns, setHeaderColumns] = useState(1);
    const [footerColumns, setFooterColumns] = useState(1);
    const [numRows, setNumRows] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [productCaption, setProductCaption] = useState("");
    const [formatNo, setFormatNo] = useState("");
    const [reportTitle, setReportTitle] = useState("");

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

    const handleAdd = () => {
      const newCondition = {
        productCaption: productCaption,
        reportTitle: reportTitle,
        action: [],
      };
      onAdd(newCondition);
    };

    return (
      <CModal
        alignment="center"
        visible={visible}
        onClose={closeModal}
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Summary Report Header</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Title"
            placeholder=" Report Title"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
          />


          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder=" Product"
            value={productCaption}
            onChange={(e) => setProductCaption(e.target.value)}
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Format No."
            placeholder=" Format No."
            value={formatNo}
            onChange={(e) => setFormatNo(e.target.value)}
          />
          <CHeader className="bg-secondary text-light mb-3 p-2">Header</CHeader>
          <CFormInput
            className="mb-3"
            type="text"
            label="Rows"
            placeholder=" Rows"
            value={headerRows}
            onChange={handleHeaderRowsChange}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Columns"
            placeholder=" Columns"
            options={[
              " Columns",
              { label: "2" },
              { label: "4" },
              { label: "6" },
            ]}
            value={headerColumns.toString()}
            onChange={handleHeaderColumnsChange}
          />
          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>
          <CFooter className="bg-secondary text-light mb-3 p-2">Footer</CFooter>
          <CFormInput
            className="mb-3"
            type="text"
            label="Rows"
            placeholder=" Rows"
            value={footerRows}
            onChange={handleFooterRowsChange}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Columns"
            placeholder=" Columns"
            options={[
              " Columns",
              { label: "2" },
              { label: "4" },
              { label: "6" },
            ]}
            value={footerColumns.toString()}
            onChange={handleFooterColumnsChange}
          />
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
        `http://localhost:9000/manage-lims/update/sMSummaryReportHeader/${updatedData.uniqueId}`,
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
        setViewModalData(null);
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
        size="lg"
      >
        <CModalHeader>
          <CModalTitle>Add Summary Report Header</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            type="text"
            label="Report Title"
            placeholder=" Report Title"
            value={formData?.reportTitle || ""}
            onChange={handleChange}
            name="reportTitle"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Product/Material Caption"
            placeholder=" Product"
            value={formData?.productCaption || ""}
            onChange={handleChange}
            name="productCaption"
          />
          <CFormInput
            className="mb-3"
            type="text"
            label="Format No."
            placeholder=" Format No."
            value={formData?.formatNo || ""}
            onChange={handleChange}
            name="formatNo"
          />
          <CHeader className="bg-secondary text-light mb-3 p-2">Header</CHeader>
          <CFormInput
            className="mb-3"
            type="text"
            label="Rows"
            placeholder=" Rows"
            value={headerRows}
            onChange={handleHeaderRowsChange}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Columns"
            placeholder=" Columns"
            options={[
              " Columns",
              { label: "2" },
              { label: "4" },
              { label: "6" },
            ]}
            value={headerColumns.toString()}
            onChange={handleHeaderColumnsChange}
          />
          <table className="table mb-3">
            <tbody>{renderTable(headerRows, headerColumns)}</tbody>
          </table>
          <CFooter className="bg-secondary text-light mb-3 p-2">Footer</CFooter>
          <CFormInput
            className="mb-3"
            type="text"
            label="Rows"
            placeholder=" Rows"
            value={footerRows}
            onChange={handleFooterRowsChange}
          />
          <CFormSelect
            className="mb-3"
            type="select"
            label="Columns"
            placeholder=" Columns"
            options={[
              " Columns",
              { label: "2" },
              { label: "4" },
              { label: "6" },
            ]}
            value={footerColumns.toString()}
            onChange={handleFooterColumnsChange}
          />
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

  return (
    <>
      <LaunchQMS />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Summary Report Header</h1>
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
            <PDFDownload
              columns={columns}
              data={filteredData}
              fileName="Summary_Report_Header.pdf"
              title="Summary Report Header Data"
            />
            <ATMButton text="Import" color="pink" onClick={handleOpenModals} />
            <ATMButton
              text="Add Summary Report"
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
            closeModal={closeModal}
            onAdd={handleAdd}
          />
        )}

        {viewModalData && (
          <ReusableModal
            visible={viewModalData !== null}
            closeModal={closeViewModal}
            data={viewModalData}
            onClose={handleCloseModals}
            fields={fields}
            title="Standard Protocol Details"
            updateStatus={handleStatusUpdate}
          />
        )}
        {isModalsOpen && (
          <ImportModal
            initialData={data}
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

export default SummaryReportHeader;
