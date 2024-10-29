export const isStringValid = (strs) => {
  for (const s of strs) {
    console.log(s);

    if (!s || s.trim() === "") {
      return false;
    }
  }

  return true;
};
export const getFormattedPhoneNumber = (number) => {
  number = number.replace("+91", "");
  let num = "";
  for (const n of number) {
    if (n === "(" || n === ")" || n === " " || n === "-") {
      continue;
    }
    num = num + n;
  }
  return num;
};
