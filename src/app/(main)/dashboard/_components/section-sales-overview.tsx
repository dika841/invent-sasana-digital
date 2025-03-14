import { Col, Row } from "antd";
import { SalesOverview } from "./sales-overview/sales-overview";
import { InventorySummary } from "./inventory-summary/inventory-sumary";
import "./index.css";
export const SectionSalesOverview: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={15}>
        <SalesOverview />
      </Col>
      <Col span={9}>
        <InventorySummary />
      </Col>
    </Row>
  );
};
