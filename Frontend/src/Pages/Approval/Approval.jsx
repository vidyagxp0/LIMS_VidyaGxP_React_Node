
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../components/ATM components/Table/Table";

const initialData = [
  {
    sno: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    checkbox: false,
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    sno: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
    checkbox: false,
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
  {
    sno: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Manager",
    status: "Active",
    checkbox: false,
    action: [
      <FontAwesomeIcon
        icon={faEye}
        key="view"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faPenToSquare}
        key="edit"
        className="mr-2 cursor-pointer"
      />,
      <FontAwesomeIcon
        icon={faTrashCan}
        key="delete"
        className="cursor-pointer"
      />,
    ],
  },
];

const App = () => {
  const [data, setData] = useState(initialData);

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

  const columns = [
    {
      header: (
        <input
          type="checkbox"
          checked={data.every((row) => row.checkbox)}
          onChange={handleSelectAll}
        />
      ),
      accessor: "checkbox",
    },
    { header: "S No.", accessor: "sno" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },
    { header: "Action", accessor: "action" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      <Table
        columns={columns}
        data={data}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default App;
