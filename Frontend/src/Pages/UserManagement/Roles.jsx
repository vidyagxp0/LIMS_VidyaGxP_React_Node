import React, { useState } from "react";
import "../UserManagement/Department/Admin.css";
import { FaArrowRight } from "react-icons/fa";
import Table from "../../components/ATM components/Table/Table";

const initialData = [
  { sno: 1, role: "Role 1", status: "Active" },
  { sno: 2, role: "Role 2", status: "Inactive" },
  { sno: 3, role: "Role 3", status: "Active" },
  { sno: 4, role: "Role 4", status: "Inactive" },
  { sno: 5, role: "Role 5", status: "Active" },
  { sno: 6, role: "Role 6", status: "Inactive" },
  { sno: 7, role: "Role 7", status: "Active" },
  { sno: 8, role: "Role 8", status: "Inactive" },
  { sno: 9, role: "Role 9", status: "Active" },
  { sno: 10, role: "Role 10", status: "Inactive" },
];



const Roles = () => {
  const [data, setData] = useState(initialData);
  const columns = [
    { header: 'SrNo.', accessor: 'sno' },
    { header: 'Role', accessor: 'role' },
    { header: 'Status', accessor: 'status' },
  ];
 

  return (
    <div className="m-5 mt-3">
      <div className="main-head">
        <h4 className="fw-bold">Roles</h4>
      </div>
      <Table columns={columns} data={data} />

    </div>
  );
};

export default Roles;
