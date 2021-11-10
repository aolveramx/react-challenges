import { useState } from "react"

const RegisterForm = () => {

  const initialState = {}

  const [value, setValue] = useState(initialState)

  const { name, lastname, username, email, password } = value

  const handleInput = (e) => {
    setValue(e.target.value)
    console.log(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Register Form</h1>
      <hr />

      <div className="container">
        <form onSubmit={ handleSubmit }>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          value={ name }
          onChange={ handleInput }
          />
        <label>Last name</label>
        <input 
          type="text"
          name="lastname"
          value={ lastname }
          onChange={ handleInput }
          />
        <label>Username</label>
        <input 
          type="text"
          name="username"
          value={ username }
          onChange={ handleInput }
          />
        <label>Email</label>
        <input 
          type="email"
          name="email" 
          value={ email }
          onChange={ handleInput }
          />
        <label>Password</label>
        <input 
          type="password"
          name="password" 
          value={ password }
          onChange={ handleInput }
        />
        <button type="submit">Add user</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
