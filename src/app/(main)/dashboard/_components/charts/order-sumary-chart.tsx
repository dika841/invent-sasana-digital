"use client";
import React from "react";
import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const OrderSumaryLineChart: React.FC = () => {
  const data = [
    { name: "Jan", ordered: 4000, delivered: 2400 },
    { name: "Feb", ordered: 3000, delivered: 1398 },
    { name: "Mar", ordered: 2000, delivered: 9800 },
    { name: "Apr", ordered: 2780, delivered: 3908 },
    { name: "May", ordered: 1890, delivered: 4800 },
    { name: "Jun", ordered: 2390, delivered: 3800 },
    { name: "Jul", ordered: 3490, delivered: 4300 },
  ];

  return (
    <Card title="Order Summary">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />
          <Line
            type="monotone"
            dataKey="ordered"
            stroke="#DBA362"
            activeDot={{ r: 8 }}
            name="Ordered"
          />
          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#B6D3FA"
            name="Delivered"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
