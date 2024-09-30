import {Header as HeaderRsuite} from "rsuite";
import {Logo} from "@/fsd/shared/ui/logo/Logo";
import {Navbar} from "./nav/nav";
import styles from './header.module.scss'
import {UserInfo} from "@/fsd/widgets/header/ui/user-info/user-info";
import {LogoutBtn} from "@/fsd/features/logout-btn/ui/logout-btn";


export const Header = () => {
  return (
    <HeaderRsuite className={`${styles.header}`}>
      <div className={styles.logo_wrapper}>
        <Logo/>
        <p className={styles.logo_text}>WB MANAGER</p>
      </div>
      <Navbar/>
      <UserInfo/>
      <LogoutBtn/>
    </HeaderRsuite>
  )
}