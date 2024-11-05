// pages/menu.js
import Menu from "@/app/example/menu";

import {fetchMenuItems} from "@/app/example/fetchMenuItems";

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
