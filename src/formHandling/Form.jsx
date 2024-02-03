import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const handleNameChange = (e) => {
    console.log(e.target);
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={inputs.name}
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Form;
