import React from 'react'

const Form = ({ emptyUser, handleUsername, handlePassword, handleAuth }) => (
  <form className="form" onSubmit={handleAuth}>
    <p className="inputContent">
      <label className="label">Name</label>
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
    <button className="button" type="submit">Enter</button>
    {emptyUser && <p className="empty">Enter a unique username</p>}
  </form>
)

export default Form
