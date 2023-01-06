export const convertMoney = (string) => {
  string = Number(string);
  string = string?.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "EUR",
  });
  return string;
};