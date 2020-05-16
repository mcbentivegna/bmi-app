import React, { Component } from 'react'
import './App.css'
import InputForm from './Components/InputForm.js'
import Header from './Components/Header.js'
import DisplayBMI from './Components/DisplayBMI.js'

class App extends Component {
  state = {
    BMI: 0
  };

  calculateBMI = (height, weight) => {
   const BMI = 703*weight/(height*height)
   const roundedBMI = Math.round(BMI*100)/100
   return roundedBMI
  }

  handleSubmit = (BMI) => {
    this.setState( prevState => {
      return {
        BMI
      }
    })
  }
  
  render () {
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <InputForm
          handleSubmit = {this.handleSubmit}
          calculateBMI = {this.calculateBMI}
        />
        <p></p>
        <DisplayBMI
          height = {this.state.BMI}
        />
      </div>
    )
  }
}

export default App
