export const convertMoney = (string) => {
  string = Number(string);
  string = string?.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
  return string;
};
