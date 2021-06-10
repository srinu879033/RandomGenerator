// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  // eslint-disable-next-line
  state = {number: 0}

  generate = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.generate}>
            Generate
          </button>
          <h1 className="result">{number}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
