import jwt from "jsonwebtoken";

export const isFieldEmpty = (field) => {
  if (field && field.trim() !== "") {
    return false;
  }
  return true;
  //   return field && field.trim() !== "";
};

export const generateToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

export const verifyToken = (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        res(result);
      }
    });
  });
};
