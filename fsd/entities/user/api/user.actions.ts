import {wbApiClient} from "@/fsd/shared/config/wb-api-client";
import {UserPaths} from "../user.paths";


export const me = async () => {
  const response = await wbApiClient.get(UserPaths.ME)
  return response.data
}