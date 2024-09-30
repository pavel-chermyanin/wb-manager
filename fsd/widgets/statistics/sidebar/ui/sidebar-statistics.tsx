'use client';

import {Nav, Sidenav} from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Routing} from "@/fsd/shared/config/routing";
import {StatisticsRouting} from "@/fsd/widgets/statistics/sidebar/statistics.routing";
import styles from "./sidebar.module.scss";
import cl from 'classnames'

export const SidebarStatistics = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const {push} = useRouter();
  const [active, setActive] = useState<string>(pathname); // Инициализация активного элемента

  // Устанавливаем активный элемент при монтировании компонента
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  // Функция для обработки выбора элемента
  const handleSelect = (eventKey: string) => {
    setActive(eventKey); // Обновление активного элемента
    push(eventKey); // Изменение URL
  };

  return (
    <div style={{width: 240}}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey={active} onSelect={handleSelect}>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.STATISTICS}${StatisticsRouting.INCOMES}`
              })}
              eventKey={`${Routing.STATISTICS}${StatisticsRouting.INCOMES}`}
              icon={<DashboardIcon/>}
            >
              Поставки
            </Nav.Item>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname ===`${Routing.STATISTICS}/${StatisticsRouting.STOCKS}`
              })}
              eventKey={`${Routing.STATISTICS}${StatisticsRouting.STOCKS}`}
              icon={<DashboardIcon/>}
            >
              Склад
            </Nav.Item>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.STATISTICS}/${StatisticsRouting.ORDERS}`
              })}
              eventKey={`${Routing.STATISTICS}${StatisticsRouting.ORDERS}`}
              icon={<DashboardIcon/>}
            >
              Заказы
            </Nav.Item>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.STATISTICS}/${StatisticsRouting.SALES}`
              })}
              eventKey={`${Routing.STATISTICS}${StatisticsRouting.SALES}`}
              icon={<DashboardIcon/>}
            >
              Продажи
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
