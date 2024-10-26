export const isStringValid = (strs) => {
  for (const s of strs) {
    console.log(s);

    if (!s || s.trim() === "") {
      return false;
    }
  }

  return true;
};
