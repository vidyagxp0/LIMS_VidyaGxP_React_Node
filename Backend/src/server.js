const express = require("express");
const { connectToDB, sequelize } = require("./config/db");
const config = require("./config/config.json");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");
const path = require("path");
const xlsx = require("xlsx");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to Lims Vidyagxp');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "documents")));

const readExcelData = () => {
  let workbook = xlsx.readFile('C:\\Users\\ritik\\Documents\\GitHub\\LIMS_VidyaGxP_React_Node\\Backend\\users.xlsx');
  let worksheet = workbook.Sheets[workbook.SheetNames[0]];
  let range = xlsx.utils.decode_range(worksheet["!ref"]);

  let excelData = [];
  for (let row = range.s.r + 1; row <= range.e.r; row++) { // Start from row 1 to skip header
    let data = {};

    for (let col = range.s.c; col <= range.e.c; col++) {
      let cell = worksheet[xlsx.utils.encode_cell({ r: row, c: col })];
      let headerCell = worksheet[xlsx.utils.encode_cell({ r: 0, c: col })]; // Read headers
      let header = headerCell ? headerCell.v : `Column${col}`; // Fallback to generic header if not found
      data[header] = cell ? cell.v : null; // Ensure the cell exists before accessing its value
    }

    excelData.push(data);
  }

  return excelData;
};

const insertDataFromExcel = async (excelData) => {
  try {
    for (let data of excelData) {
      // Format dates
      let manufactureDate = new Date(data['Manufacture Date']);
      let expiryDate = new Date(data['Expiry Date']);
      data['Manufacture Date'] = manufactureDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      data['Expiry Date'] = expiryDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

      console.log(data); // Log data in JSON format

      let sql = `INSERT INTO users (
        File_Name,
        STP_ID,
        Product_Name,
        Batch_Number,
        Manufacture_Date,
        Expiry_Date,
        Active_Ingredient_Concentration,
        Capsule_Size,
        Dissolution_Test,
        Hardness_Test,
        Moisture_Content,
        Uniformity_of_Dosage_Unit,
        Appearance,
        Packaging_Integrity,
        Storage_Conditions,
        Stability_Testing
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      let values = [
        data['File Name'],
        data['STP ID'],
        data['Product Name'],
        data['Batch Number'],
        data['Manufacture Date'],
        data['Expiry Date'],
        data['Active Ingredient Concentration'],
        data['Capsule Size'],
        data['Dissolution Test'],
        data['Hardness Test'],
        data['Moisture Content'],
        data['Uniformity of Dosage Unit'],
        data['Appearance'],
        data['Packaging Integrity'],
        data['Storage Conditions'],
        data['Stability Testing']
      ];

      await sequelize.query(sql, { replacements: values });
    }
  } catch (err) {
    console.error('Error inserting data from Excel:', err);
  }
};
server.listen(config.development.PORT, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log("Server is running at port: " + config.development.PORT);
    let excelData = readExcelData(); // Read data from Excel file
    console.log(JSON.stringify(excelData, null, 2)); // Log entire data in JSON format
    await insertDataFromExcel(excelData); // Insert data after DB connection is established
  } catch (e) {
    console.log("Error in database connection", e);
  }
});
