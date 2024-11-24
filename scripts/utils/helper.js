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

export const activityTextGenerator = (
  expenseFor,
  expenseId,
  amount,
  groupId,
  userIds
) => {
  if (expenseFor === "group") {
    return `Expense with id ${expenseId} added in group id ${groupId}. Amount ${amount}`;
  } else {
    return `Expense with id ${expenseId} is shared with user ids ${userIds[0]} and ${userIds[1]}. Amount ${amount}`;
  }
};
