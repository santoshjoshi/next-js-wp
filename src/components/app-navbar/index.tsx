"use client";

import React from "react";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconPackage } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import AuthButton from "./signin/auth-button";
import { ThemeSwitcher } from "./theme-switcher/theme-switcher";
import { GetMenuQuery } from "@/__generated__/graphql";
import { motion } from "framer-motion";

export default function AppNavbar({ menuItems } : GetMenuQuery) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { status } = useSession();

  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error! {error.message}</p>;
  
   

  const completeMenuItems = [
    ...menuItems,
    ...(status === "authenticated"
      ? [
          { label: "Profile", url: "/profile" },
          { label: "Guestbook", url: "/guestbook" },
          { label: "Posts", url: "/example" },
        ]
      : []),
  ];


  return (
    <>
  
    <Navbar onMenuOpenChange={setIsMenuOpen} className="mx-auto"  maxWidth="full">
      
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IconPackage />
          <p className="font-bold text-inherit">Next.js Starter</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {completeMenuItems.map((item, index) => (
        
          <NavbarItem key={`${item.label}-${index}`}>
            <motion.div
          key={`${item.label}-${index}`}
          initial={{ opacity: 0, y: 20 }} // start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // animate to fully visible and in position
          transition={{ delay: index * 0.1, duration: 0.4 }} // stagger items
          whileHover={{ scale: 1.1 }} // slight scale up on hover
          >
            <Link className="w-full" href={item.url} size="lg">
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
    
            </Link>
            </motion.div>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>
      
      
      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher showLabel />
        </NavbarMenuItem>
        {completeMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.url} size="lg">
              <span dangerouslySetInnerHTML={{ __html: item.label }} />
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
    </>
  );
}