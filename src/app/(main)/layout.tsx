import { Flex } from "antd";
import { LayoutWithHeader } from "../_components/layouts/layout-with-header";
import Image from "next/image";
import HeaderMenu from "../_components/ui/header-menu";
import UserProfile from "../_components/ui/user-profile";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWithHeader
      header={{
        brandLogo: (
          <Flex align="center" gap={8}>
            <Image
              src="/assets/brand-logo.svg"
              alt="Sasana Digital Logo"
              height={64}
              width={125}
              priority
            />
          </Flex>
        ),
        menu: (
          <Flex justify="flex-end" style={{ marginRight: "-40px" }}>
            <HeaderMenu />
            <UserProfile />
          </Flex>
        ),
      }}
      sidebar={{
        width: 250,
        menu: [
          {
            label: "Dashboard",
            key: "/dashboard",
          },
          {
            key: "sub1",
            label: "Navigation Two",

            children: [
              { key: "3", label: "Option 3" },
              { key: "4", label: "Option 4" },
              {
                key: "sub1-2",
                label: "Submenu",
                children: [
                  { key: "5", label: "Option 5" },
                  { key: "6", label: "Option 6" },
                ],
              },
            ],
          },
        ],
      }}
    >
      {children}
    </LayoutWithHeader>
  );
};
export default Layout;
