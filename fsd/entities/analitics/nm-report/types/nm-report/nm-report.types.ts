import {Period} from "./period.types";
import {PeriodComparison} from "./period-comparison.types";

type Tag = {
  id: number
  name: string
}

type Object = {
  id: number
  name: string
}

export type NmReport = {
  nmID: number
  brandName: string
  vendorCode:string
  tags: Tag[]
  object: Object
  statistics:{
    selectedPeriod:Period
    previousPeriod:Period
    periodComparison:PeriodComparison
  }
}