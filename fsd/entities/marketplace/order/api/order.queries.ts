import {useQuery} from "@tanstack/react-query";
import {OrderRequest} from "../types/order-request.types";
import {Order} from "../types/order.types";
import {getOrders} from "./order.actions";

export const useGetOrdersQueries = (params: OrderRequest) => {
  return useQuery({
    queryKey: ['orders', params],
    queryFn: () => getOrders(params),
    select: data => data as { next: number, orders: Order[] },
  })
}