import React, { useRef } from "react";
import * as XLSX from "xlsx";

const ImportModal = ({ isOpen, onClose,initialData, columns,onDataUpload  }) => {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleCreateExcel = () => {
    const wb = XLSX.utils.book_new();

    // Extract headers from columns prop
    const headerRow = columns?.map((column) => column.header);

    // Example empty row
    const dataRows = [["", "", ""]];

    const ws = XLSX.utils.aoa_to_sheet([headerRow, ...dataRows]);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "sample.xlsx");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Pass the parsed data to the parent component
      onDataUpload(jsonData);

      console.log(jsonData); // Process your data here
      onDataUpload(jsonData); // Pass the data to the parent component
    };

    reader.readAsArrayBuffer(file);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Bulk Upload Data</h2>
        <p className="mb-4">Upload your data through CSV or XLS file.</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Step 1: Download Sample Template
          </h3>
          <p className="mb-2">
            Download sample template by clicking the button below.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleCreateExcel}
          >
            Download Sample
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Step 2: Upload CSV/XLS</h3>
          <p className="mb-2">
            Upload the edited template by clicking the button below.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleUploadButtonClick}
          >
            Upload XLSX
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".csv, .xlsx, .xls"
            onChange={handleFileUpload}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
