import { Table, TableBody, TableContainer, Paper } from "@material-ui/core";
import React from "react";
import Installment from "./Installment";
import TableHeader from "./TableHeader";

const Installments = ({ installments }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHeader />
          <TableBody>
            {installments.map((installment, index) => (
              <Installment
                installment={installment}
                index={index + 1}
                key={index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Installments;
