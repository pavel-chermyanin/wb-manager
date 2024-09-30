
export type Incom = {
  incomeId: number
  number: string
  date: string
  lastChangeDate: string
  supplierArticle: string
  techSize: string
  barcode: string
  quantity: number
  totalPrice: number
  dateClose: string
  warehouseName: string
  nmId: number
  status: string
}
export type Stock = {
  lastChangeDate: string
  warehouseName: string
  supplierArticle: string
  nmId: number
  barcode: string
  quantity: number
  inWayToClient: number
  inWayFromClient: number
  quantityFull: number
  category: string
  subject: string
  brand: string
  techSize: string
  Price: number
  Discount: number
  isSupply: boolean
  isRealization: boolean
  SCCode: string
}

export type Order = {
  date:string
  lastChangeDate: string
  warehouseName: string
  warehouseType: string
  countryName: string
  oblastOkrugName: string
  regionName: string
  supplierArticle: string
  nmId: number
  barcode: string
  category: string
  subject: string
  brand: string
  techSize: string
  incomeID: string
  isSupply: boolean
  isRealization: boolean
  totalPrice: number
  discountPercent: number
  spp: number
  finishedPrice: number
  priceWithDisc: number
  isCancel: boolean
  cancelDate: string
  orderType: string
  sticker: string
  gNumber: string
  srid: string
}

