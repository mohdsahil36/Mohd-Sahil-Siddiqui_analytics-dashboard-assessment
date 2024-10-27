const fs = require("fs");
const path = require("path");

const csvFilePath = path.join(__dirname, "../data-to-visualize/Electric_Vehicle_Population_Data.csv");

try {
  console.log("Attempting to read CSV file from:", csvFilePath);
  const data = fs.readFileSync(csvFilePath, "utf8");
  console.log("File read successfully. Raw data length:", data.length);
} catch (error) {
  console.error("Error reading CSV file:", error);
}
