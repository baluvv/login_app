import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {text: 'Please Login', status: 'Login'}

  checkLogin = () => {
    this.setState(prevState => {
      if (prevState.status === 'Login') {
        return {text: 'Welcome User', status: 'Logout'}
      }
      return {text: 'Please Login', status: 'Login'}
    })
  }

  render() {
    const {text, status} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">{text}</h1>
          <button type="button" className="button" onClick={this.checkLogin}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
