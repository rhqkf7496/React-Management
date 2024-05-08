import React, { Component } from "react";
import Customer from './components/Customer';
import './App.css';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/material/styles";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/2/200',
    'name': '고범석',
    'birthday': '971013',
    'gender': '남자',
    'job': '직장인'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/123/200',
    'name': '고범석2',
    'birthday': '971111',
    'gender': '여자',
    'job': '학생'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/168/200',
    'name': '고범석3',
    'birthday': '970101',
    'gender': '남자',
    'job': '주부'
  }
]

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);