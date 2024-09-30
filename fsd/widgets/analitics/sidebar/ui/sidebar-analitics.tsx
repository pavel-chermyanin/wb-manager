'use client';

import { Nav, Sidenav } from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {Routing} from "@/fsd/shared/config/routing";
import {AnaliticsRouting} from "@/fsd/widgets/analitics/sidebar/analitics.routing";
import cl from "classnames";
import styles from './sidebar.module.scss'

export const SidebarAnalitics = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const { push } = useRouter();
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
    <div style={{ width: 240 }}>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey={active} onSelect={handleSelect}>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.ANALITICS}${AnaliticsRouting.NM_REPORT}`
              })}
              eventKey={`${Routing.ANALITICS}/${AnaliticsRouting.NM_REPORT}`}
              icon={<DashboardIcon />}
            >
              Воронка продаж
            </Nav.Item>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.ANALITICS}${AnaliticsRouting.WAREHOUSE_REMAINS}`
              })}
              eventKey={`${Routing.ANALITICS}/${AnaliticsRouting.WAREHOUSE_REMAINS}`}
              icon={<DashboardIcon />}
            >
              Отчёт по остаткам на складах
            </Nav.Item>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
