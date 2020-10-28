import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { formatterValue, formatterPercentage } from "../helpers/numberFormat";

const useStyles = makeStyles((theme) => ({
  negativeValue: {
    color: "red",
  },
  positiveValue: {
    color: "green",
  },
}));

const Installment = ({ installment, index }) => {
  const classes = useStyles();

  return (
    <TableRow>
      {/* <TableRow key={row.name}> */}
      <TableCell component="th" scope="row">
        {index}
      </TableCell>
      <TableCell
        className={
          installment.rate >= 0 ? classes.positiveValue : classes.negativeValue
        }
        align="right"
      >
        {formatterValue(installment.newValue)}
      </TableCell>
      <TableCell
        className={
          installment.rate >= 0 ? classes.positiveValue : classes.negativeValue
        }
        align="right"
      >
        {formatterValue(installment.rate)}
      </TableCell>
      <TableCell
        className={
          installment.rate >= 0 ? classes.positiveValue : classes.negativeValue
        }
        align="right"
      >
        {formatterPercentage(installment.percentage)}
      </TableCell>
    </TableRow>
  );
};

export default Installment;
