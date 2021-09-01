import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const TableComponent = styled.table`
  border-spacing: 0;
  border: 1px solid black;
`;
const TableRow = styled.tr`
  &:last-child {
    td {
      border-bottom: 0;
    }
  }
`;
const TableHead = styled.th`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:last-child {
    border-right: 0;
  }
`;
const TableData = styled.th`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  &:last-child {
    border-right: 0;
  }
`;

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableComponent {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHead {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableData>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </TableComponent>
  );
}
