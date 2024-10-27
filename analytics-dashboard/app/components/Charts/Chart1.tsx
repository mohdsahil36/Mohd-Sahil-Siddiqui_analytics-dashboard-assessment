
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

type Chart1Props = {
  data: { county: string; count: number }[];
};

export default function Chart1({ data }: Chart1Props) {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="county" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Bar dataKey="count" fill="#8884d8" name="Vehicle Count" />
    </BarChart>
  );
}
