import { makeStyles, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: "#20232a",
  },
  titleRow: {
    color: "white",
    fontWeight: "bold",
  },
}));

function TableHeader() {
  const classes = useStyles();
  return (
    <TableHead className={classes.title}>
      <TableRow>
        <TableCell className={classes.titleRow} align="left">
          Month
        </TableCell>
        <TableCell className={classes.titleRow} align="right">
          Value
        </TableCell>
        <TableCell className={classes.titleRow} align="right">
          Difference
        </TableCell>
        <TableCell className={classes.titleRow} align="right">
          Percentage
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
