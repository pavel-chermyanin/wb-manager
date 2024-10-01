import {OrderBy, PeriodRequest} from "./nm-report-common.types";

export type NMReportGroupedRequest = {
  brandNames: string[]
  objectIDs: number[]
  tagIDs: number[]
  timezone: string
  period: PeriodRequest
  orderBy: OrderBy
  page: number
}