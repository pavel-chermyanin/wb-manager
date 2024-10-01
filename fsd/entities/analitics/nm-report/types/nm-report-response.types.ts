import {NmReport} from "./nm-report/nm-report.types";

type AdditionalError = {
  field:string
  description:string
}

export type NmReportResponse = {
  page:number
  isNextPage:boolean
  cards: NmReport[]
  error:boolean
  errorText:string
  additionalErrors:AdditionalError[]
}