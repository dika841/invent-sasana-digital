"use client";
import { Flex, Spin } from "antd";

export const PageLoading = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Spin />
    </Flex>
  );
};
