
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
];

const rows = [
 { id: 1, name: 'VINISHA', age: 21 },
  { id: 2, name: 'BARKHA', age: 12   },
  { id: 4, name: 'AYUSH', age: 23  },
  { id: 5, name: 'BINAY', age: 26 },
  { id: 6, name: 'RISHAV', age: 15  },
  { id: 7, name: 'NIDHI', age: 22  },
  { id: 8, name: 'NEHA', age: 14  },
  { id: 9, name: 'AROHI', age: 34  },
  { id: 10, name: 'KARTIK', age: 34  },
  { id: 11, name: 'ANJALI', age: 30  },
  { id: 12, name: 'KIRTI', age: 29  },
  { id: 13, name: 'SUMIT KUMAR', age: 30  },
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
