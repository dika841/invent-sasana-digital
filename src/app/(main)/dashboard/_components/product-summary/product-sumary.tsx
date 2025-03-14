"use client";
import React from "react";
import { Card, Row, Col, Typography, Space, Flex, Divider, Grid } from "antd";
import Image from "next/image";

const { Text } = Typography;

export const ProductSummary: React.FC = () => {
  const { md } = Grid.useBreakpoint();
  const items = [
    {
      key: "1",
      label: "Number of Suppliers",
      totalSales: "31",
      icon: "/assets/suppliers.svg",
    },
    {
      key: "2",
      label: "Number of Categories",
      totalSales: "21",
      icon: "/assets/categories.svg",
    },
  ];

  return (
    <Row gutter={[8, 8]} align="middle" justify="center">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card
          title="Product Summary"
          style={{ width: "100%", padding: 0, maxHeight: "163px" }}
        >
          <Space
            size={["small", "large"]}
            align="center"
            wrap
            style={{ width: "100%", justifyContent: "space-around" }}
          >
            {items.map((item, index) => (
              <React.Fragment key={item.key}>
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

                {index !== items.length - 1 && (
                  <Divider
                    type="vertical"
                    style={{ height: "50px", display: md ? "none" : "block" }}
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
