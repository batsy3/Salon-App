import React from "react";
import { GetStaticProps } from "next";
import { ICategory } from "../interfaces/supplies.interface";
import { db } from "../firestore";
import { SuppliesComponent } from "../components/supplies/page";
import { Breadcrumbs } from "@mui/material";
import { Input } from "@nextui-org/react";
import DropdownTrigger from "@nextui-org/react/types/dropdown/dropdown-trigger";
import Link from "next/link";
import { Dropdown, Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Crumb, CrumbLink } from "../components/breadcrumb/breadcrumb.styled";
import { ExportIcon } from "../components/icons/accounts/export-icon";
import { HouseIcon } from "../components/icons/breadcrumb/house-icon";
import { UsersIcon } from "../components/icons/breadcrumb/users-icon";
import { Flex } from "../components/styles/flex";
import { AddUser } from "../components/supplies/add-user";
import { TableWrapper } from "../components/table/table";

// export default function Supplies ({ categories }: { categories:ICategory[] }) {
//   return <SuppliesComponent categories={categories} />;
// };

export default function Supplies({ categories }: { categories: ICategory[] }) {
  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <Breadcrumbs>
        <Crumb>
          <HouseIcon />
          <Link href={"/"}>
            <CrumbLink href="/">Home</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <UsersIcon />
          <CrumbLink href="/supplies">Supplies</CrumbLink>
          <Text>/</Text>
        </Crumb>
        {/* <Crumb>
               <CrumbLink href="#">List</CrumbLink>
            </Crumb> */}
      </Breadcrumbs>

      <Text h3>Inventory</Text>
      <Flex
        //   css={{gap: '$8'}}
        align={"center"}
        justify={"between"}
        wrap={"wrap"}
      >
        <Flex
          css={{
            gap: "$6",
            flexWrap: "wrap",
            "@sm": { flexWrap: "nowrap" },
            marginBottom: 15,
          }}
          align={"center"}
        >
          <Input
            css={{ width: "100%", maxW: "410px" }}
            placeholder="Search users"
          />
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Filter</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              {/* {categories?.map((item, index) => (
                <DropdownItem key={index}>{item.name}</DropdownItem>
              ))} */}
            </DropdownMenu>
          </Dropdown>
        </Flex>
        <Flex direction={"row"} css={{ gap: "$6" }} wrap={"wrap"}>
          <AddUser />
          <Button auto iconRight={<ExportIcon />}>
            Export to CSV
          </Button>
        </Flex>
      </Flex>

      <TableWrapper />
    </Flex>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await db.collection("Category").get();
  console.log(res);
  return {
    props: {
      categories: res.docs,
    },
  };
};
