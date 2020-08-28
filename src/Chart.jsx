import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  theme,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ComposedChart width={800} height={300} data={data}>
      <XAxis dataKey="start_date" />
      <YAxis yAxisId="left" axisLine={false} tickLine={false} />
      <YAxis
        yAxisId="right"
        orientation="right"
        axisLine={false}
        tickLine={false}
      />
      <Bar yAxisId="left" dataKey="totals.spend" />
      <Area yAxisId="right" dataKey="totals.leads" type="monotone" />
    </ComposedChart>
  );
};

export default Chart;
