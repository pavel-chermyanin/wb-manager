'use client';
import React, {useState, useEffect, useRef} from "react";

import {TableMarketplaceOrders} from "@/fsd/widgets/marketplace/table-marketplace-orders";
import {useGetOrdersQueries} from "@/fsd/entities/marketplace/order";
import {Loader} from "rsuite";


export default function OrdersPage() {
  const requestParams = {
    limit: 20,
    next: 1
  }
  const {data, isFetching,isSuccess} = useGetOrdersQueries(requestParams)

  if (isFetching) {
    return <Loader/>
  }

  return (
    <div className={'grow'}>
      Фильтры
      <hr/>
      {isSuccess && <TableMarketplaceOrders data={data?.orders!}/>}
      <p>Полей много, пока вывожу только эти</p>
    </div>
  );
}
