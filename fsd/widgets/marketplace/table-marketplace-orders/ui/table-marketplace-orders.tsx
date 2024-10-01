import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import moment from "moment";
import {Order} from "@/fsd/entities/marketplace/order";

export const TableMarketplaceOrders = ({data}: { data: Order[] }) => {
  return (
    <Table
      height={600}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={150} align="center" fixed>
        <HeaderCell>Дата создания</HeaderCell>
        <Cell dataKey="createdAt">
          {rowData => (
            <p>{moment(rowData.children).format("MMM Do YY")}</p>
          )}
        </Cell>
      </Column>

      <Column width={250} align="center" >
        <HeaderCell>Id Заказа</HeaderCell>
        <Cell dataKey="orderUid"/>
      </Column>
      <Column width={150} align="center" >
        <HeaderCell>Артикль</HeaderCell>
        <Cell dataKey="article"/>
      </Column>
      <Column width={150} align="center" >
        <HeaderCell>Цена</HeaderCell>
        <Cell dataKey="price"/>
      </Column>
      <Column width={150} align="center" >
        <HeaderCell>Тип доставки</HeaderCell>
        <Cell dataKey="deliveryType"/>
      </Column>




    </Table>
  )
}