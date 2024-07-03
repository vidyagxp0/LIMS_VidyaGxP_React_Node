import React from 'react';

const ImportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10">
        <h2 className="text-xl font-semibold mb-4">Bulk Upload Data</h2>
        <p className="mb-4">Upload your data through csv or xls file.</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Step 1: Download Sample Template</h3>
          <p className="mb-2">Download sample template by clicking the button below.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Download Sample</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Step 2: Upload CSV/XLS</h3>
          <p className="mb-2">Upload the edited template by clicking the button below.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Upload File</button>
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Done</button>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
