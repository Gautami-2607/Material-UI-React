import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


function DataTable() {
  return (
    <div style={{ height: 400, width: 800}
    }>
      <b>
      <DataGrid
        cellClassName = "cell"
        sx = {{m:2}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5, color: "primary" },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </b>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CssBaseline />
        <ButtonGroup variant="contained" size = "large">
        <Button onClick={()=>alert('Add new element')}
          startIcon={<AddCircleOutlineIcon />}
          href="#" 
          color="primary">
            Add
          </Button>
          <br></br>
          <Button onClick={()=>alert('Delete new element')}
          startIcon={<RemoveCircleOutlineIcon />}
          href="#" 
          color="secondary">
            Delete
          </Button>
        </ButtonGroup>
        <br></br>
        <DataTable color="primary"/>
      </header>
    </div>
  );
}

export default App;