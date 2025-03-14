import { Col, Row } from "antd";
import { SalesAndPurchaseChart } from "./sales-and-purchase-chart";
import { OrderSumaryLineChart } from "./order-sumary-chart";

export const SectionChart = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={15} xl={15}>
        <SalesAndPurchaseChart />
      </Col>

      <Col xs={24} sm={24} md={24} lg={9} xl={9}>
        <OrderSumaryLineChart />
      </Col>
    </Row>
  );
};
