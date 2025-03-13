"use client";

import { Avatar, Dropdown, Space, Typography } from "antd";
import type { MenuProps } from "antd/lib";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const AccountItem: MenuItem[] = [
  {
    key: "1",
    label: "Logout",
  },
];

const UserProfile = () => {
  const avatarContainerStyle: React.CSSProperties = {
    width: "100%",
    paddingInline: 24,
  };

  const textStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  };

  return (
    <Dropdown menu={{ items: AccountItem }} trigger={["hover"]}>
      <Space style={avatarContainerStyle} size="middle">
        <Avatar icon={<UserOutlined />} />
        <div style={textStyle}>
          <Typography.Text strong>{"Muaffa Syukur"}</Typography.Text>
          <Typography.Text style={{ fontSize: 12 }} type="secondary">
            {"Hitnes Muharram"}
          </Typography.Text>
        </div>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default UserProfile;
