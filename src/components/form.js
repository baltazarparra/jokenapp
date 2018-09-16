import React from 'react'

const Form = ({ emptyUser, handleUsername, handleAuth }) => (
  <form className="form" onSubmit={handleAuth}>
    <p className="inputContent">
      <label className="label">Name</label>
      <input
        className="input"
        type="text"
        onChange={handleUsername}
      />
    </p>
    <button className="button" type="submit">Enter</button>
    {emptyUser && <p className="empty">Enter a unique username</p>}
  </form>
)

export default Form
