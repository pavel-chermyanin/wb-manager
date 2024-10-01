'use client';
import React, {useState, useEffect, useRef} from "react";
import {FieldOrderBy, Mode} from "@/fsd/entities/analitics/nm-report/types/nm-report-common.types";
import {useNMReportDetailMutation} from "@/fsd/entities/analitics/nm-report/nm-report.mutations";
import {TableNmReport} from "@/fsd/widgets/analitics/table-nm-report";
import {NmReportResponse} from "@/fsd/entities/analitics/nm-report";
import {Loader} from "rsuite";


export default function NmReportPage() {
  const request = {
    "brandNames": [],
    "objectIDs": [],
    "tagIDs": [],
    "nmIDs": [],
    "timezone": "Europe/Moscow",
    "period": {
      "begin": "2023-12-01 20:05:32",
      "end": "2024-09-01 20:05:32"
    },
    "orderBy": {
      "field": "ordersSumRub" as FieldOrderBy,
      "mode": "asc" as Mode
    },
    "page": 1
  }
  const {mutate, data, isSuccess, isPending} = useNMReportDetailMutation()

  useEffect(() => {
    mutate(request)
  }, []);

  if (isPending) {
    return <Loader/>
  }
  console.log(data)
  return (
    <div className={'grow'}>
      Фильтры
      <hr/>
      <p className={'mb-10'}>
        Получение статистики КТ за выбранный период, по nmID/предметам/брендам/тегам.
      </p>
      {isSuccess && (
        <>
          <TableNmReport data={(data as NmReportResponse).cards}/>
          <p>Объекты большие вывожу только три поля пока</p>
        </>
      )}
    </div>
  );
}
