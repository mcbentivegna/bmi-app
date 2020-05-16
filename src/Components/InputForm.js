import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputForm extends Component {
  state = {
    height: 0,
    weight: 0
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  onSubmit = e => {
    e.preventDefault()
    const BMICalc = this.props.calculateBMI(this.state.height, this.state.weight)
    this.props.handleSubmit(BMICalc)
    e.currentTarget.reset()
  }

  render () {
    return (
      <form
        className="search-form"
        onSubmit = {this.onSubmit}>
        <div>
          <input
            type="number"
            name="height"
            onChange={this.handleChange}
            min="10"
            max="100"
            placeholder="Height (inches)"/>
        </div>
        <div className = "input">
          <input
            type="number"
            name="weight"
            onChange={this.handleChange}
            min="1"
            max="2000"
            placeholder="Weight (pounds)"/>
        </div>
        <p></p>
        <button
          type="submit"
          id="submit"
          className="search-button"
        >Calculate BMI</button>
      </form>
    )
  }
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default InputForm
