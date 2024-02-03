import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);
  if (isLoading) {
    return <div>LOADING...</div>;
  }
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <User key={user.id} avatar_url={user.avatar_url} login={user.login} />
        ))}
      </div>
    </section>
  );
};

export default Users;
