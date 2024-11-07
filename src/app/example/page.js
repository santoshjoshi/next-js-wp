// pages/menu.js
import Menu from "@/wp-lib/graphql-queries/menu";

import {fetchMenuItems} from "@/wp-lib/graphql-queries/fetchMenuItems";

const MenuPage = async () => {
  const menuItems = await fetchMenuItems();  

  return (
    <div>
      <h1>Main Menu Page</h1>
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default MenuPage;
