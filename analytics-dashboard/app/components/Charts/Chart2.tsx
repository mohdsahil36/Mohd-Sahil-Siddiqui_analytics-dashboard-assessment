
"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

type Chart2Props = {
  data: { year: string; count: number }[];
};

export default function Chart2({ data }: Chart2Props) {
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey="count" stroke="#82ca9d" name="Vehicle Count by Year" />
    </LineChart>
  );
}
