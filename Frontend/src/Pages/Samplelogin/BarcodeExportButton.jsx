import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Barcode from "react-barcode";
import { FaDownload } from "react-icons/fa6";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config.json";

const BarcodeExportButton = () => {
  const [idForBarcode, setIdForBarcode] = useState(null);
  console.log(idForBarcode, "pppppppppppppppppppppppppppppp");
  const barcodeRef = useRef(null);

  const generateRandomNumbers = (length) => {
    let randomNumbers = "";
    for (let i = 0; i < length; i++) {
      randomNumbers += Math.floor(Math.random() * 20);
    }
    return randomNumbers;
  };

  const fetchId = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-sample/sample`);
      const responseData = Array.isArray(response.data)
        ? response.data
        : response.data.data;
      console.log(responseData, "ooooooooooooooooooooooo");

      const randomNumbers = generateRandomNumbers(16);
      const idWithRandomNumbers = `${responseData[0]?.id}${randomNumbers}`;

      setIdForBarcode(idWithRandomNumbers);
    } catch (error) {
      console.error("Error fetching barcode ID: ", error);
      toast.error("Failed to fetch barcode ID");
    }
  };

  useEffect(() => {
    fetchId();
  }, []);

  const downloadBarcode = () => {
    const svg = barcodeRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngFile;
      downloadLink.download = "barcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src = url;
  };

  return (
    <div className="flex items-center justify-between">
      {idForBarcode && (
        <div ref={barcodeRef}>
          <Barcode displayValue={true} value={idForBarcode} />{" "}
        </div>
      )}
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
