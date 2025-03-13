"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";

const theme = {
  token: {
    colorPrimary: "#C52424",
    colorBgContainer: "#FCFCFD",
  },
  components: {
    Menu: {
      itemColor: "#fff",
      colorItemTextSelected: "#fff",
      colorItemTextHover: "#fff",
      colorItemBg: "#C52424",
      colorItemBgSelected: "#A61D1D",
      colorItemBgHover: "#A61D1D",
    },
  },
};

// Komponen AntDProvider
const AntDProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={theme}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default AntDProvider;
