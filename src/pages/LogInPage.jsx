import React from 'react';

const LogInPage = () => {
  return (
    <form>
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
          minLength={7}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LogInPage;
