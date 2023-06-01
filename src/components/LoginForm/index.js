// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userinput: '',
    userpassword: '',
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
    this.setState({userpassword: event.target.value})
  }

  getUserPassword = () => {
    const {userpassword} = this.state

    return (
      <>
        <label htmlFor="Password" className="label-input">
          PASSWORD
        </label>
        <input
          id="Password"
          placeholder="Password"
          className="password"
          value={userpassword}
          type="password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
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
        <form className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="logo"
            className="logo-image large-logo-image"
          />
          <div className="input-container">{this.getUserInput()}</div>
          <div className="input-container">{this.getUserPassword()}</div>
          <button type="button" className="login=btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
