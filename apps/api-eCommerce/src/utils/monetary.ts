export const convertNumberWithDecimals = (str: string) => {
  var re = /\b(\d+)(\d{2})\b/;
  var subst = "$1.$2";
  var result = str.replace(re, subst);
  return result;
};

export const addDot = (str: number | string) => {
  let convertedStr = str.toString();
  if (convertedStr.includes(".")) return +str;
  convertedStr =
    convertedStr.substring(0, convertedStr.length - 2) +
    "." +
    convertedStr.substring(convertedStr.length - 2);
  console.log(convertedStr);
  return +convertedStr;
};
