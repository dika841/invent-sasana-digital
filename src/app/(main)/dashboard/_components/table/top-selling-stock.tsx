"use client";
import React from "react";
import { Card, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  soldQuantity: number;
  remainingQuantity: number;
  price: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Sold Quantity",
    dataIndex: "soldQuantity",
    key: "soldQuantity",
    align: "right",
  },
  {
    title: "Remaining Quantity",
    dataIndex: "remainingQuantity",
    key: "remainingQuantity",
    align: "right",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    align: "right",
    render: (value) => `Rp ${value.toLocaleString()}`,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Product A",
    soldQuantity: 120,
    remainingQuantity: 80,
    price: 150000,
  },
  {
    key: "2",
    name: "Product B",
    soldQuantity: 90,
    remainingQuantity: 110,
    price: 200000,
  },
  {
    key: "3",
    name: "Product C",
    soldQuantity: 150,
    remainingQuantity: 50,
    price: 100000,
  },
  {
    key: "4",
    name: "Product D",
    soldQuantity: 200,
    remainingQuantity: 0,
    price: 250000,
  },
];

export const TopSellingStockTable: React.FC = () => {
  return (
    <Card
      title="Top Selling Stock"
      style={{ paddingBottom: "1.7rem" }}
      extra={
        <Button type="link" onClick={() => console.log("See All")}>
          See All
        </Button>
      }
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: true }}
      />
    </Card>
  );
};
