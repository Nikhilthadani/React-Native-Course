import React from "react";

const User = ({ avatar_url, login }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "300px",
        padding: "10px",
        margin: 10,
        border: "1px solid cadetblue",
        borderRadius: 10,
      }}
    >
      <img
        style={{ width: "80%", borderRadius: "10px" }}
        src={avatar_url}
        alt={login}
      />
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{login}</p>
    </div>
  );
};

export default User;
