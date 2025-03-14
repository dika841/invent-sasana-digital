"use client";
import React from "react";
import { Card, Row, Col, Typography, Space, Flex, Divider } from "antd";
import Image from "next/image";

const { Text } = Typography;

export const PurchaseOverview: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Sales",
      totalSales: "82",
      icon: "/assets/purchase.svg",
    },
    {
      key: "2",
      label: "Cost",
      totalSales: "Rp 13,300",
      icon: "/assets/cost.svg",
    },
    {
      key: "3",
      label: "Cancel",
      totalSales: "5",
      icon: "/assets/cancel.svg",
    },
    {
      key: "4",
      label: "Return",
      totalSales: "Rp 17.432",
      icon: "/assets/profit.svg",
    },
  ];

  return (
    <Row gutter={[16, 16]} align="middle" justify="center" wrap>
      <Col span={24}>
        <Card
          title="Purchase Overview"
          style={{ width: "100%", padding: "16px" }}
        >
          <Space
            size={[8, 16]}
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
