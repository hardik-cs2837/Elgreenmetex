"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const colors = ["#00FFB2", "#00D8B0", "#00A8D6", "#007BFF", "#5F8DFF", "#9CC7FF", "#58f2df"];

export function MaterialsDonut({ data }: { data: Array<{ name: string; value: number }> }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={118}>
          {data.map((item, index) => (
            <Cell key={item.name} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: "#04150f", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

