import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MENU",
    items: [
      { href: "/dashboard", icon: "dashboard", title: "Dashboard" },
      { href: "/trending-videos", icon: "TrendingUp", title: "Trending Videos" },
      { href: "/ideas-generator", icon: "ideas", title: "Ideas Generator" },
      { href: "/title-generator", icon: "title", title: "Title Generator" },
      { href: "/description-generator", icon: "description", title: "Description Generator" },
      { href: "/script-generator", icon: "paper", title: "Script Generator" },
      { href: "/tags-generator", icon: "hash", title: "Tags Generator" },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      {
        href: "/dashboard/billing",
        icon: "billing",
        title: "Billing",
        authorizeOnly: UserRole.USER,
      },
      { href: "/dashboard/settings", icon: "settings", title: "Settings" },
     
    ],
  },
];
