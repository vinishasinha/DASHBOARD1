// src/pages/Tables.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
];

const rows = [
  { id: 1, name: 'ANJALI', age: 20 },
  { id: 2, name: 'MAYANK', age: 21   },
  // Add more rows as needed
];

const Tables = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Tables</h1>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default Tables;
