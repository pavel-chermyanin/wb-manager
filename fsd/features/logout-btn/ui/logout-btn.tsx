'use client'

import {Button} from "rsuite";
import ExitIcon from '@rsuite/icons/Exit';
import {useUserActions} from "@/fsd/entities/user";
import {ACCESS_TOKEN} from "@/fsd/core/global.constants";
import {useRouter} from "next/navigation";

import styles from './logout-btn.module.scss'
export const LogoutBtn = ({className}: { className?: string }) => {
  const {setUser} = useUserActions()
  const {push} = useRouter()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem(ACCESS_TOKEN)
    push('/auth')
  }
  return (
    <Button
      onClick={handleLogout}
      className={styles.logout_btn}
      endIcon={<ExitIcon/>}
    >
      Выйти из системы
    </Button>
  )
}