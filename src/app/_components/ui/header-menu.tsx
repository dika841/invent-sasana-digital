import { BellOutlined } from "@ant-design/icons";
import { Badge, Button, Divider, Empty, Flex, List } from "antd";
import Menu from "./menu/menu";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <Menu>
      <Menu.Dropdown
        label={
          <Badge dot={false} offset={[-5, 5]}>
            <Button shape="circle">
              <BellOutlined />
            </Button>
          </Badge>
        }
        title="Notification"
      >
        <List
          className="list-item-notif list-item-notif-popover"
          itemLayout="vertical"
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="There is no notification"
              />
            ),
          }}
        />
        <Divider
          style={{
            margin: 0,
          }}
        />
        <Flex justify="center">
          <Button type="link">
            <Link href="#">See All Notifications</Link>
          </Button>
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
};
export default HeaderMenu;
