'use client';
import React, { useState, useEffect, useRef } from "react";
import {TableIncomes} from "@/fsd/widgets/statistics/table-incomes";
import {useGetIncomesQueries} from "@/fsd/entities/statistic";



export default function IncomesPage() {
  const {data} = useGetIncomesQueries('2019-06-20')


  return (
    <div>
      Фильтры
      <TableIncomes data={data!}/>
    </div>
  );
}
