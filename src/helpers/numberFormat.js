const formatterValue = (value) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};

const formatterPercentage = (percentage) => {
  return `${percentage}%`;
};

export { formatterValue, formatterPercentage };
