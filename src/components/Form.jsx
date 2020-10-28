import React from "react";
import Input from "../components/Input";

const Form = (props) => {
  const {
    value,
    handleValueChange,
    monthlyRate,
    handleMonthlyRateChange,
    months,
    handleMonthsChange,
  } = props;

  return (
    <>
      <Input
        label={"Starting Capital"}
        name={"startingCapital"}
        value={value}
        onChange={handleValueChange}
        type="number"
        inputProps={{ step: 100 }}
      />
      <Input
        label={"Monthly Rate"}
        name={"monthlyRate"}
        value={monthlyRate}
        onChange={handleMonthlyRateChange}
        type="number"
        inputProps={{ step: 0.1 }}
      />
      <Input
        label={"Months"}
        name={"months"}
        value={months}
        onChange={handleMonthsChange}
        type="number"
      />
    </>
  );
};

export default Form;
