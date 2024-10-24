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
export default function SpecificationviewModel({
  visible,
  closeModal,
  data,
  fields,
  title,
  updateStatus,
}) {
  const fieldGroups = [
    {
      name: "General Infromation",
      color: "bg-cyan-500",
      fields: fields.slice(0, 11),
    },
    {
      name: "Product Characteristics",
      color: "bg-green-500",
      fields: fields.slice(11, 18),
    },
    {
      name: "Test Specifications",
      color: "bg-red-500",
      fields: fields.slice(18, 24),
    },
    {
      name: "Quality Control",
      color: "bg-purple-500",
      fields: fields.slice(24, 30),
    },
    {
      name: "Compliance and Certification",
      color: "bg-orange-500",
      fields: fields.slice(30, 33),
    },
    {
      name: "Documentation and Tracking",
      color: "bg-yellow-500",
      fields: fields.slice(33, 38),
    },
    {
      name: "	Miscellaneous",
      color: "bg-blue-500",
      fields: fields.slice(38, 40),
    },
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
}
