"use client";
import React from "react";
import { Card, Row, Col, Typography, Space, Flex, Divider } from "antd";
import Image from "next/image";

const { Text } = Typography;

export const SalesOverview: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Sales",
      totalSales: "Rp 832",
      icon: "/assets/sales.svg",
    },
    {
      key: "2",
      label: "Revenue",
      totalSales: "Rp 18,300",
      icon: "/assets/revenue.svg",
    },
    {
      key: "3",
      label: "Profit",
      totalSales: "Rp 868",
      icon: "/assets/profit.svg",
    },
    {
      key: "4",
      label: "Cost",
      totalSales: "Rp 17.432",
      icon: "/assets/cost.svg",
    },
  ];

  return (
    <Row gutter={[16, 16]} align="middle" justify="center" wrap>
      <Col span={24}>
        <Card title="Sales Overview" style={{ width: "100%", padding: 0 }}>
          <Space
            size={[8, 8]}
            style={{ width: "100%", justifyContent: "space-around" }}
            align="center"
            wrap
          >
            {items.map((item, index) => (
              <React.Fragment key={item.key}>
                <Col span={24}>
                  <Flex align="center" vertical gap={8}>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={30}
                      height={30}
                    />
                    <Space align="center">
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#5D6679",
                          fontSize: 16,
                        }}
                      >
                        {item.totalSales}
                      </Text>
                      <Text type="secondary" style={{ fontSize: 14 }}>
                        {item.label}
                      </Text>
                    </Space>
                  </Flex>
                </Col>

                {index !== items.length - 1 && (
                  <Divider
                    type="vertical"
                    style={{
                      height: "50px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};
