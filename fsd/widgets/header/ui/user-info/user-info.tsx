'use client'
import styles from './user-info.module.scss'
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import {useUserActions} from "@/fsd/entities/user";
import {ACCESS_TOKEN} from "@/fsd/core/global.constants";
import {usePathname, useRouter} from "next/navigation";
import {Routing} from "@/fsd/shared/config/routing";
import cl from "classnames";

export const UserInfo = () => {
  // const {user} = useUserActions()
  const pathname = usePathname();
  const userName = localStorage.getItem(ACCESS_TOKEN);
  const {push} = useRouter()
  return (
    <div
      onClick={() => push(Routing.PROFILE)}
      className={cl(styles.user_info,{
        [styles.active]: pathname.includes(Routing.PROFILE)
      })}
      // className={`flex items-center gap-2 text-white ml-auto cursor-pointer`}
    >
      <UserBadgeIcon width={30} height={30} />
      {/*<p>{user?.username}</p>*/}
      <p>{userName}</p>
    </div>
  )
}