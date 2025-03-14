import { Col, Row } from "antd";
import { TopSellingStockTable } from "./table/top-selling-stock";
import { ListLowStock } from "./list-low-stock/list-low-stock";

export const SectionTableStock: React.FC = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={24} sm={24} md={24} lg={15} xl={15}>
        <TopSellingStockTable />
      </Col>
      <Col xs={24} sm={24} md={24} lg={9} xl={9}>
        <ListLowStock />
      </Col>
    </Row>
  );
};
