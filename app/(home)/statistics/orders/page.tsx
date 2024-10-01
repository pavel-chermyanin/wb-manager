'use client';
import React, { useState, useEffect, useRef } from "react";
import {TableOrders} from "@/fsd/widgets/statistics/table-orders";
import {useGetOrdersQueries} from "@/fsd/entities/statistic/api/statistic.queries";
import {flag} from "arg";
import {Loader} from "rsuite";



export default function OrdersPage() {
  const {data,isFetching} = useGetOrdersQueries('2024-06-20',1)

  if (isFetching) {
    return <Loader/>
  }
  return (
    <div>
      Фильтры
      <TableOrders data={data!}/>
    </div>
  );
}
