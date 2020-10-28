import {
  Container,
  Paper,
  TableContainer,
  Typography,
} from "@material-ui/core";
import React from "react";
import InterestCalculatorBody from "./InterestCalculatorBody";

const InterestCalculator = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <TableContainer component={Paper}>
        <Typography variant={"h1"} align={"center"} color={"primary"}>
          Interest Calculator
        </Typography>
        <InterestCalculatorBody />
      </TableContainer>
    </Container>
  );
};

export default InterestCalculator;
