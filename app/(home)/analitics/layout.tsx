
import React from "react";
import {SidebarAnalitics} from "@/fsd/widgets/analitics/sidebar";



export default function StatisticsLayout(
  {
    children,

  }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={'flex gap-4'}>
      <SidebarAnalitics/>
      {children}
    </div>
  );
}
