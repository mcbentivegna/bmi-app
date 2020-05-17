import React from 'react'
import PropTypes from 'prop-types'

const DisplayBMI = ({ BMI, BMICategories, category }) => {
  return (
    <div>
      <h1>{BMI}</h1>
      <p></p>
      <ul className = 'definitions'>
        {BMICategories.map((cat) => {
          const selected = category === null ? false : cat.category === category.category
          return <li key={cat.category} className = {selected ? 'selected-category' : null}> {cat.text} </li>
        })
        }
      </ul>
    </div>
  )
}

DisplayBMI.propTypes = {
  BMI: PropTypes.number,
  BMICategories: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.object
}

export default DisplayBMI
