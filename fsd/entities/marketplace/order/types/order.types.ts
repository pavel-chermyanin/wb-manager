
export type Order = {
  address: Address;
  scanPrice: number;
  deliveryType: DeliveryType;
  supplyId: string;
  orderUid: string;
  article: string;
  colorCode: string;
  rid: string;
  createdAt: string;
  offices: string[];
  skus: string[];
  id: number;
  warehouseId: number;
  nmId: number;
  chrtId: number;
  price: number;
  convertedPrice: number;
  currencyCode: number;
  convertedCurrencyCode: number;
  cargoType: number;
  isZeroOrder: boolean;
}

type Address = {
  fullAddress:string
  longitude:number
  latitude:number
}

type DeliveryType =
  'fbs' // доставка на склад Wildberries
  | 'dbs' // доставка силами продавца
  | 'wbgo' // доставка курьером WB
  | 'edbs' // экспресс-доставка силами продавца