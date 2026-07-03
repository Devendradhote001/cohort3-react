import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "Cheel",
    email: "cheel@gmail.com",
    password: "123123123",
    image: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
        <input
          value={formData.name}
          required
          name="name"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Name"
        />
        <input
          value={formData.email}
          required
          name="email"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          value={formData.password}
          required
          name="password"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="password"
          placeholder="Password"
        />
        <input
          value={formData.image}
          required
          name="image"
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded"
          type="url"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-600 cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
