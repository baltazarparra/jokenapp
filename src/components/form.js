import React from 'react'

const Form = ({ handleInvite }) => (
  <form className="form">
    <p className="inputContent">
      <label className="label">Name</label>
      <input className="input" type="text" />
    </p>
    <p className="inputContent">
      <label className="label">Password</label>
      <input className="input" type="password" />
    </p>
    <button className="button register" onClick={handleInvite}>Register</button>
    <button className="button" onClick={handleInvite}>Login</button>
  </form>
)

export default Form
