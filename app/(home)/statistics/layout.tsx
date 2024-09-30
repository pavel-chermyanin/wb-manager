import {SidebarStatistics} from "@/fsd/widgets/statistics/sidebar/ui/sidebar-statistics";
import React from "react";


export default function StatisticsLayout(
  {
    children,

  }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={'flex gap-4 w-full'}>
      <SidebarStatistics/>
      <div className={'grow'}>
        {children}
      </div>
    </div>
  );
}
