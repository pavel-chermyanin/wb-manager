import {Table} from "rsuite";
import {Cell, Column, HeaderCell} from "rsuite-table";
import moment from "moment";
import {NmReport} from "@/fsd/entities/analitics/nm-report";

export const TableNmReport = ({data}: { data: NmReport[] }) => {
  // console.log(data)
  return (
    <Table
      height={600}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >

      <Column width={100} align="center" fixed>
        <HeaderCell>nmID</HeaderCell>
        <Cell dataKey="nmID"/>
      </Column>

      <Column width={250} align="center">
        <HeaderCell>Бренд</HeaderCell>
        <Cell dataKey="brandName"/>
      </Column>
      <Column width={150} align="center">
        <HeaderCell>vendorCode</HeaderCell>
        <Cell dataKey="vendorCode"/>
      </Column>
      <Column width={150} align="center">
        <HeaderCell>Бренд</HeaderCell>
        <Cell dataKey="brandName"/>
      </Column>


    </Table>
  )
}