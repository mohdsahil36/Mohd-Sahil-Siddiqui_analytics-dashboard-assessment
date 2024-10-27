
"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

type Chart3Props = {
  data: { range: string; count: number }[];
};

export default function Chart3({ data }: Chart3Props) {
  return (
    <AreaChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" name="Vehicle Count by Range" />
    </AreaChart>
  );
}
