'use client';
import React, {useState, useEffect, useRef} from "react";
import {useGetStocksQueries} from "@/fsd/entities/statistic";
import {TableStocks} from "@/fsd/widgets/statistics/table-stocks";
import {Loader} from "rsuite";


export default function StocksPage() {
  const {data, isFetching} = useGetStocksQueries('2019-06-20')


  if (isFetching) {
    return <Loader/>
  }
  return (
    <div>
      Фильтры
      <TableStocks data={data!}/>
    </div>
  );
}
