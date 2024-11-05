import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const AuditTrail = () => {
  const [auditData, setAuditData] = useState([]);

  // useEffect(() => {
  //   fetch("/api/audit-trail")
  //     .then((response) => response.json())
  //     .then((data) => setAuditData(data))
  //     .catch((error) =>
  //       console.error("Error fetching audit trail data:", error)
  //     );
  // }, []);

  return (
    <div className="audit-trail-container mt-3 m-1">
      <h2 className="font-extrabold">Audit Trail</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Action Type</th>
            <th>Data Field Changed From</th>
            <th>Data Field Changed To</th>
            <th>Data Field Changed By</th>
            <th>Data Field Changed On</th>
            <th>Action Type</th>
          </tr>
        </thead>
        <tbody>
          {auditData.length > 0 ? (
            auditData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.actionType}</td>
                <td>{entry.userName}</td>
                <td>{entry.userName}</td>
                <td>{entry.userName}</td>
                <td>{entry.userName}</td>
                <td>{entry.userName}</td>
                <td>{new Date(entry.date).toLocaleString()}</td>
                <td>{entry.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No audit trail data available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AuditTrail;
