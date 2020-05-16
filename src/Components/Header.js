import React from 'react'

const Header = () => (
  <header className="App-header">
    <h1>BMI Calculator</h1>
    <ul className = 'definitions'>
      <li>Underweight: {'<'} 18.5</li>
      <li>Normal: 18.6 - 24.9</li>
      <li>Overweight: 25 - 29.9</li>
      <li>Obese: {'>'} 30</li>
    </ul>
  </header>
)
export default Header
