import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Installments from "../components/Installments";
import createPlots from "../helpers/plots";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "25px",
  },
}));

const InterestCalculatorBody = () => {
  const [installments, setInstallments] = useState([]);
  const [value, setValue] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");
  const [months, setMonths] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const monthlyInterest = createPlots(value, monthlyRate, months);
    setInstallments(monthlyInterest);
  }, [value, monthlyRate, months]);

  const handleValueChange = (event) => {
    if (event.target.value >= 0) {
      setValue(event.target.value);
    }
  };

  const handleMonthlyRateChange = (event) => {
    setMonthlyRate(event.target.value);
  };

  const handleMonthsChange = (event) => {
    if (event.target.value >= 0) {
      setMonths(event.target.value);
    }
  };

  return (
    <>
      <Container className={classes.body}>
        <Form
          value={value}
          handleValueChange={handleValueChange}
          monthlyRate={monthlyRate}
          handleMonthlyRateChange={handleMonthlyRateChange}
          months={months}
          handleMonthsChange={handleMonthsChange}
        />
      </Container>
      <Container className={classes.body}>
        {/* {!!months && <Installments installments={installments} />} */}
        {/* {months ? <Installments installments={installments} /> : null} */}
        {months > 0 ? <Installments installments={installments} /> : <></>}
      </Container>
    </>
  );
};

export default InterestCalculatorBody;
