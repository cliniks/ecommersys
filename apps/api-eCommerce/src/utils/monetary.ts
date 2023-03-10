export const convertNumberWithDecimals = (str: string) => {
  var re = /\b(\d+)(\d{2})\b/;
  var subst = "$1.$2";
  var result = str.replace(re, subst);
  return result;
};

export const addDot = (str: number | string) => {
  let convertedStr = verifyOneDot(str);
  if (convertedStr.includes(".")) return +str;
  convertedStr =
    convertedStr.substring(0, convertedStr.length - 2) +
    "." +
    convertedStr.substring(convertedStr.length - 2);
  return +convertedStr;
};

const verifyOneDot = (value: number | string): string => {
  let convertedStr = value.toString();
  if (convertedStr.includes(".")) {
    const convertedStrAdjust = convertedStr.split(".");
    if (convertedStrAdjust[1].length === 2) return value.toString();
    return convertedStrAdjust[0];
  }
  return convertedStr;
};

export const removeDot = (value: string | number) => {
  let convertStr = value.toString();
  if (convertStr.includes(".")) {
    const convertedStrAdjust = convertStr.split(".");
    if (convertedStrAdjust[1].length === 2) return value.toString();
    convertStr = convertedStrAdjust[0];
  }
  return convertStr;
};
