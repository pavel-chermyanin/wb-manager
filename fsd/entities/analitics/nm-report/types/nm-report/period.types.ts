import {Conversions} from "./conversions.types";

export type Period = {
  begin:string
  end:string
  openCardCount:number
  addToCartCount:number
  ordersCount:number
  ordersSumRub:number
  buyoutsCount:number
  buyoutsSumRub:number
  cancelCount:number
  cancelSumRub:number
  avgPriceRub:number
  avgOrdersCountPerDay:number
  conversions:Conversions
}