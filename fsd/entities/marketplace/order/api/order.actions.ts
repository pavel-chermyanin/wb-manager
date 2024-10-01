import {wbApiClient} from "@/fsd/shared/config/wb-api-client";
import {ORDER_BASE_URL, OrderPaths} from "../order.paths";
import {OrderRequest} from "../types/order-request.types";

export const getOrders = async (params: OrderRequest) => {
  // Преобразуем объект параметров в строку запроса
  const paramsRequest = new URLSearchParams(
    Object.entries(params).filter(([_, value]) => value !== undefined).map(([key, value]) => [key, value.toString()])
  ).toString();

  // Формируем и отправляем запрос
  const response = await wbApiClient.get(`${ORDER_BASE_URL}${OrderPaths.ORDERS}?${paramsRequest}`);
  return response.data;
};
