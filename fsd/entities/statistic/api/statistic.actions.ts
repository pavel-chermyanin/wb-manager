import {statisticsClient} from "@/fsd/shared/config/statistics-client";
import {StatisticPaths} from "../statistic.paths";


export const getIncomes = async (date: string = '2019-06-20') => {
  const response = await statisticsClient.get(`${StatisticPaths.INCOMES}${date}`)
  return response.data
}

export const getStocks= async (date: string = '2019-06-20') => {
  const response = await statisticsClient.get(`${StatisticPaths.STOCKS}${date}`)
  return response.data
}
export const getOrders= async (date: string = '2019-06-20', flag?: number) => {
  const response = await statisticsClient.get(`${StatisticPaths.ORDERS}${date}&flag=${flag}`)
  return response.data
}