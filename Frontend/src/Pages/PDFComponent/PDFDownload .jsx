import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const PDFDownload = ({ columns, data, fileName = "data.pdf", title = "Data" }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(title, 20, 20);

    const filteredColumns = columns.filter(
      (col) => col.accessor !== "checkbox" && col.accessor !== "action"
    );

    const tableColumn = filteredColumns.map((col) =>
      col.header.props ? "Select All" : col.header
    );
    const tableRows = data.map((row) =>
      filteredColumns.map((col) => row[col.accessor])
    );

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save(fileName);
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary">
      Download PDF
    </button>
  );
};

export default PDFDownload;
