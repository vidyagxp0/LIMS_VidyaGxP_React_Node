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

const STPViewModal = ({
  visible,
  closeModal,
  data,
  fields,
  title,
  updateStatus,
}) => {
  const fieldGroups = [
    {
      name: "General Information",
      color: "bg-yellow-600",
      fields: fields.slice(0, 10),
    },
    {
      name: "Test Methodology",
      color: "bg-green-500",
      fields: fields.slice(10, 22),
    },
    {
      name: "Calculations and Interpretation",
      color: "bg-red-500",
      fields: fields.slice(22, 27),
    },
    {
      name: "Reporting and Documentation",
      color: "bg-violet-500",
      fields: fields.slice(27, 33),
    },
    { name: "Miscellaneous", color: "bg-orange-500", fields: fields.slice(33) },
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

export default STPViewModal;
