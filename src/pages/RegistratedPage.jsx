import React from 'react';

const RegistratedPage = () => {
  return (
    <form>
      <label>
        <p>Name:</p>
        <input
          type="text"
          placeholder="Enter your full name"
          required
          name="userName"
        />
      </label>
      <label>
        <p>Email:</p>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegistratedPage;
