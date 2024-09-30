import {SidebarStatistics} from "@/fsd/widgets/statistics/sidebar/ui/sidebar-statistics";
import React from "react";
import {SidebarProfile} from "@/fsd/widgets/profile/sidebar/ui/sidebar-profile";


export default function StatisticsLayout(
  {
    children,

  }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={'flex gap-4'}>
      <SidebarProfile/>
      {children}
    </div>
  );
}
