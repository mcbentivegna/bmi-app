import React from 'react'
import PropTypes from 'prop-types'

const DisplayBMI = ({ height }) => {
  return (
    <h1>{height}</h1>
  )
}

DisplayBMI.propTypes = {
  height: PropTypes.number
}

export default DisplayBMI
