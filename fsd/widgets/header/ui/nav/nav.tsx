'use client'

import React, {useEffect, useState} from "react";
import {Message, Nav} from "rsuite";
import {useRouter, usePathname} from "next/navigation";
import {Routing} from "@/fsd/shared/config/routing";
import {useUserActions, useUserMeQueries} from "@/fsd/entities/user";
import {getErrorMessage} from "@/fsd/shared/types/get-error-message.type-guard";
import styles from './nav.module.scss'
import cl from 'classnames'

export const Navbar: React.FC = () => {
  const pathname = usePathname(); // Получаем текущий путь
  const {push, prefetch} = useRouter();
  // const {data, isSuccess, error} = useUserMeQueries()
  // const {setUser} = useUserActions()
  const [active, setActive] = useState<string>(pathname); // Инициализация активного элемента

  // useEffect(() => {
  //   if (isSuccess) {
  //     setUser(data)
  //   }
  // }, [isSuccess]);

  // // Предзагрузка маршрутов при загрузке приложения
  // useEffect(() => {
  //   prefetch(Routing.HOME);    // Предзагрузка главной страницы
  //   prefetch(Routing.REPORTS); // Предзагрузка страницы отчетов
  // }, [prefetch]);

  // Устанавливаем активный элемент при монтировании компонента
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  // Функция для обработки выбора элемента
  const handleSelect = (eventKey: string) => {
    push(eventKey); // Изменение URL
  };

  // const message = error ? (
  //   <div style={{position: 'absolute', zIndex:1000}}>
  //     <Message showIcon type={'error'} closable>
  //       <strong>{getErrorMessage(error)}</strong>
  //     </Message>
  //   </div>
  // ) : null;

  return (
    <>
      {/*{message}*/}
      <Nav className={styles.nav} activeKey={active} onSelect={handleSelect}>
        <Nav.Item
          className={cl(styles.nav_item,{
            [styles.active]: pathname === Routing.HOME
          })}
          eventKey={Routing.HOME}
        >Главная
        </Nav.Item>
        <Nav.Item
          className={cl(styles.nav_item,{
            [styles.active]: pathname.includes(Routing.STATISTICS)
          })}
          eventKey={Routing.STATISTICS}
        >
          Статистика
        </Nav.Item>
        <Nav.Item
          className={cl(styles.nav_item,{
            [styles.active]: pathname.includes(Routing.ANALITICS)
          })}
          eventKey={Routing.ANALITICS}
        >
          Аналитика
        </Nav.Item>
      </Nav>
    </>
  );
};
