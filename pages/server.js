const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const XLSX = require("xlsx");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

app.post("/save", (req, res) => {
  const data = req.body;

  // Path to the Excel file
  const filePath = "./data.xlsx";
  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    // Read existing file
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["Sheet1"];

    if (worksheet) {
      // If Sheet1 exists, read data, append the new data, and recreate the worksheet
      const existingData = XLSX.utils.sheet_to_json(worksheet);
      existingData.push(data);
      worksheet = XLSX.utils.json_to_sheet(existingData);
      workbook.Sheets["Sheet1"] = worksheet; // Replace existing sheet
    } else {
      // If Sheet1 does not exist, create it
      worksheet = XLSX.utils.json_to_sheet([data]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    }
  } else {
    // Create new workbook and add data
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([data]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  }

  // Save the workbook to file
  XLSX.writeFile(workbook, filePath);

  res.json({ message: "Data saved to Excel successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
