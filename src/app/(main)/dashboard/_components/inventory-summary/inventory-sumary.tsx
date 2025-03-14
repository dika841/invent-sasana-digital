"use client";
import React from "react";
import { Card, Row, Col, Typography, Space, Flex, Divider } from "antd";
import Image from "next/image";

const { Text } = Typography;

export const InventorySummary: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Sales",
      totalSales: "868",
      icon: "/assets/quantity.svg",
    },
    {
      key: "2",
      label: "Revenue",
      totalSales: "200",
      icon: "/assets/ontheway.svg",
    },
  ];

  return (
    <Row gutter={[16, 16]} align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card
          title="Inventory Summary"
          style={{ width: "100%", maxHeight: "163px" }}
        >
          <Space
            size={[16, 16]}
            align="center"
            wrap
            style={{ width: "100%", justifyContent: "space-around" }}
          >
            {items.map((item, index) => (
              <React.Fragment key={item.key}>
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  style={{ textAlign: "center", minWidth: "110px" }}
                >
                  <Flex align="center" vertical gap={1}>
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={30}
                      height={30}
                    />
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
