// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userinput: '',
    password: '',
    errorMsg: '',
    isLogedIn: false,
  }

  onChangeInput = event => {
    this.setState({userinput: event.target.value})
  }

  getUserInput = () => {
    const {userinput} = this.state

    return (
      <>
        <label htmlFor="Input" className="label-input">
          USERNAME
        </label>
        <input
          onChange={this.onChangeInput}
          id="Input"
          className="input"
          placeholder="Username"
          value={userinput}
          type="text"
        />
      </>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getUserPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="Password" className="label-input">
          PASSWORD
        </label>
        <input
          id="Password"
          placeholder="Password"
          className="password"
          value={password}
          type="password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onSuccessLogin = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailureLogin = error => {
    this.setState({errorMsg: error, isLogedIn: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userinput, password} = this.state
    const userDetails = {userinput, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  render() {
    const {errorMsg, isLogedIn} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="logo"
            className="logo-image large-logo-image"
          />
          <div className="input-container">{this.getUserInput()}</div>
          <div className="input-container">{this.getUserPassword()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {isLogedIn && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
