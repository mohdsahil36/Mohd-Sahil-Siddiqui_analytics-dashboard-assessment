// pages/api/fetchData.ts

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

// Set the path to your CSV file
const csvFilePath = path.join(process.cwd(),"public", "data-to-visualize/Electric_Vehicle_Population_Data.csv");

export async function GET() {
  try {
    console.log("Attempting to read CSV file from:", csvFilePath);
    const data = fs.readFileSync(csvFilePath, "utf8"); // Read the CSV file
    console.log("File read successfully. Raw data length:", data.length);

    // Parse the CSV data
    const parsedData = Papa.parse(data, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });

    // Return the parsed data
    return NextResponse.json({ message: "File read successfully", data: parsedData.data });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return NextResponse.json({ error: "Error reading CSV file: "}, { status: 500 });
  }
}
