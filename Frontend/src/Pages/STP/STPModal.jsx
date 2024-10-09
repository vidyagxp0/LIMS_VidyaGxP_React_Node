import React from "react";

export const STPAddModal = ({ isOpen, onClose, onSubmit, newStorageLocation, handleInputChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg overflow-y-auto h-screen">
          <h3 className="text-lg font-bold mb-6">Add Storage Location</h3>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(newStorageLocation).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};


export const STPEditModal = ({ isOpen, onClose, onSubmit, newStorageLocation, handleInputChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-lg overflow-y-auto h-screen">
          <h3 className="text-lg font-bold mb-6">Edit Storage Location</h3>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(newStorageLocation).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};



