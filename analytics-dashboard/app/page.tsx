"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Data } from "@/lib/types"; 
import DataTable from "./components/DataTable";
import DataChart from "./components/DataChart";

export default function Home() {
  const [data, setData] = useState<Data[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCSVData() {
      try {
        const response = await fetch("/data-to-visualize/data.csv");
        if (!response.ok) throw new Error("Network response was not ok");
        const csvText = await response.text();

        Papa.parse<Data>(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data as Data[]);
            setLoading(false); 
          },
          error: (error) => {
            setError("Error parsing CSV: " + error.message);
            setLoading(false);
          },
        });
      } catch (error) {
        setError("Error fetching CSV: ");
        setLoading(false);
      }
    }

    fetchCSVData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-2xl text-center underline underline-offset-4 mt-5">Analytics Dashboard</h1>
      <DataTable data={data}/>
      <DataChart data={data}/>
    </div>
  );
}