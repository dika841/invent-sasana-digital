import { NextPage } from "next";
import { ReactElement } from "react";
import { SectionSalesOverview } from "./_components/section-sales-overview";
import { SectionPurchaseOverview } from "./_components/section-purchase-overview";
import { Space } from "antd";
import { SectionChart } from "./_components/charts/section";
import { SectionTableStock } from "./_components/section-table-stock";

const Page: NextPage = (): ReactElement => {
  return (
    <Space direction="vertical">
      <SectionSalesOverview />
      <SectionPurchaseOverview />
      <SectionChart />
      <SectionTableStock />
    </Space>
  );
};

export default Page;
