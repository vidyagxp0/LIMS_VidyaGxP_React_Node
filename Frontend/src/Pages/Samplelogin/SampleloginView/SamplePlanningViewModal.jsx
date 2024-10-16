import React from "react";
import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from "@coreui/react";

const SamplePlanningViewModal = ({
  visible,
  closeModal,
  data,
  fields,
  title,
  updateStatus,
}) => {
  const fieldGroups = [
    {
      name: "Sample Planning Information",
      color: "bg-yellow-600",
      fields: fields.slice(0, 10),
    },
    {
      name: "Testing Requirements",
      color: "bg-green-600",
      fields: fields.slice(10, 20),
    },
    {
      name: "Personnel and Roles",
      color: "bg-brown-600",
      fields: fields.slice(20, 25),
    },
    {
      name: "Schedule and Timeline",
      color: "bg-violet-600",
      fields: fields.slice(25, 36),
    },
    { name: "Logistics and Sample Handling", color: "bg-red-600", fields: fields.slice(36,41) },
    { name: "Quality and Compliance", color: "bg-blue-600", fields: fields.slice(41,46) },
    { name: "Resource Allocation", color: "bg-orange-600", fields: fields.slice(46,50) },
    { name: "Tracking and Monitoring", color: "bg-green-300", fields: fields.slice(50,54) },
    { name: "Miscellaneous", color: "bg-violet-500", fields: fields.slice(54,58) },
  ];

  return (
    <CModal visible={visible} onClose={closeModal} size="xl">
      <CModalHeader>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {fieldGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-4">
            <h3 className={`text-white px-4 py-2 ${group.color}`}>
              {group.name}
            </h3>
            <CTable bordered responsive>
              <CTableBody>
                {group.fields.map((field, fieldIndex) => (
                  <CTableRow key={fieldIndex}>
                    <CTableDataCell
                      className="font-weight-bold"
                      style={{ width: "30%" }}
                    >
                      {field.charAt(0).toUpperCase() +
                        field
                          .slice(1)
                          .replace(/([A-Z])/g, " $1")
                          .trim()}
                    </CTableDataCell>
                    <CTableDataCell>{data[field]}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
        ))}
      </CModalBody>
    </CModal>
  );
};

export default SamplePlanningViewModal;
