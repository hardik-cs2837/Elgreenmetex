"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function ESGComparison({ data }: { data: Array<{ name: string; value: number; reducedValue: number }> }) {
  const chartData = data.flatMap((item) => [
    { name: `${item.name} (baseline)`, value: item.value },
    { name: `${item.name} (elgreen)`, value: item.reducedValue },
  ]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis dataKey="name" tick={{ fill: "#b5d8cf", fontSize: 10 }} />
        <YAxis tick={{ fill: "#b5d8cf", fontSize: 11 }} />
        <Tooltip contentStyle={{ background: "#04150f", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12 }} />
        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {chartData.map((item) => (
            <Cell key={item.name} fill={item.name.includes("(baseline)") ? "#007BFF" : "#00FFB2"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

