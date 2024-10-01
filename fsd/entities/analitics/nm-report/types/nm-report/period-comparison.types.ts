import {Conversions} from "./conversions.types";

export type PeriodComparison = {
  openCardDynamics:number
  addToCartDynamics:number
  ordersCountDynamics:number
  ordersSumRubDynamics:number
  buyoutsCountDynamics:number
  buyoutsSumRubDynamics:number
  cancelCountDynamics:number
  cancelSumRubDynamics:number
  avgOrdersCountPerDayDynamics:number
  avgPriceRubDynamics:number
  conversions:Conversions
}