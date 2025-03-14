"use client";
import { Button, Card, List, Tag } from "antd";
import Image from "next/image";
export const ListLowStock: React.FC = () => {
  const listItem = [
    {
      id: 1,
      name: "Tata Salt",
      quantity: 10,
      image: "/assets/product-1.svg",
    },
    {
      id: 2,
      name: "Lays",
      quantity: 15,
      image: "/assets/product-2.svg",
    },
    {
      id: 3,
      name: "Lays",
      quantity: 15,
      image: "/assets/product-2.svg",
    },
  ];
  return (
    <Card
      title="Low Quantity  Stock"
      extra={
        <Button type="link" onClick={() => console.log("See All")}>
          See All
        </Button>
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={listItem}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              avatar={
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={70}
                />
              }
              description={`Remaining Quantity : ${item.quantity} Packet`}
            />
            <Tag color="red">{item.quantity < 15 ? "Low" : "Normal"}</Tag>
          </List.Item>
        )}
      />
    </Card>
  );
};
