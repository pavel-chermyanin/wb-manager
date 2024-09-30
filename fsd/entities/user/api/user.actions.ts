import {statisticsClient} from "@/fsd/shared/config/statistics-client";
import {UserPaths} from "../user.paths";


export const me = async () => {
  const response = await statisticsClient.get(UserPaths.ME)
  return response.data
}