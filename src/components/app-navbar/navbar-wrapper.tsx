// components/NavbarWrapper.js
import AppNavBar from "@/components/app-navbar";
import { fetchMenuItems } from "@/wp-lib/graphql/service/fetch-menu"; // adjust path as needed

const NavbarWrapper = async () => {
  const menuItems = await fetchMenuItems("PRIMARY");

  return <AppNavBar menuItems={menuItems} />;
};

export default NavbarWrapper;
