import { Col, Row } from "antd";
import { PurchaseOverview } from "./purchase-overview/purchase-overview";
import { ProductSummary } from "./product-summary/product-sumary";
import "./index.css";
export const SectionPurchaseOverview: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={15}>
        <PurchaseOverview />
      </Col>
      <Col span={9}>
        <ProductSummary />
      </Col>
    </Row>
  );
};
