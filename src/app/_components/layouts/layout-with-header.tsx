"use client";
import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Flex,
  Grid,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import "./index.css";
import Image from "next/image";
import { AlignLeft, AlignRight } from "lucide-react";

const { Header, Sider } = Layout;
const colorToken = {
  colorBg: "#fff",
  colorText: "#383E49",
};

export interface LayoutWithHeaderProps {
  children: React.ReactNode;
  header: {
    brandLogo: React.ReactNode;
    menu?: React.ReactNode;
  };
  sidebar: {
    width: number;
    onSelect?: MenuProps["onSelect"];
    onDeselect?: MenuProps["onDeselect"];
    onClick?: MenuProps["onClick"];
    onOpenChange?: MenuProps["onOpenChange"];
    menu: MenuProps["items"];
  };
}

export interface ISidebarProps {
  width: number;
  menu: MenuProps["items"];
}

export interface IHeaderContentProps {
  brandLogo: React.ReactNode;
  menu?: React.ReactNode;
  toggleSidebar?: () => void;
  onClick?: () => void;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Outlet 1",
  },
  {
    key: "2",
    label: "Outlet 2",
  },
  {
    key: "3",
    label: "Outlet 3",
  },
];

const HeaderContent: React.FC<IHeaderContentProps> = ({
  brandLogo,
  menu,
  toggleSidebar,
  onClick,
}) => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: colorToken.colorBg,
        color: colorToken.colorText,
        top: 0,
        zIndex: 12,
        width: "100%",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
      }}
      onClick={onClick}
    >
      <Row>
        <Col span={24} md={0}>
          <Flex align="center">
            <Flex
              justify="center"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
              role="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar?.();
              }}
            >
              <MenuOutlined />
            </Flex>
            <div style={{ display: "flex", alignItems: "center" }}>
              {brandLogo}
            </div>
          </Flex>
        </Col>
        <Col span={0} md={24}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {brandLogo}
          </div>
        </Col>
      </Row>
      <Space
        size={20}
        style={{
          marginLeft: "auto",
          paddingRight: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {menu}
      </Space>
    </Header>
  );
};

export const LayoutWithHeader: React.FC<LayoutWithHeaderProps> = ({
  children,
  header,
  sidebar,
}) => {
  const { md } = Grid.useBreakpoint();
  const [collapsedOnMobile, setCollapsedOnMobile] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layout-with-header">
      <HeaderContent
        brandLogo={header.brandLogo}
        menu={header.menu}
        toggleSidebar={() => setCollapsedOnMobile((val) => !val)}
        onClick={() => setCollapsedOnMobile(true)}
      />
      <Layout style={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
        <Sider
          collapsed={!md ? collapsedOnMobile : collapsed}
          collapsedWidth={!md ? 0 : 80}
          width={sidebar.width}
          style={{ position: "relative" }}
        >
          <Flex
            align="center"
            style={{
              padding: "24px",
              backgroundColor: "#C52424",
              position: "relative",
              zIndex: 1,
            }}
            gap={8}
          >
            {!collapsed && (
              <>
                <Image
                  src="/assets/building.svg"
                  alt="Outlet"
                  height={40}
                  width={40}
                  priority
                  style={{ display: md ? "block" : "none" }}
                />
                <Flex
                  vertical
                  gap={4}
                  style={{ display: md ? "flex" : "none" }}
                >
                  <Typography.Text
                    strong
                    style={{ color: "#fff", fontSize: 14 }}
                  >
                    Outlet
                  </Typography.Text>
                  <Dropdown
                    menu={{
                      items,
                      selectable: true,
                      defaultSelectedKeys: ["3"],
                    }}
                  >
                    <Typography.Link style={{ color: "#fff", fontSize: 12 }}>
                      <Space>
                        Semua outlet
                        <DownOutlined />
                      </Space>
                    </Typography.Link>
                  </Dropdown>
                </Flex>
              </>
            )}
            <Tooltip title={collapsed ? "Expand" : "Collapse"}>
              <Button
                type="default"
                onClick={toggleCollapsed}
                shape="circle"
                icon={
                  collapsed ? (
                    <AlignRight size={16} strokeWidth={1.5} />
                  ) : (
                    <AlignLeft size={16} strokeWidth={1.5} />
                  )
                }
                style={{
                  marginLeft: collapsed ? "0.2rem" : "auto",
                  zIndex: 2,
                }}
              />
            </Tooltip>
          </Flex>
          <Menu
            mode="inline"
            inlineCollapsed={collapsed}
            onSelect={sidebar.onSelect}
            onDeselect={sidebar.onDeselect}
            onClick={sidebar.onClick}
            onOpenChange={sidebar.onOpenChange}
            style={{
              backgroundColor: "#C52424",
              color: "#fff",
              maxWidth: `${sidebar.width}px`,
              padding: "20px 0px",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
            items={sidebar.menu}
            className="side-menu-layout-with-header"
          />
        </Sider>
        <Layout
          style={{
            padding: "24px",
            height: "100%",
            overflow: "auto",
          }}
          onClick={() => setCollapsedOnMobile(true)}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};
