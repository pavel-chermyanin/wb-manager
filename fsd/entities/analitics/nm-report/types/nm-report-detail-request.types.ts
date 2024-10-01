import {OrderBy, PeriodRequest} from "./nm-report-common.types";

export type NMReportDetailRequest = {
  brandNames: string[]
  objectIDs: number[]
  tagIDs: number[]
  nmIDs: number[]
  timezone: string
  period: PeriodRequest
  orderBy: OrderBy
}