import { Flex, Space } from "antd";
import { LayoutWithHeader } from "../_components/layouts/layout-with-header";
import Image from "next/image";
import HeaderMenu from "../_components/ui/header-menu";
import UserProfile from "../_components/ui/user-profile";
import { PropsWithChildren } from "react";
import {
  BadgePercent,
  Box,
  ChartColumn,
  FileText,
  LayoutDashboard,
  Package,
  UsersRound,
} from "lucide-react";

const Layout = ({ children }: PropsWithChildren) => {
  const menu = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <LayoutDashboard />,
    },
    {
      key: "report",
      label: "Laporan",
      icon: <FileText />,
      children: [
        { key: "report-1", label: "Option 1" },
        { key: "report-2", label: "Option 2" },
        {
          key: "report-sub-1",
          label: "Submenu",
          children: [
            { key: "report-sub-1-1", label: "Option 3" },
            { key: "report-sub-1-2", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "analytics",
      label: "Analisis Laporan",
      icon: <ChartColumn />,
      children: [
        { key: "analytics-1", label: "Option 1" },
        { key: "analytics-2", label: "Option 2" },
        {
          key: "analytics-sub-1",
          label: "Submenu",
          children: [
            { key: "analytics-sub-1-1", label: "Option 3" },
            { key: "analytics-sub-1-2", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "product",
      label: "Produk",
      icon: <Box />,
      children: [
        { key: "product-1", label: "Option 1" },
        { key: "product-2", label: "Option 2" },
        {
          key: "product-sub-1",
          label: "Submenu",
          children: [
            { key: "product-sub-1-1", label: "Option 3" },
            { key: "product-sub-1-2", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "inventory",
      label: "Inventori",
      icon: <Package />,
      children: [
        { key: "inventory-1", label: "Pembelian Stok" },
        {
          key: "inventory-sub-1",
          label: "Kelola Stok",
          children: [
            { key: "inventory-sub-1-1", label: "Daftar Stok" },
            { key: "inventory-sub-1-2", label: "Stok Opname" },
            { key: "inventory-sub-1-3", label: "Stok Terbuang" },
          ],
        },
        { key: "inventory-2", label: "Daftar Pemasok (Supplier)" },
      ],
    },
    {
      key: "customer",
      label: "Pelanggan",
      icon: <UsersRound />,
      children: [
        { key: "customer-1", label: "Option 1" },
        { key: "customer-2", label: "Option 2" },
        {
          key: "customer-sub-1",
          label: "Submenu",
          children: [
            { key: "customer-sub-1-1", label: "Option 3" },
            { key: "customer-sub-1-2", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "promotion",
      label: "Promosi",
      icon: <BadgePercent />,
      children: [
        { key: "promotion-1", label: "Option 1" },
        { key: "promotion-2", label: "Option 2" },
        {
          key: "promotion-sub-1",
          label: "Submenu",
          children: [
            { key: "promotion-sub-1-1", label: "Option 3" },
            { key: "promotion-sub-1-2", label: "Option 4" },
          ],
        },
      ],
    },
  ];
  return (
    <LayoutWithHeader
      header={{
        brandLogo: (
          <Flex align="center" gap={8}>
            <Image
              src="/assets/brand-logo.svg"
              alt="Sasana Digital Logo"
              height={77}
              width={181}
              priority
            />
          </Flex>
        ),
        menu: (
          <Space style={{ marginRight: "-40px" }}>
            <HeaderMenu />
            <UserProfile />
          </Space>
        ),
      }}
      sidebar={{
        width: 280,
        menu: menu,
      }}
    >
      {children}
    </LayoutWithHeader>
  );
};
export default Layout;
