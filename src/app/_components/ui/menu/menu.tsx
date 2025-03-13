import { Flex, Popover } from "antd";
import React from "react";
import "./menu.css";

type MenuProps = React.ComponentPropsWithoutRef<"div">;

const Menu = ({ ...props }: MenuProps) => <div role="menu" {...props} />;

Menu.displayName = "Menu";

const MenuDropdown = React.forwardRef<
  React.ComponentRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover> & {
    label: React.ReactNode;
    title: React.ReactNode;
    moreText?: React.ReactNode;
    children: React.ReactNode;
  }
>(
  (
    {
      label,
      trigger = "click",
      children,
      placement = "bottomRight",
      arrow = false,
      title,
      moreText,

      ...props
    },
    ref
  ) => (
    <Popover
      className="custom"
      ref={ref}
      trigger={trigger}
      content={children}
      arrow={arrow}
      placement={placement}
      title={
        <Flex justify="space-between">
          <div style={{ color: "#000000A6", fontWeight: 600 }}>{title}</div>

          {moreText && moreText}
        </Flex>
      }
      {...props}
    >
      {label}
    </Popover>
  )
);

MenuDropdown.displayName = "MenuDropdown";

Menu.Dropdown = MenuDropdown;

export default Menu;
