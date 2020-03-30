import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  addIconTr: {
    minHeight: "150px"
  },
  addIcon: {
    left: "0%",
    right: "0%",
    top: "12.5%",
    bottom: "12.5%",
    background: "#ffffff",
    cursor: "pointer"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <div>
            {" "}
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Projects</TableCell>
                    <TableCell align="left">Program</TableCell>
                    <TableCell align="left">Created</TableCell>
                    <TableCell align="left">Last Modified</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <Link>{row.name}</Link>
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                      <TableCell align="left">
                        {" "}
                        <Link>Share</Link> &nbsp; | &nbsp;<Link>Edit</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes.addIconTr}>
            {" "}
            <AddCircleOutlineIcon
              className={classes.addIcon}
            ></AddCircleOutlineIcon>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
