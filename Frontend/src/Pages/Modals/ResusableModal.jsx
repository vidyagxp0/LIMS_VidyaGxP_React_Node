/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  CButton,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from "@coreui/react";

const ReusableModal = ({
  visible,
  closeModal,
  data,
  fields,
  title,
  updateStatus,
}) => {
  const [statusModal, setStatusModal] = useState(false);
  const handleStatusChange = (newStatus) => {
    updateStatus(data.sampleType, newStatus);
    setStatusModal(false);
    closeModal();
  };
  return (
    <>
      <CModal
        visible={visible}
        onClose={closeModal}
        alignment="center"
        size="lg"
      >
        <div id="modal-page" className="py-3 bg-light h-100">
          <div className="container-fluid">
            <div className="block mb-3">
              <div className="main-head d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-4 mt-3">{title || "Details"}</h4>
                <CButton color="dark" onClick={() => setStatusModal(true)}>
                  Update Status
                </CButton>
              </div>
              <div className="bg-white px-5 py-3">
                <CTable align="middle" className="mb-0" small bordered>
                  <CTableBody>
                    {fields?.map((field, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell color="info">
                          {field.label}
                        </CTableDataCell>
                        <CTableDataCell>
                          {data ? data[field.key] : field.default}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </div>
          </div>
        </div>

        {statusModal && (
          <StatusModal
            visible={statusModal}
            closeModal={() => setStatusModal(false)}
            onUpdateStatus={handleStatusChange}
          />
        )}
      </CModal>
    </>
  );
};

const StatusModal = ({ visible, closeModal, onUpdateStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/manage-lims/update-status/${data.sampleType}`,
        {
          status: newStatus,
        }
      );

      if (response.status === 200) {
        updateStatus(data.sampleType, newStatus);
        toast.success("Status updated successfully.");
      } else {
        toast.error("Failed to update status.");
      }
    } catch (error) {
      toast.error(
        "Error updating status: " + (error.response?.data || error.message)
      );
    } finally {
      setStatusModal(false);
      closeModal();
    }
  };

  const handleUpdate = () => {
    onUpdateStatus(selectedStatus);
    closeModal();
  };
  return (
    <CModal alignment="center" visible={visible} onClose={closeModal} size="lg">
      <CModalHeader>
        <CModalTitle>Update Status</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormSelect
          label="Status"
          value={selectedStatus}
          onChange={handleStatusChange}
          options={[
            { label: "Select Status", value: "" },
            { label: "Approve", value: "APPROVED" },
            { label: "Drop", value: "DROPPED" },
            { label: "Reject", value: "REJECTED" },
            { label: "Active", value: "ACTIVE" },
            { label: "Inactive", value: "INATCIVE" },
          ]}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={closeModal}>
          Cancel
        </CButton>
        <CButton color="dark" onClick={handleUpdate}>
          Update
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ReusableModal;
