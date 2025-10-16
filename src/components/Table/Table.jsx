import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Lasania Chiken Fri', 15925888, "2 March 2025", "Approved"),
  createData('Lasania Chiken Fri', 15925888, "2 March 2025", "Pending"),
  createData('Lasania Chiken Fri', 15925888, "2 March 2025", "Approved"),
  createData('Lasania Chiken Fri', 15925888, "2 March 2025", "Approved"),
  createData('Lasania Chiken Fri', 15925888, "2 March 2025", "Delivered"),
];

function statusStyle(status){
    if(status === "Approved"){
      return {
        background: "#fff",
        color: "green",
        } 
    }
    else if(status === "Pending") {
        return{
            background: "#ffadad8f",
            color: "red",
        }
    }
    else {
        return{
            background: "#009bfcff",
            color: "white",
        }
    }
}

export default function BasicTable() {
  return (
    <div className="table">
        <h2>Recent Products</h2>
        <TableContainer component={Paper}
            style={{boxShadow: "0px 13px 20px 10px #80808029"}}
        >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={statusStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
