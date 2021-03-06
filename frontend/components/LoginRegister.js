import React, { useState, useContext } from 'react'
import Axios from 'axios'
import auth from '../lib/auth'
import { UserContext } from './Context'


const LoginRegister = (props) => {
  const [loginRegister, setLoginRegister] = useState('Login')
  const [pswVisible, setPswVisible] = useState(false)
  const [register, setRegister] = useState()
  const [login, setLogin] = useState()
  const [errors, setErrors] = useState()
  const { setUser } = useContext(UserContext)
  if (errors) {
    console.log('errors1', errors)
  }


  const handlePassword = () => {
    if (!pswVisible) {
      setPswVisible(true)
    } else {
      setPswVisible(false)
    }
  }

  const handleChangeRegister = (event) => {
    const { name, value } = event.target
    setRegister(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleChangeLogin = (event) => {
    const { name, value } = event.target
    setLogin(prevState => ({
      ...prevState,
      [name]: value
    }))

  }

  const handleSubmitLogin = () => {
    event.preventDefault()
    Axios.post('/api/login', login)
      .then((res) => {
        setUser(res.data.user)
        const token = res.data.token
        auth.setToken(token)
        props.history.push('/home', { user: res.data.user })
      })
      .catch(err => {
        console.log('err', err.response.data.message)
        setErrors({ loginError: err.response.data.message })
      })
  }

  const handleSubmitRegister = (event) => {
    event.preventDefault()
    Axios.post('/api/register', register)
      .then(() => setLoginRegister('Login'))
      .catch(err => {
        console.log(err.response.data.errors)
        setErrors(err.response.data.errors)
        //setErrors(err.response.data.errors)
      })
  }

  const handleClickLogin = () => {
    setLoginRegister('Register')
  }
  const handleClickRegister = () => {
    setLoginRegister('Login')
  }

  return <div className="container-log-reg">
    <div className="container-wrap">

      {loginRegister === 'Login' && <form
        onChange={(event) => handleChangeLogin(event)}
        onSubmit={(event) => handleSubmitLogin(event)}>
        <div className="input">
          <input type="email" name="email" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>

        <div className="input">
          <i className="fa fa-eye password-eye" onClick={() => handlePassword()}></i>
          <input type={pswVisible ? 'text' : 'password'}
            name="password" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        {errors && <>{errors.loginError ? <span className="danger">{errors.loginError}</span> : null}</>}
        <div className="btn-container">
          <button type="submit" className="button">Login</button>
        </div>
        <div className="text">
          <h6>Don&#39;t have an account? <span className="span" onClick={(event) => handleClickLogin(event)}>register here!</span> </h6>
        </div>
      </form>}

      {loginRegister === 'Register' && <form
        onChange={(event) => handleChangeRegister(event)}
        onSubmit={(event) => handleSubmitRegister(event)}>
        <div className="input">
          <input type="text" name="name" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Full name</span>
          </label>
        </div>
        {errors && <>{errors.name ? <span className="danger">Name has to be unique</span> : null}</>}
        <div className="input">
          <input type="email" name="email" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        {errors && <>{errors.email ? <span className="danger">Email has to be unique</span> : null}</>}
        <div className="input">
          <i className="fa fa-eye password-eye" onClick={() => handlePassword()}></i>
          <input type={pswVisible ? 'text' : 'password'}
            name="password" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="input">
          <i className="fa fa-eye password-eye" onClick={() => handlePassword()}></i>
          <input type={pswVisible ? 'text' : 'password'}
            name="passwordConfirmation" autoComplete="off" required />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Password confirmation</span>
          </label>
        </div>
        {errors && <>{errors.passwordConfirmation ? <span className="danger">{errors.passwordConfirmation.properties.message}</span> : null}</>}
        <div className="btn-container">
          <button type="submit" className="button">Register</button>
        </div>
        <div className="text">
          <h6>You have an account? <span className="span" onClick={(event) => handleClickRegister(event)}>login here!</span> </h6>
        </div>
      </form>}
    </div>
  </div>
}


export default LoginRegister