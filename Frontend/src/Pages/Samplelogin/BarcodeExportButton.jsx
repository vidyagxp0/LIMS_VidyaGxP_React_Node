import React, { useRef } from "react";
import Barcode from "react-barcode";
import { FaDownload } from "react-icons/fa6";

const BarcodeExportButton = () => {
  const barcodeRef = useRef(null);

  const downloadBarcode = () => {
    const svg = barcodeRef.current.querySelector("svg"); // Get the barcode as an SVG
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // Set canvas dimensions based on image size
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Create a link and trigger download
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "barcode.png"; // File name for download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src = url;
  };

  return (
    <div className="flex items-center justify-between">
      <div ref={barcodeRef}>
        <Barcode displayValue={false} value={"sdfghlkjhkjhg"} />
      </div>
      <button
        className="text-center bg-slate-500 ml-10 p-2 text-white"
        onClick={downloadBarcode}
      >
        <FaDownload />
      </button>
    </div>
  );
};

export default BarcodeExportButton;
