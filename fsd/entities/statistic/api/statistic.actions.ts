import {wbApiClient} from "@/fsd/shared/config/wb-api-client";
import {StatisticPaths, STATISTICS_BASE_URL} from "../statistic.paths";


export const getIncomes = async (date: string) => {
  const response =
    await wbApiClient.get(`${STATISTICS_BASE_URL}${StatisticPaths.INCOMES}${date}`)
  return response.data
}

export const getStocks= async (date: string) => {
  const response =
    await wbApiClient.get(`${STATISTICS_BASE_URL}${StatisticPaths.STOCKS}${date}`)
  return response.data
}
export const getOrders= async (date: string, flag?: number) => {
  const response =
    await wbApiClient.get(`${STATISTICS_BASE_URL}${StatisticPaths.ORDERS}${date}&flag=${flag}`)
  return response.data
}