import React, { Component } from "react";
import "../styles/App.css";

const users = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userError: "",
      passwordError: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();

    // Clear previous errors
    this.setState({ userError: "", passwordError: "" });

    const { email, password } = this.state;
    const user = users.find((u) => u.email === email);

    // Simulate 3-second API delay
    setTimeout(() => {
      if (!user) {
        console.log("User not found");
        this.setState({ userError: "User not found" });
        return;
      }

      if (user.password !== password) {
        console.log("Password Incorrect");
        this.setState({ passwordError: "Password Incorrect" });
        return;
      }

      console.log("Login Success:", user);
    }, 3000);
  };

  render() {
    return (
      <div id="main">
        {/* Login Form */}
        <form onSubmit={this.handleLogin}>

          {/* Email Input */}
          <input
            id="input-email"
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <div id="user-error" style={{ color: "red", height: "18px" }}>
            {this.state.userError}
          </div>

          {/* Password Input */}
          <input
            id="input-password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div id="password-error" style={{ color: "red", height: "18px" }}>
            {this.state.passwordError}
          </div>

          {/* Submit Button */}
          <button id="submit-form-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default App;
