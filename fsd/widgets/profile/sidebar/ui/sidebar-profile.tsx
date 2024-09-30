'use client';

import { Nav, Sidenav } from "rsuite";
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {Routing} from "@/fsd/shared/config/routing";
import {AnaliticsRouting} from "@/fsd/widgets/analitics/sidebar/analitics.routing";
import cl from "classnames";
import styles from './sidebar-profile.module.scss'
import {ProfileRouting} from "@/fsd/widgets/profile/sidebar";

export const SidebarProfile = () => {
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
                [styles.active]: pathname === `${Routing.PROFILE}${ProfileRouting.PROFILE}`
              })}
              eventKey={`${Routing.PROFILE}/${ProfileRouting.PROFILE}`}
              icon={<DashboardIcon />}
            >
              Профиль
            </Nav.Item>
            <Nav.Item
              className={cl(styles.nav_item,{
                [styles.active]: pathname === `${Routing.PROFILE}${ProfileRouting.WBAPIKey}`
              })}
              eventKey={`${Routing.PROFILE}/${ProfileRouting.WBAPIKey}`}
              icon={<DashboardIcon />}
            >
              WBAPI Key
            </Nav.Item>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
