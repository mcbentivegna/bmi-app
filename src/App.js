import React, { Component } from 'react'
import './App.css'
import InputForm from './Components/InputForm.js'
import Header from './Components/Header.js'
import DisplayBMI from './Components/DisplayBMI.js'

class App extends Component {
  state = {
    BMI: 0
  };

  BMICategories = [
    {upper: 0, category: 'null'},
    {upper: 18.5, category: 'underweight', text: 'Underweight: > 18.5'},
    {upper: 24.9, category: 'normal', text: 'Normal: 18.6 - 24.9'},
    {upper: 30, category: 'overweight', text: 'Overweight: 25 - 29.9'},
    {category: 'obese', text: 'Obese: > 30'}
  ]

  calculateBMI = (height, weight) => {
   const BMI = 703*weight/(height*height)
   const roundedBMI = Math.round(BMI*100)/100
   return roundedBMI
  }

  returnBMICategory = (BMI) => {
    if (BMI === 0){
      return null
    }
    else {
      const BMICategoriesFiltered = this.BMICategories.filter( (cat) => cat.upper > BMI)
      return BMICategoriesFiltered.length>0 ? BMICategoriesFiltered[0] : this.BMICategories[this.BMICategories.length-1]
    }
  }

  handleSubmit = (BMI) => {
    this.setState( prevState => {
      return {
        BMI
      }
    })
  }
  
  render () {
    return (
      <div className="App">
        <Header/>
        <InputForm
          handleSubmit = {this.handleSubmit}
          calculateBMI = {this.calculateBMI}
        />
        <p></p>
        <DisplayBMI
          BMI = {this.state.BMI}
          BMICategories = {this.BMICategories}
          category = {this.returnBMICategory(this.state.BMI)}
        />
      </div>
    )
  }
}

export default App
