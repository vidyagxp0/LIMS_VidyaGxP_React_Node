import React from 'react';
import LaunchQMS from '../../components/ReusableButtons/LaunchQMS';

export default function MasterProductDetail() {
  return (
    <div style={{ margin: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
      <LaunchQMS />
      <h3 style={{ marginLeft: "160px", paddingTop: "30px" }}> Details</h3>

      <div style={{ margin: "0 auto", border: "2px solid", width: "70%", display: "flex" }}>
        <div style={{ borderRight: "2px solid", width: "45%", backgroundColor: "blue", color: "white" }}>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}>Unique Code </p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}> Product Name</p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}> Generic Name</p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}>Action By</p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}>Action On </p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}> Re-Testing Period </p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}>Status </p>
          <p style={{ borderBottom: "1px solid white", paddingLeft: "20px" }}>Version </p>
        </div>

        <div style={{ width: "55%" }}>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}>M1</p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}>Glass</p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}>Glass</p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}>Admin </p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}> 20/02/2023 </p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}> 0 days </p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}> APPROVED</p>
          <p style={{ borderBottom: "1px solid black", paddingLeft: "20px" }}> 0</p>
        </div>
      </div>
    </div>
  );
}
