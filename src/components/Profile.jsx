import React from "react";
import Layout from "./Layout";

const Profile = (props) => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 4,
          gap: 2,
        }}
      >
        <h6 style={{ padding: 0, margin: 0 }}>Name: {props.name}</h6>
        <p>Email: {props.email}</p>
        <article>Followers:{props.followers}</article>
      </div>
    </Layout>
  );
};

export default Profile;
