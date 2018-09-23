import React from 'react'

const Form = ({ emptyUser, authError, handleUsername, handlePassword, handleLogin, handleRegister }) => (
  <form className="form">
    <p className="inputContent">
      <label className="label">Email</label>
      <input
        className="input"
        type="text"
        onChange={handleUsername}
      />
    </p>
    <p className="inputContent">
      <label className="label">Password</label>
      <input
        className="input"
        type="password"
        onChange={handlePassword}
      />
    </p>
    <button className="button" onClick={handleLogin}>Enter</button>
    <button className="button" onClick={handleRegister}>Register</button>
    {emptyUser && <p className="empty">{authError}</p>}
  </form>
)

export default Form
