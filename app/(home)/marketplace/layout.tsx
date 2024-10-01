
import React from "react";
import {SidebarMarketplace} from "@/fsd/widgets/marketplace/sidebar";



export default function MarketplaceLayout(
  {
    children,

  }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={'flex gap-4 w-full'}>
      <SidebarMarketplace/>
      {children}
    </div>
  );
}
