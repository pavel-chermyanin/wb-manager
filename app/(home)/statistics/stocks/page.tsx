'use client';
import React, { useState, useEffect, useRef } from "react";
import {useGetStocksQueries} from "@/fsd/entities/statistic";
import {TableStocks} from "@/fsd/widgets/statistics/table-stocks";



export default function StocksPage() {
  const {data} = useGetStocksQueries('2019-06-20')

  return (
    <div>
      Фильтры
      <TableStocks data={data!}/>
    </div>
  );
}
