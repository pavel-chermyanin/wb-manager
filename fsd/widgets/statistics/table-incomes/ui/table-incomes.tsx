import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import {Incom} from "@/fsd/entities/statistic/model/statistic.types";
import moment from "moment";

export const TableIncomes = ({data}: { data: Incom[] }) => {
  return (
    <Table
      height={600}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={100} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="incomeId"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Дата изменения</HeaderCell>
        <Cell>
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
        <HeaderCell>Кол-во</HeaderCell>
        <Cell dataKey="quantity"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Общая цена</HeaderCell>
        <Cell dataKey="totalPrice"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Дата закрытия</HeaderCell>
        <Cell>
          {rowData => (
            <p>{moment(rowData.children).format("MMM Do YY")}</p>
          )}
        </Cell>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Местоположение</HeaderCell>
        <Cell dataKey="warehouseName"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Статус</HeaderCell>
        <Cell dataKey="status"/>
      </Column>



    </Table>
  )
}