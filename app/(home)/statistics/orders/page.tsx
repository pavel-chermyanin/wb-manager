'use client';
import React, { useState, useEffect, useRef } from "react";
import {TableOrders} from "@/fsd/widgets/statistics/table-orders";
import {useGetOrdersQueries} from "@/fsd/entities/statistic/api/statistic.queries";
import {flag} from "arg";



export default function OrdersPage() {
  const {data} = useGetOrdersQueries('2024-06-20',1)

  return (
    <div>
      Фильтры
      <TableOrders data={data!}/>
    </div>
  );
}
