import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import moment from "moment";
import {Stock} from "@/fsd/entities/statistic";

export const TableStocks = ({data}: { data: Stock[] }) => {
  return (
    <Table
      height={600}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={100} align="center" fixed>
        <HeaderCell>Категория</HeaderCell>
        <Cell dataKey="category"/>
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
      <Column width={150} align="center" >
        <HeaderCell>Бренд</HeaderCell>
        <Cell dataKey="brand"/>
      </Column>
      <Column width={150} align="center" >
        <HeaderCell>Предмет</HeaderCell>
        <Cell dataKey="subject"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Кол-во</HeaderCell>
        <Cell dataKey="quantity"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Цена</HeaderCell>
        <Cell dataKey="Price"/>
      </Column>
      <Column width={100} align="center" >
        <HeaderCell>Цена</HeaderCell>
        <Cell dataKey="Discount"/>
      </Column>

      <Column width={150} align="center" >
        <HeaderCell>Местоположение</HeaderCell>
        <Cell dataKey="warehouseName"/>
      </Column>



    </Table>
  )
}