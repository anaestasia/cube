import React from "react";
import DataTable from "react-data-table-component";

export default function Table({titre, data , columns}) {

  return (
    <DataTable
        title={titre}
        columns={columns}
        data={data}
        pagination
    />
    );
}