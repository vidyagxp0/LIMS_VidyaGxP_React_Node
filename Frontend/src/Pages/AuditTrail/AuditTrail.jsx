import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "reactstrap";

const AuditTrail = () => {
  const location = useLocation();
  const { auditTrailData } = location.state || {};
  const [data, setData] = useState([]);
  console.log(data, "<>?<>?<>?<>?");

  useEffect(() => {
    if (auditTrailData?.auditTrail) {
      setData(auditTrailData.auditTrail); // Set the whole array
    }
  }, [auditTrailData]);

  return (
    <div className="audit-trail-container mt-3 m-3">
      <h2 className="font-extrabold text-lg">Audit Trail</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Action Type</th>
            <th>Data Field Changed From</th>
            <th>Data Field Changed To</th>
            <th>Data Field Changed By</th>
            <th>Data Field Changed On</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.action}</td>
                <td>{entry.previous_value}</td>
                <td>{entry.previous_value}</td>
                {/* <td>{entry.new_value}</td> */}
                <td>{entry.User?.name || "N/A"}</td>
                <td>{new Date(entry.updatedAt).toLocaleString()}</td>
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
