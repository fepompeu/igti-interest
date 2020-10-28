const createPlots = (value, monthlyRate, months) => {
  const monthlyInterest = [];
  for (let i = 1; i <= months; i++) {
    const newValue = (value * Math.pow(1 + monthlyRate / 100, i)).toFixed(2);
    const rate = (newValue - value).toFixed(2);
    let percentage = 0;
    if (parseInt(value) !== 0 && value !== "") {
      percentage = ((newValue / value - 1) * 100).toFixed(2);
    }
    const actualValues = {
      newValue,
      rate,
      percentage,
    };
    monthlyInterest.push(actualValues);
  }
  return monthlyInterest;
};

export default createPlots;
