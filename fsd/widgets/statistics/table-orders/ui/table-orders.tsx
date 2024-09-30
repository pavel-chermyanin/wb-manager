import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import {Order} from "@/fsd/entities/statistic/model/statistic.types";
import moment from "moment";

export const TableOrders = ({data}: { data: Order[] }) => {
  return (
    <Table
      height={600}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={100} align="center" fixed>
        <HeaderCell>Дата</HeaderCell>
        <Cell dataKey="date">
          {rowData => (
            <p>{moment(rowData.children).format("MMM Do YY")}</p>
          )}
        </Cell>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Дата изменения</HeaderCell>
        <Cell dataKey="lastChangeDate">
          {rowData => (
            <p>{moment(rowData.children).format("MMM Do YY")}</p>
          )}
        </Cell>
      </Column>
      <Column width={250} align="center" >
        <HeaderCell>Артикль</HeaderCell>
        <Cell dataKey="supplierArticle"/>
      </Column>
      <Column width={150} align="center" >
        <HeaderCell>Баркод</HeaderCell>
        <Cell dataKey="barcode"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Общая цена</HeaderCell>
        <Cell dataKey="totalPrice"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Скидка</HeaderCell>
        <Cell dataKey="discountPercent"/>
      </Column>

      <Column width={100} align="center" >
        <HeaderCell>Местоположение</HeaderCell>
        <Cell dataKey="warehouseName"/>
      </Column>


    </Table>
  )
}