'use client'

import UserBadgeIcon from '@rsuite/icons/UserBadge';
import {useUserActions} from "@/fsd/entities/user";
import {ACCESS_TOKEN} from "@/fsd/core/global.constants";
import {useRouter} from "next/navigation";
import {Routing} from "@/fsd/shared/config/routing";

export const UserInfo = () => {
  // const {user} = useUserActions()
  const userName = localStorage.getItem(ACCESS_TOKEN);
  const {push} = useRouter()
  return (
    <div
      onClick={() => push(Routing.PROFILE)}
      className={`flex items-center gap-2 text-white ml-auto cursor-pointer`}
    >
      <UserBadgeIcon width={30} height={30} />
      {/*<p>{user?.username}</p>*/}
      <p>{userName}</p>
    </div>
  )
}