// pages/menu.js

import { GetMenuQuery } from "@/__generated__/types";
import { fetchMenuItems } from "@/wp-lib/graphql/service/fetch-menu";

export default async function MenuPage() {

  try {
   // const menuItems = await fetchMenu("PRIMARY");
    const menuItems: GetMenuQuery["menuItems"]["nodes"]= await fetchMenuItems("PRIMARY");
  
    return (
      <div>
        <h1>GraphQL Data</h1>
        <nav>
      <ul>
      {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <a href={menuItem.url} title={menuItem.title} dangerouslySetInnerHTML={{ __html: menuItem.label }} />
            {menuItem.childItems?.nodes.length > 0 && (
              <ul>
                {menuItem.childItems.nodes.map((childItem) => (
                  <li key={childItem.id}>
                    <a href={childItem.url} title={childItem.title} dangerouslySetInnerHTML={{ __html: childItem.label }} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

};

