
export type Mode = 'asc' | 'desc'


export type PeriodRequest = {
  begin: string
  end: string
}

export type OrderBy = {
  field: FieldOrderBy
  mode: Mode
}

export type FieldOrderBy =
  | 'openCard' // по открытию карточки (переход на страницу товара)
  | 'addToCart' // по добавлениям в корзину
  | 'orders' // по кол-ву заказов
  | 'avgRubPrice' // по средней цене в рублях
  | 'ordersSumRub' // по сумме заказов в рублях
  | 'stockMpQty' // по кол-ву остатков маркетплейса шт.
  | 'stockWbQty' // по кол-ву остатков на складе шт.
  | 'cancelSumRub' // сумме возвратов в рублях
  | 'cancelCount' // по кол-ву возвратов
  | 'buyoutCount' // по кол-ву выкупов
  | 'buyoutSumRub' // по сумме выкупов



