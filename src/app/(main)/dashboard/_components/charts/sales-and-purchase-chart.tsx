"use client";
import { useState } from "react";
import { Card, Select, Space } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChartOutlined, CalendarOutlined } from "@ant-design/icons";

const { Option } = Select;
export const SalesAndPurchaseChart: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("weekly");

  const weeklyData = [
    { name: "Week 1", sales: 5000, purchase: 7000 },
    { name: "Week 2", sales: 6000, purchase: 8398 },
    { name: "Week 3", sales: 7000, purchase: 9800 },
    { name: "Week 4", sales: 4780, purchase: 5908 },
    { name: "Week 5", sales: 5780, purchase: 7908 },
    { name: "Week 6", sales: 6780, purchase: 8908 },
    { name: "Week 7", sales: 5780, purchase: 7908 },
  ];

  const monthlyData = [
    { name: "Jan", sales: 12000, purchase: 8000 },
    { name: "Feb", sales: 9000, purchase: 6000 },
    { name: "Mar", sales: 15000, purchase: 10000 },
    { name: "Apr", sales: 5000, purchase: 7000 },
    { name: "May", sales: 11000, purchase: 7000 },
    { name: "Jun", sales: 6000, purchase: 15000 },
    { name: "Jul", sales: 5000, purchase: 8000 },
    { name: "Aug", sales: 5000, purchase: 7000 },
    { name: "Sep", sales: 4000, purchase: 8000 },
    { name: "Oct", sales: 5000, purchase: 7000 },
  ];

  const data = selectedOption === "weekly" ? weeklyData : monthlyData;

  return (
    <Card
      title="Sales & Purchase"
      extra={
        <Select
          defaultValue="weekly"
          style={{ width: 140 }}
          onChange={(value) => setSelectedOption(value)}
        >
          <Option value="weekly">
            <Space>
              <CalendarOutlined />
              Weekly
            </Space>
          </Option>
          <Option value="monthly">
            <Space>
              <BarChartOutlined />
              Monthly
            </Space>
          </Option>
        </Select>
      }
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar
            dataKey="purchase"
            fill="#C52424"
            name="Purchase"
            radius={[100, 100, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="sales"
            fill="#FDA2A2"
            name="Sales"
            radius={[100, 100, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
