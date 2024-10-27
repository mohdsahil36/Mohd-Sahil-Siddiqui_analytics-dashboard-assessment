// DataChart.tsx
"use client";

import { Data } from "@/lib/types";
import { useState, useEffect } from "react";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";
import Chart4 from "./Charts/Chart4";

type DataChartProps = {
  data: Data[] | null;
};

export default function DataChart({ data }: DataChartProps) {
  const [countyData, setCountyData] = useState<{ county: string; count: number }[]>([]);
  const [yearlyData, setYearlyData] = useState<{ year: string; count: number }[]>([]);
  const [rangeData, setRangeData] = useState<{ range: string; count: number }[]>([]);
  const [vehicleTypeData, setVehicleTypeData] = useState<{ type: string; count: number }[]>([]);

  useEffect(() => {
    if (data) {

      const countyCounts = data.reduce((acc: Record<string, number>, item) => {
        acc[item.County] = (acc[item.County] || 0) + 1;
        return acc;
      }, {});
      setCountyData(Object.entries(countyCounts).map(([county, count]) => ({ county, count })));

      const yearCounts = data.reduce((acc: Record<string, number>, item) => {
        acc[item["Model Year"]] = (acc[item["Model Year"]] || 0) + 1;
        return acc;
      }, {});
      setYearlyData(Object.entries(yearCounts).map(([year, count]) => ({ year, count })));


      const rangeCounts = data.reduce((acc: Record<string, number>, item) => {
        const range = item["Electric Range"] || "Unknown";
        acc[range] = (acc[range] || 0) + 1;
        return acc;
      }, {});
      setRangeData(Object.entries(rangeCounts).map(([range, count]) => ({ range, count })));

      const typeCounts = data.reduce((acc: Record<string, number>, item) => {
        const type = item["Electric Vehicle Type"] || "Unknown";
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      setVehicleTypeData(Object.entries(typeCounts).map(([type, count]) => ({ type, count })));
    }
  }, [data]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center underline underline-offset-4  ">Data Visualizations</h2>
      <div className="grid grid-cols-2 gap-x-3 justify-center">
        <Chart1 data={countyData}/>
        <Chart2 data={yearlyData} />
        <Chart3 data={rangeData} />
        <Chart4 data={vehicleTypeData} />
      </div>
    </div>
  );
}
