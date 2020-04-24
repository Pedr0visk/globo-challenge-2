import React, { useState } from 'react'
import {
  Container,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Checkbox,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { MoreHoriz, Security, Delete, Edit, Archive } from '@material-ui/icons';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import colors from '../assets/colors';

const UsersList = () => {
  // state
  const [selectedRow, setSelectedRow] = useState(null);

  // general styles
  const useStyles = makeStyles({
    tableRow: {
      '&:nth-of-type(odd)': {
        backgroundColor: colors.white_darken_1,
      },
      '&:nth-of-type(1)': {
        boxShadow: 'inset 0 13px 14px -8px rgba(0, 0, 0, .07)',
      },
      backgroundColor: colors.white_darken_2,
    },
    buttonIcon: {
      padding: 4,
    }
  });
  const classes = useStyles();

  // custom table cell
  const StyledTableCell = withStyles(() => ({
    root: {
      padding: '4px',
      borderBottom: 0
    },
    head: {
      padding: '16px 4px',
      fontSize: 13
    }
  }))(TableCell);

  // custom checkbox
  const StyledCheckbox = withStyles(() => ({
    root: {
      color: colors.white_darken_2,
      width: 18,
      height: 18,
      borderRadius: 0,
      padding: 0,
      margin: '0 20px',
      backgroundColor: 'white'
    }
  }))(Checkbox);

  // data for table
  const headCells = [
    { id: 'name', label: 'usuário', width: '8%', align: 'left' },
    { id: 'email', label: 'email', width: '18%', align: 'left' },
    { id: 'created_at', label: 'data de inclusão', width: '13%', align: 'center' },
    { id: 'updated_at', label: 'data de alteração', width: '13%', align: 'center' },
    { id: 'rule', label: 'regras', width: '8%', align: 'center' },
    { id: 'status', label: 'status', width: '8%', align: 'center' },
    { id: '', label: '', width: '10%', align: 'center' },
    { id: 'actions', label: 'Ações', width: '8%', align: 'center' },
  ];

  // create table head
  const tableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell width="8%"></StyledTableCell>
          {headCells.map((headCell) => (
            <StyledTableCell
              width={headCell.width}
              align={headCell.align}
              key={headCell.id}
            >
              {headCell.label.toUpperCase()}
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  // rows
  const createData = (name, email, created_at, updated_at, rule, status) => {
    return { name, email, created_at, updated_at, rule, status };
  }

  const rows = [
    createData('Pedro', 'user1@email.com', '21/02/2019', '21/02/2019', '01', 'ATIVO'),
    createData('Caio', 'user2@email.com', '21/02/2019', '21/02/2019', '02', 'ATIVO'),
    createData('Estela', 'user3@email.com', '21/02/2019', '21/02/2019', '01', 'ATIVO'),
    createData('Maria', 'user4@email.com', '21/02/2019', '21/02/2019', '01', 'ATIVO'),
    createData('Joana', 'user5@email.com', '21/02/2019', '21/02/2019', '01', 'ATIVO'),
  ];

  // actions
  const onSelectCell = ({ email }) => {
    if (selectedRow == email) {
      setSelectedRow(null)
      return;
    }
    setSelectedRow(email)
  }

  return (
    <Container className="py-5" maxWidth="xl">
      <Card>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            {tableHead()}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.email}
                  className={(row.email === selectedRow ? "selectedRow" : classes.tableRow)}
                >
                  <StyledTableCell align="left" width="8%">
                    <StyledCheckbox
                      checked={false}
                      inputProps={{ 'aria-labelledby': '' }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="left" width="8%">
                    {row.name.toUpperCase()}
                  </StyledTableCell>
                  <StyledTableCell align="left" width="18%">{row.email}</StyledTableCell>
                  <StyledTableCell align="center" width="13%">{row.created_at}</StyledTableCell>
                  <StyledTableCell align="center" width="13%">{row.updated_at}</StyledTableCell>
                  <StyledTableCell align="center" width="8%">{row.rule}</StyledTableCell>
                  <StyledTableCell align="center" width="8%">
                    <span className="status-active">
                      {row.status}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell className="selectedCell" align="center" width="10%">
                    {row.email === selectedRow &&
                      (
                        <>
                          <IconButton className={classes.buttonIcon}><Delete /></IconButton>
                          <IconButton className={classes.buttonIcon}><Archive /></IconButton>
                          <IconButton className={classes.buttonIcon}><Security /></IconButton>
                          <IconButton className={classes.buttonIcon}><Edit /></IconButton>
                        </>
                      )
                    }
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    width="8%"
                  >
                    <IconButton onClick={() => onSelectCell(row)}><MoreHoriz /></IconButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <div className="d-flex align-items-center justify-content-around py-5">
        <div className="pagination">
          <span className="step-links">
            <button className="btn btn-pagination mr-2" href="#">Primeiro</button>
            <button className="btn btn-pagination mr-2">Anterior</button>
            <span className="page current mr-2">1</span>
            <button className="btn btn-pagination disabled mr-2" href="#">Próximo</button>
            <button className="btn btn-pagination disabled mr-2">Ultimo</button>
          </span>
        </div>
      </div>
    </Container>
  )
}

export default UsersList;
