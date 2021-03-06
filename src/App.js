import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super ()
      this.state = {
        isLoggedIn: false
      }
      this.handleClick = this.handleClick.bind (this)
    }
    handleClick () {
      this.setState (prevState => {
        return {
          isLoggedIn: !prevState.isLoggedIn
        }
      })
    }
  render () {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "YOU ARE LOGGED IN" : "YOU ARE LOGGED OUT"
    return (
      <div>
        <button onClick = {this.handleClick}>{buttonText}</button>
        <h1> {displayText}</h1>
      </div>
    )
  }
}
export default App;
