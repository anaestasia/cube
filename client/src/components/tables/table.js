import React from "react";
import DataTable from "react-data-table-component";

export default function Table({data , columns}) {

  return (
    <DataTable
        columns={columns}
        data={data}
        pagination
    />
    );
}