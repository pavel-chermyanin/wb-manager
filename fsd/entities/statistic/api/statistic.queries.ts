import {useQuery} from "@tanstack/react-query";
import {getIncomes, getOrders, getStocks} from "./statistic.actions";
import {Incom, Order, Stock} from "../model/statistic.types";

export const useGetIncomesQueries = (date: string) => {
  return useQuery({
    queryKey: ['incomes', date],
    queryFn: () => getIncomes(date),
    select: data => data as Incom[],
  })
}

export const useGetStocksQueries = (date: string) => {
  return useQuery({
    queryKey: ['stocks', date],
    queryFn: () => getStocks(date),
    select: data => data as Stock[],
  })
}
export const useGetOrdersQueries = (date: string, flag: number) => {
  return useQuery({
    queryKey: ['orders', date, flag],
    queryFn: () => getOrders(date, flag),
    select: data => data as Order[],
  })
}
